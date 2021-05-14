import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";

type PostTemplateQuery = {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
};

const PostTemplate: React.FC<{ data: PostTemplateQuery }> = ({
  data: { mdx },
}) => {
  const {
    body,
    frontmatter: { title },
  } = mdx;

  return (
    <Layout title={title}>
      <div className="prose prose-blue">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
