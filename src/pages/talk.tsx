import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout'
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";

type TalkListProps = {
  data: {
    allMdx: {
      nodes: {
        slug: string;
        wordCount: { words: number };
        frontmatter: Frontmatter;
      }[];
    }
  }
};

const TalkList: React.FC<TalkListProps> = ({ data }) => {
  const { allMdx: { nodes } } = data;

  return (
    <Layout title="Talks" description="My talks.">
      <h1 className="text-4xl font-bold mb-3">Talks</h1>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, wordCount: { words } }) => {
            return (
              <Mini key={slug} type="talk" levelUp slug={slug} frontmatter={frontmatter} noLink={words === 0} />
            );
          })
        }
      </div>
    </Layout>
  );
}
export default TalkList;

export const query = graphql`
query {
  allMdx(
    filter: {fields: {myType: {eq: "talk"}}}
    sort: {fields: frontmatter___date, order: DESC}
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
        urls {
          custom {
            name
            url
          }
          customFile {
            name
            file {
              publicURL
            }
          }
          notes {
            publicURL
          }
          pdf {
            publicURL
          }
          slides {
            publicURL
          }
          event
          source
          video
        }
      }
    }
  }
}`;
