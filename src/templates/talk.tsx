import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";

const TalkTemplate: React.FC<{ data: TalkTemplateQuery }> = ({
  data: { mdx },
}) => {
  const {
    body,
    frontmatter: { title },
  } = mdx;

  return (
    <Layout title={title}>
      <div className="prose prose-blue max-w-none">
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default TalkTemplate;

type TalkTemplateQuery = {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
};
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
