import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import React from "react";

import Layout from "./Layout";
import Meta, { Frontmatter } from "./meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";


type NextPrevious = {
  slug: string;
  frontmatter: { title: string; };
}

type PageTemplateProps = {
  data: {
    mdx: {
      body: string;
      fields: {
        myType: string;
      }
      excerpt: string;
      frontmatter: Frontmatter;
    };
    previous: NextPrevious;
    next: NextPrevious;
  };
};

const Pager: React.FC<{ previous: NextPrevious, next: NextPrevious, type: string }> = ({
  next, previous, type
}) => {
  if (!next && !previous) {
    return null;
  }
  if (type === 'misc') {
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
          {previous.frontmatter.title}
        </Link>
      ) : <div></div>}
      {next ? (
        <Link
          to={`/${type}/${next.slug}`}
          className={linkStyle}
        >
          {next.frontmatter.title}
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
    fields: { myType }
  } = data.mdx;

  const actualTitle =
    myType === 'talk' ? (
      `${frontmatter.event} @ ${frontmatter.location}`
    ) : myType === 'class' ? (
      `${frontmatter.title} (${frontmatter.year})`
    ) : (
      frontmatter.title
    );

  return (
    <Layout title={frontmatter.title} description={excerpt} date={frontmatter.date} lastMod={frontmatter.lastMod}>
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-700">{actualTitle}</h1>
        <Meta frontmatter={frontmatter} type={myType} />
      </header>
      <div className="prose prose-blue max-w-none">
        <MDXRenderer localImages={frontmatter.localImages}>
          {body}
        </MDXRenderer>
      </div>
      <Pager next={data.next} previous={data.previous} type={myType} />
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
        myType
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
        localImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousId }) {
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`;
