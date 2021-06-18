import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";

import Layout from "./Layout";
import Meta, { Frontmatter } from "./meta";
import { NextPrevious, NextPreviousProps } from "./NextPrevious";
import Embed from "./Embed";

type PageTemplateProps = {
  data: {
    mdx: {
      body: string;
      fields: {
        type: string;
      }
      excerpt: string;
      frontmatter: Frontmatter;
    };
    previous: NextPreviousProps;
    next: NextPreviousProps;
  };
};

export function actualTitle(
  frontmatter: {
    title: string;
    event?: string;
    location?: string;
    year?: string;
  },
  type: string
) {
  return type === 'talk' ? (
    `${frontmatter.event} @ ${frontmatter.location}`
  ) : type === 'class' ? (
    `${frontmatter.title} (${frontmatter.year}–${Number(frontmatter.year) + 1})`
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
    <Layout
      title={parsedTitle}
      description={excerpt}
      date={frontmatter.date}
      lastMod={frontmatter.lastMod}
      lang={frontmatter.lang}
    >
      <header className="mb-4">
        <h1 role="banner" className="text-3xl font-bold mb-1 text-gray-900 dark:text-gray-200">
          {parsedTitle}
        </h1>
        <Meta frontmatter={frontmatter} type={type} />
      </header>

      {/* Large prose if research or talk abstract. */}
      <div
        className={`prose prose-blue dark:prose-dark max-w-none ${["research", "talk"].includes(type) ? "prose-lg" : ""}`}
      >
        <MDXRenderer localImages={frontmatter.localImages} urls={frontmatter.urls}>
          {body}
        </MDXRenderer>
      </div>

      {type === "talk" && frontmatter.urls?.slides && (
        <Embed url={frontmatter.urls.slides.publicURL} alt={`Slides for the talk: ${parsedTitle}`} />
      )}
      {type === "talk" && frontmatter.urls?.notes && (
        <Embed url={frontmatter.urls.notes.publicURL} alt={`Notes for the talk: ${parsedTitle}`} />
      )}
      {type === "research" && frontmatter.urls?.read && (
        <Embed url={frontmatter.urls.read.publicURL} alt={`Read the research document: ${parsedTitle}`} />
      )}

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
        lang
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
            gatsbyImageData(placeholder: TRACED_SVG)
            original {
              src
            }
          }
        }
      }
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
