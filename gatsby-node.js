const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent)

    createNodeField({
      node,
      name: 'myType',
      value: sourceInstanceName
    })
  }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  for (const type of ['class', 'misc', 'post', 'research', 'talk']) {
    const result = await graphql(`
    query {
      allMdx(
        filter: {fields: {myType: {eq: "${type}"}}}
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
};
