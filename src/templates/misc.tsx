import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import MetaData from "../components/meta/data";
import { Urls } from "../components/meta/links";

const MiscTemplate: React.FC<{ data: MiscTemplateQuery }> = ({ data }) => {
  const {
    body,
    frontmatter: { title, date, lastMod, urls },
  } = data.mdx;

  return (
    <Layout title={title}>
      <header className="mb-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-700">{title}</h1>
        <MetaData
          date={new Date(date)}
          lastMod={lastMod ? new Date(lastMod) : null}
          tags={null}
          urls={urls}
        />
      </header>
      <div className="prose prose-indigo max-w-none">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default MiscTemplate;

type MiscTemplateQuery = {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      date: string;
      lastMod?: string;
      urls: Urls;
    };
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
        urls {
          pdf {
            publicURL
          }
          slides {
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
