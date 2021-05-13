import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../../components/Layout";

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout title={post.frontmatter.title}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};
export default PostTemplate;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
