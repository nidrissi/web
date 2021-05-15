import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import MetaResearch from "../components/meta/research";

const ResearchTemplate: React.FC<{ data: ResearchTemplateQuery }> = ({
  data: { mdx },
}) => {
  const {
    body,
    frontmatter: {
      title,
      publication,
      date,
      lastMod,
      authors,
      urls
    },
  } = mdx;

  return (
    <Layout title={title}>
      <h1 className="text-3xl font-bold mb-1">{title}</h1>
      <div className="text-lg mb-4">
        <MetaResearch
          publication={publication}
          date={new Date(date)}
          lastMod={lastMod ? new Date(lastMod) : null}
          authors={authors}
          urls={{ ...urls, pdf: urls?.pdf.publicURL }}
        />
      </div>
      <div className="prose prose-blue max-w-none">
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
      publication: string;
      date: string;
      lastMod?: string;
      authors: string[];
      urls: {
        pdf: { publicURL: string; }
        source: string;
        doi: string;
        arxiv: string;
        mathrev: string;
        zbmath: string;
        custom: { url: string; name: string }[];
      }
    };
  };
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        publication
        date
        lastMod
        authors
        urls {
          pdf {
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
