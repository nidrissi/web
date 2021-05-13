import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout title={post.frontmatter.title}>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};
export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
