import React from "react";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";

type TagListProps = {
  data: {
    allMdx: {
      nodes: {
        slug: string;
        excerpt: string;
        fields: {
          type: string;
        }
        frontmatter: Frontmatter;
      }[];
    }
  },
  pageContext: {
    tag: string;
  }
};

const TagList: React.FC<TagListProps> = ({ data: { allMdx: { nodes } }, pageContext: { tag } }) => {
  return (
    <Layout title={`Pages tagged ${tag}`} description={`The list of all pages tagged with #${tag}`}>
      <h1 role="banner" className="text-4xl font-bold mb-4">
        <FontAwesomeIcon icon={faTag} size="sm" />&nbsp;Pages tagged {tag}
      </h1>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, fields: { type }, slug, excerpt }) => (
            <Mini key={slug} type={type} levelUp slug={slug} frontmatter={frontmatter} excerpt={excerpt} />
          ))
        }
      </div>
    </Layout>
  )
};
export default TagList;

export const query = graphql`
query tagListQuery($tag: String!) {
  allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    nodes {
      slug
      excerpt(pruneLength: 250)
      fields {
        type
      }
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
        ...allUrlsFragment
        localImages {
          childImageSharp {
            gatsbyImageData
            original {
              src
            }
          }
        }
      }
    }
  }
}
`
