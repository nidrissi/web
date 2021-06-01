import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "./Layout";
import Meta, { Frontmatter } from "./meta";
import TOC, { TableOfContents } from "./TOC";
import { NextPrevious, NextPreviousProps } from "./NextPrevious";

type PageTemplateProps = {
  data: {
    mdx: {
      body: string;
      fields: {
        type: string;
      }
      excerpt: string;
      frontmatter: Frontmatter;
      tableOfContents: TableOfContents;
    };
    previous: NextPreviousProps;
    next: NextPreviousProps;
  };
};

export function actualTitle(
  frontmatter: {
    title: string;
    event: string;
    location: string;
    year: string;
  },
  type: string
) {
  return type === 'talk' ? (
    `${frontmatter.event} @ ${frontmatter.location}`
  ) : type === 'class' ? (
    `${frontmatter.title} (${frontmatter.year})`
  ) : (
    frontmatter.title
  );
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const {
    body,
    frontmatter,
    excerpt,
    fields: { type }
  } = data.mdx;

  const parsedTitle = actualTitle(frontmatter, type);
  return (
    <Layout title={parsedTitle} description={excerpt} date={frontmatter.date} lastMod={frontmatter.lastMod}>
      <header className="mb-4">
        <h1 role="banner" className="text-3xl font-bold">
          {parsedTitle}
        </h1>
        <Meta frontmatter={frontmatter} type={type} />
      </header>
      <TOC toc={data.mdx.tableOfContents} />
      <div className="prose prose-blue max-w-none">
        <MDXRenderer localImages={frontmatter.localImages}>
          {body}
        </MDXRenderer>
      </div>
      {type === "talk" && frontmatter.urls.slides ? (
        <div className="aspect-w-16 aspect-h-9 my-4">
          <iframe
            src={frontmatter.urls.slides.publicURL}
            title={`Slides for the talk: ${parsedTitle}`}
          />
        </div>
      ) : null}
      {type === "research" && frontmatter.urls.read ? (
        // approx A4 ratio
        <div className="aspect-w-1 aspect-h-1 my-4">
          <iframe
            src={frontmatter.urls.read.publicURL}
            title={`Read the research document: ${parsedTitle}`}
          />
        </div>
      ) : null}
      <NextPrevious next={data.next} previous={data.previous} type={type} />
    </Layout>
  );
};
export default PageTemplate;

export const query = graphql`
  query (
    $id: String,
    $previousId: String,
    $nextId: String,
    ) {
    mdx(id: { eq: $id }) {
      body
      fields {
        type
      }
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date
        lastMod
        tags
        publication
        authors
        accepted
        cursus
        courseType
        courseHours
        year
        event
        TBA
        location
        ... allUrlsFragment
        localImages {
          childImageSharp {
            gatsbyImageData
            original {
              src
            }
          }
        }
      }
    tableOfContents
    }
    previous: mdx(id: { eq: $previousId }) {
      slug
      frontmatter {
        title
        event
        location
        year
      }
    }
    next: mdx(id: { eq: $nextId }) {
      slug
      frontmatter {
        title
        event
        location
        year
      }
    }
  }
`;
