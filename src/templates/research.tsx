import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";

const ResearchTemplate: React.FC<{ data: ResearchTemplateQuery }> = ({
  data: { mdx },
}) => {
  const {
    body,
    frontmatter: { title },
  } = mdx;

  return (
    <Layout title={title}>
      <div className="prose prose-blue">
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default ResearchTemplate;

type ResearchTemplateQuery = {
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
