import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Mini from "../Mini";
import SeeMore from "./SeeMore";

const Class: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootClassQuery {
  allMdx(
    filter: {fields: {myType: {eq: "class"}}, frontmatter: {year: {eq: "2020–2021"}}}
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
        time
        what
        cursus
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
          source
          video
        }
      }
    }
  }
}`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Teaching (2020-2021)</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
            <Mini key={slug} type="class" slug={slug} frontmatter={frontmatter} noLink={words === 0} />
          ))
        }
        <div>
          <SeeMore to="/class" label="teaching" />
        </div>
      </div>
    </section>
  );
}
export default Class;
