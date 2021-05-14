const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    createPage({
      path: path.join("post", node.slug),
      component: path.resolve(`./src/templates/post.tsx`),
      context: { id: node.id },
    });
  });
};
