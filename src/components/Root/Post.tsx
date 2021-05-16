import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Meta from "../meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

const Post: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootPostQuery {
  allMdx(
    filter: {fields: {myType: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 5
  ) {
    nodes {
      slug
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date
        lastMod
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
}
`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Posts</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, excerpt }) => (
            <article key={slug}>
              <h3 className="text-xl font-semibold max-w-2xl">
                {
                  <a href={`post/${slug}`} className="text-indigo-800 hover:underline">
                    {frontmatter.title}
                  </a>
                }
              </h3>
              <div className="mb-2">
                <Meta frontmatter={frontmatter} type="post" />
              </div>
              <div className="prose prose-indigo prose-sm max-w-xl">
                {excerpt}
                {' '}
                <a href={`post/${slug}`}>
                  Read more{' '}
                  <FontAwesomeIcon icon={faCaretSquareRight} />
                </a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}
export default Post;
