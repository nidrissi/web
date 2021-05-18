import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Mini from "../Mini";
import SeeMore from "./SeeMore";

const Talk: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootTalkQuery {
  allMdx(
    filter: {fields: {type: {eq: "talk"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 5
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
    <section>
      <h2 className="text-4xl font-bold mb-3">Talks</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
            <Mini key={slug} type="talk" slug={slug} frontmatter={frontmatter} noLink={words === 0} />
          ))
        }
        <SeeMore to="/talk" label="talks" />
      </div>
    </section>
  );
}
export default Talk;
