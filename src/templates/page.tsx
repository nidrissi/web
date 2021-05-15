import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import Meta, { Frontmatter } from "../components/meta";

const PageTemplate: React.FC<{
  data: PageTemplateQuery;
  pageContext: {
    id: string;
    type: string
  }
}> = ({ data, pageContext: { type } }) => {
  const { body, frontmatter,
  } = data.mdx;

  return (
    <Layout title={frontmatter.title}>
      <header className="mb-4">
        <h1 className="mb-1 text-3xl font-bold text-gray-700">{frontmatter.title}</h1>
        <Meta frontmatter={frontmatter} type={type} />
      </header>
      <div className="prose prose-indigo max-w-none">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default PageTemplate;

type PageTemplateQuery = {
  mdx: {
    body: string;
    frontmatter: Frontmatter;
  };
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        title
        date
        lastMod
        tags
        publication
        authors
        cursus
        what
        time
        urls {
          pdf {
            publicURL
          }
          slides {
            publicURL
          }
          notes {
            publicURL
          }
          source
          doi
          arxiv
          mathrev
          zbmath
          custom {
            url
            name
          }
        }
      }
    }
  }
`;
