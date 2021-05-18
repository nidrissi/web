const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent)

    createNodeField({
      node,
      name: 'type',
      value: sourceInstanceName
    })
  }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // The components and optional pagination for lists
  const listAssociation = {
    post: {
      component: './src/components/Lists/Posts.tsx',
      perPage: 5
    },
    talk: {
      component: './src/components/Lists/Talks.tsx',
      perPage: 5
    },
    class: {
      component: './src/components/Lists/Classes.tsx'
    },
    research: {
      component: './src/components/Lists/Research.tsx'
    },
  };

  // Create pages of all types and lists
  // TODO: Do just one query and group?
  for (const type of ['class', 'misc', 'post', 'research', 'talk']) {
    const result = await graphql(`
    query {
      allMdx(
        filter: {fields: {type: {eq: "${type}"}}}
        sort: {fields: frontmatter___date}
      ) {
        edges {
          node {
            id
            slug
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
    }
  `);

    if (result.errors) {
      reporter.panicOnBuild('ERROR: Loading "createPages" query');
    }

    const edges = result.data.allMdx.edges;

    // Create a paginated list
    if (listAssociation[type]) {
      const { component, perPage } = listAssociation[type];
      if (perPage) {

        const numPages = Math.ceil(edges.length / perPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/${type}` : `/${type}/${i + 1}`,
            component: path.resolve(component),
            context: {
              limit: perPage,
              skip: i * perPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      } else {
        createPage({
          path: `/${type}`,
          component: path.resolve(component),
        })
      }
    };

    // Create all the pages
    edges.forEach(({
      node: {
        id,
        slug,
      },
      previous,
      next
    }) => {
      createPage({
        path: path.join(type, slug),
        component: path.resolve(`./src/components/Page.tsx`),
        context: {
          id,
          previousId: previous?.id,
          nextId: next?.id
        },
      });
    });
  }

  // Tag pages
  const tagResult = await graphql(`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }`);
  if (tagResult.errors) {
    reporter.panicOnBuild(`Error while running tags GraphQL query.`)
    return
  }
  const tags = tagResult.data.allMdx.group;
  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag.fieldValue}/`,
      component: path.resolve("./src/components/Lists/Tags.tsx"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
};
