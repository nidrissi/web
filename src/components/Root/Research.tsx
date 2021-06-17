import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Mini from "../Mini";
import SeeMore from "./SeeMore";
import { Frontmatter } from "../meta";

type RootResearchQuery = {
  allMdx: {
    nodes: {
      slug: string;
      frontmatter: Frontmatter;
    }[];
  }
};

const Research: React.FC<{}> = () => {
  const { allMdx: { nodes } }: RootResearchQuery = useStaticQuery(graphql`
query RootResearchQuery {
  allMdx(
    filter: {fields: {type: {eq: "research"}}, frontmatter: {status: {regex: "/publication|preprint/"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      slug
      frontmatter {
        title
        date
        lastMod
        lang
        tags
        authors
        publication
        accepted
        tags
        ...allUrlsFragment
      }
    }
  }
}`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Research</h2>
      <div className="flex flex-col gap-4">
        {nodes.map(({ frontmatter, slug }) => {
          return (
            <Mini key={slug} type="research" slug={slug} frontmatter={frontmatter} />
          );
        })}
        <SeeMore to="/research">research</SeeMore>
      </div>
    </section>
  );
}
export default Research;
