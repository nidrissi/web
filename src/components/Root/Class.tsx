import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Meta from "../meta";

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
      {
        nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
          <article key={slug} className="py-2">
            <h3 className="text-xl font-semibold mb-1">
              {
                words > 0 ? (
                  <a href={`class/${slug}`} className="text-purple-800 hover:underline">
                    {frontmatter.title}
                  </a>
                ) : <>{frontmatter.title}</>
              }
            </h3>
            <Meta frontmatter={frontmatter} type="class" />
          </article>
        ))
      }
    </section>
  );
}
export default Class;
