import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from '../components/Layout'
import Mini from "../components/Mini";

const TalkList: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query TalkListQuery {
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
}`);

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
