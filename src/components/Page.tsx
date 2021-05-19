import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import React from "react";

import Layout from "./Layout";
import Meta, { Frontmatter } from "./meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TOC, { TableOfContents } from "./TOC";

type NextPreviousProps = {
  slug: string;
  frontmatter: {
    title: string;
    event: string;
    location: string;
    year: string;
  };
}

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

const NextPrevious: React.FC<{ previous: NextPreviousProps, next: NextPreviousProps, type: string }> = ({
  next, previous, type
}) => {
  if (!next && !previous) {
    return null;
  }
  if (type === 'misc' || type === 'class') {
    return null;
  }

  const linkStyle = "block p-1 text-sm text-green-700 border border-green-700 rounded-md hover:bg-green-700 hover:text-white";

  return (
    <div className="flex justify-between w-full mt-6">
      {previous ? (
        <Link
          to={`/${type}/${previous.slug}`}
          className={linkStyle}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
          {actualTitle(previous.frontmatter, type)}
        </Link>
      ) : <div></div>}
      {next ? (
        <Link
          to={`/${type}/${next.slug}`}
          className={linkStyle}
        >
          {actualTitle(next.frontmatter, type)}
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </Link>
      ) : <div></div>}
    </div>

  );
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const {
    body,
    frontmatter,
    excerpt,
    fields: { type }
  } = data.mdx;

  return (
    <Layout title={frontmatter.title} description={excerpt} date={frontmatter.date} lastMod={frontmatter.lastMod}>
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-700">
          {actualTitle(frontmatter, type)}
        </h1>
        <Meta frontmatter={frontmatter} type={type} />
      </header>
      <TOC toc={data.mdx.tableOfContents} />
      <div className="prose prose-blue max-w-none">
        <MDXRenderer localImages={frontmatter.localImages}>
          {body}
        </MDXRenderer>
      </div>
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
        cursus
        what
        time
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
