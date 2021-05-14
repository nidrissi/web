import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import MetaData from "../components/meta/data";

const PostTemplate: React.FC<{ data: PostTemplateQuery }> = ({ data }) => {
  const {
    body,
    frontmatter: { title, date, lastMod, tags, urls },
  } = data.mdx;

  return (
    <Layout title={title}>
      <header className="mb-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-700">{title}</h1>
        <p>
          <MetaData
            date={new Date(date)}
            lastMod={lastMod ? new Date(lastMod) : null}
            tags={tags}
            urls={urls}
          />
        </p>
      </header>
      <div className="prose prose-indigo">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default PostTemplate;

type PostTemplateQuery = {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      date: string;
      lastMod?: string;
      tags: string[];
      urls: {
        source: string;
      };
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
        urls {
          source
        }
      }
    }
  }
`;
