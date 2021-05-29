import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";
import Pager from "./Pager";

type PostListProps = {
  data: {
    allMdx: {
      nodes: {
        slug: string;
        excerpt: string;
        frontmatter: Frontmatter;
      }[];
    }
  },
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  }
};

const PostList: React.FC<PostListProps> = ({ data, pageContext }) => {
  const { allMdx: { nodes } } = data;
  const { numPages, currentPage } = pageContext;
  const title = `Posts (p. ${currentPage}/${numPages})`;

  return (
    <Layout title={title} description="My blog posts.">
      <h1 role="banner" className="text-4xl font-bold mb-4">
        {title}
      </h1>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug, excerpt }) => (
            <Mini key={slug} type="post" levelUp slug={slug} frontmatter={frontmatter} excerpt={excerpt} />
          ))
        }
      </div>
      <Pager currentPage={currentPage} numPages={numPages} type="post" />
    </Layout>
  );
}
export default PostList;

export const query = graphql`
query postListQuery($skip: Int!, $limit: Int!) {
  allMdx(
    filter: {fields: {type: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: $limit
    skip: $skip
  ) {
    nodes {
      slug
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date
        lastMod
        tags
        ...allUrlsFragment
      }
    }
  }
}
`;
