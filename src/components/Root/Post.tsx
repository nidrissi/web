import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Meta from "../meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";

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
      excerpt(pruneLength: 280)
      frontmatter {
        title
        date
        lastMod
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
}
`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Posts</h2>
      {
        nodes.map(({ frontmatter, slug, excerpt }) => (
          <article key={slug} className="py-2">
            <h3 className="text-xl font-semibold mb-1 max-w-2xl">
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
    </section>
  );
}
export default Post;
