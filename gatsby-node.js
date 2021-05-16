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

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          fields {
            myType
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  const mdxNotes = result.data.allMdx.nodes;

  mdxNotes.forEach((node) => {
    const {
      id,
      slug,
      fields: { myType },
    } = node;
    createPage({
      path: path.join(myType, slug),
      component: path.resolve(`./src/templates/page.tsx`),
      context: { id, type: myType },
    });
  });
};
