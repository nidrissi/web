import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import Meta from "../components/meta/data";

const PostTemplate: React.FC<{ data: PostTemplateQuery }> = ({ data }) => {
  const {
    body,
    frontmatter: { title, date, lastMod, tags },
  } = data.mdx;

  return (
    <Layout title={title}>
      <header className="mb-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-700">{title}</h1>
        <p>
          <Meta
            date={new Date(date)}
            lastMod={lastMod ? new Date(lastMod) : null}
            tags={tags}
          />
        </p>
      </header>
      <div className="prose prose-blue">
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
      }
    }
  }
`;
