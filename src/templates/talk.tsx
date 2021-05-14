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

const TalkTemplate: React.FC<{ data: PostTemplateQuery }> = ({
  data: { mdx },
}) => {
  const {
    body,
    frontmatter: { title },
  } = mdx;

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <div className="prose prose-blue">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default TalkTemplate;

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
