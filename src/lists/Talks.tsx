import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout'
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";
import Pager from "./Pager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

type TalkListProps = {
  data: {
    allMdx: {
      nodes: {
        slug: string;
        wordCount: { words: number };
        frontmatter: Frontmatter;
      }[];
    }
  },
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  }
};

const TalkList: React.FC<TalkListProps> = ({ data, pageContext }) => {
  const { allMdx: { nodes } } = data;
  const { numPages, currentPage } = pageContext;
  const title = `Talks (p. ${currentPage}/${numPages})`;

  return (
    <Layout title={title} description="My talks.">
      <h1 role="banner" className="text-4xl font-bold mb-3">
        <FontAwesomeIcon icon={faComments} size="sm" />&nbsp;{title}
      </h1>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, wordCount: { words } }) => {
            return (
              <Mini key={slug} type="talk" levelUp slug={slug} frontmatter={frontmatter} noLink={words === 0} />
            );
          })
        }
      </div>
      <Pager currentPage={currentPage} numPages={numPages} type="talk" />
    </Layout>
  );
}
export default TalkList;

export const query = graphql`
query talkListQuery($skip: Int!, $limit: Int!) {
  allMdx(
    filter: {fields: {type: {eq: "talk"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: $limit
    skip: $skip
  ) {
    nodes {
      slug
      wordCount {
        words
      }
      frontmatter {
        title
        date
        lastMod
        TBA
        location
        event
        tags
        ...allUrlsFragment
      }
    }
  }
}`;
