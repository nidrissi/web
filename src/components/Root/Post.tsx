import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Mini from "../Mini";
import SeeMore from "./SeeMore";

const Post: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootPostQuery {
  allMdx(
    filter: {fields: {type: {eq: "post"}}}
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
        tags
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
      <h2 className="text-4xl font-bold mb-3">Posts</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, excerpt }) => (
            <Mini key={slug} type="post" slug={slug} frontmatter={frontmatter} excerpt={excerpt} />
          ))
        }
        <SeeMore to="/post" label="posts" />
      </div>
    </section>
  );
}
export default Post;
