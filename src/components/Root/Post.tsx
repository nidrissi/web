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
    limit: 6
  ) {
    nodes {
      slug
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date
        lastMod
        lang
        tags
        ...allUrlsFragment
      }
    }
  }
}`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Posts</h2>
      <div className="grid gap-4" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))"
      }}>
        {nodes.map(({ frontmatter, slug, excerpt }) => (
          <Mini key={slug} type="post" slug={slug} frontmatter={frontmatter} excerpt={excerpt} />
        ))}
      </div>
      <SeeMore to="/post">posts</SeeMore>
    </section>
  );
};
export default Post;
