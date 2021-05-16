import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Meta from "../meta";
import { Link } from "gatsby";

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
      <h2 className="text-4xl font-bold mb-3">Talks</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
            <article key={slug}>
              <h3 className="text-xl font-semibold">
                {
                  words > 0 ? (
                    <Link to={`/talk/${slug}`} className="text-green-800 hover:underline">
                      {frontmatter.title}
                    </Link>
                  ) : <>{frontmatter.title}</>
                }
              </h3>
              <Meta frontmatter={frontmatter} type="talk" />
            </article>
          ))
        }
      </div>
    </section>
  );
}
export default Talk;
