import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Mini from "../components/Mini";

const PostList: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query PostListQuery {
  allMdx(
    filter: {fields: {myType: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
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
          event
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

  // TODO Reduce code duplication...
  return (
    <Layout title="Posts" description="My blog posts.">
      <h1 className="text-4xl font-bold mb-4">Posts</h1>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, excerpt }) => (
            <Mini key={slug} type="post" levelUp slug={slug} frontmatter={frontmatter} excerpt={excerpt} />
          ))
        }
      </div>
    </Layout>
  );
}
export default PostList;
