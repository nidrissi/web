import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Meta from "../meta";

const Talk: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootTalkQuery {
  allMdx(
    filter: {fields: {myType: {eq: "talk"}}}
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
      <h2 className="text-4xl font-bold mb-3">Talks</h2>
      {
        nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
          <article key={slug} className="py-2">
            <h3 className="text-xl font-semibold mb-1">
              {
                words > 0 ? (
                  <a href={`talk/${slug}`} className="text-green-800 hover:underline">
                    {frontmatter.title}
                  </a>
                ) : <>{frontmatter.title}</>
              }
            </h3>
            <Meta frontmatter={frontmatter} type="talk" />
          </article>
        ))
      }
    </section>
  );
}
export default Talk;
