import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import MetaData from "../components/meta/data";
import { Urls } from "../components/meta/links";
import MetaResearch from "../components/meta/research";

const PageTemplate: React.FC<{
  data: PageTemplateQuery;
  pageContext: {
    id: string;
    type: string
  }
}> = ({ data, pageContext: { type } }) => {
  const {
    body,
    frontmatter: { title, date, lastMod, tags, urls, publication, authors },
  } = data.mdx;

  const meta =
    type === 'research' ? (
      <MetaResearch
        publication={publication}
        date={new Date(date)}
        lastMod={lastMod ? new Date(lastMod) : null}
        authors={authors}
        urls={urls}
      />
    ) : (
      <MetaData
        date={new Date(date)
        }
        lastMod={lastMod ? new Date(lastMod) : null}
        tags={tags}
        urls={urls}
      />
    );

  return (
    <Layout title={title}>
      <header className="mb-4">
        <h1 className="mb-1 text-3xl font-bold text-gray-700">{title}</h1>
        {meta}
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
    frontmatter: {
      title: string;
      date: string;
      lastMod?: string;
      tags: string[];
      publication?: string;
      authors?: string[];
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
        tags
        publication
        authors
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
