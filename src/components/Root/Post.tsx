import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Meta from "../meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";
import SeeMore from "./SeeMore";

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
                  <Link to={`/post/${slug}`} className="text-blue-800 hover:underline">
                    {frontmatter.title}
                  </Link>
                }
              </h3>
              <div className="mb-2">
                <Meta frontmatter={frontmatter} type="post" />
              </div>
              <div className="text-sm hover:underline hover:text-blue-800 max-w-xl">
                <Link to={`/post/${slug}`}>
                  {excerpt}
                  {' '}
                  <FontAwesomeIcon icon={faCaretSquareRight} />
                </Link>
              </div>
            </article>
          ))
        }
        <SeeMore to="/post" label="research" />
      </div>
    </section>
  );
}
export default Post;
