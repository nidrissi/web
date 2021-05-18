import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import Mini from "../Mini";
import { Frontmatter } from "../meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

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
    <Layout title={`Tag #${tag}`} description={`The list of all pages tagged with #${tag}`}>
      <h1 className="text-4xl font-bold mb-4">
        <FontAwesomeIcon icon={faTag} className="mr-1" aria-label="Tag" />
        {tag}
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
        ...allUrlsFragment
      }
    }
  }
}
`
