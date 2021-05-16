import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "./Layout";
import Meta, { Frontmatter } from "./meta";

const PageTemplate: React.FC<{
  data: PageTemplateQuery;
  pageContext: {
    id: string;
    type: string
  }
}> = ({ data, pageContext: { type } }) => {
  const { body, frontmatter, excerpt } = data.mdx;

  const actualTitle =
    type === 'talk' ? (
      frontmatter.event
    ) : type === 'class' ? (
      `${frontmatter.title} (${frontmatter.year})`
    ) : (
      frontmatter.title
    );

  return (
    <Layout title={frontmatter.title} description={excerpt} date={frontmatter.date} lastMod={frontmatter.lastMod}>
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-700">{actualTitle}</h1>
        <Meta frontmatter={frontmatter} type={type} />
      </header>
      <div className="prose prose-blue max-w-none">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};
export default PageTemplate;

type PageTemplateQuery = {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: Frontmatter;
  };
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
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
        year
        event
        TBA
        location
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
          event
          video
          source
          doi
          arxiv
          mathrev
          zbmath
          custom {
            url
            name
          }
          customFile {
            name
            file {
              publicURL
            }
          }
        }
      }
    }
  }
`;
