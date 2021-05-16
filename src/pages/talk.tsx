import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from '../components/Layout'
import Meta from '../components/meta'

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
              <article key={slug} >
                <h2 className="text-xl font-semibold">
                  {words > 0 ? (
                    <Link to={`/talk/${slug}`} className="text-blue-800 hover:underline">
                      {`${frontmatter.event} @ ${frontmatter.location}`}
                    </Link>
                  ) : <>{`${frontmatter.event} @ ${frontmatter.location}`}</>}
                </h2>
                <Meta frontmatter={frontmatter} type="talk" />
              </article>
            );
          })
        }
      </div>
    </Layout>
  );
}
export default TalkList;
