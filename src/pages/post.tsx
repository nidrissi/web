import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Meta from "../components/meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

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
            <article key={slug}>
              <h2 className="text-xl font-semibold mb-1 max-w-2xl">
                {
                  <a href={`post/${slug}`} className="text-indigo-800 hover:underline">
                    {frontmatter.title}
                  </a>
                }
              </h2>
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
    </Layout>
  );
}
export default PostList;
