import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import MetaResearch from "../meta/research";
import Meta from "../meta";

const Research: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query RootResearchQuery {
  allMdx(
    filter: {fields: {myType: {eq: "research"}}, frontmatter: {status: {regex: "/publication|preprint/"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      slug
      frontmatter {
        title
        tags
        authors
        date
        lastMod
        publication
        urls {
          arxiv
          custom {
            name
            url
          }
          doi
          hal
          mathrev
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
          zbmath
        }
      }
    }
  }
}`);

  return <>
    <h2 className="text-4xl font-bold mb-3">Research</h2>
    {
      nodes.map(({ frontmatter, slug }) => (
        <div key={frontmatter.title} className="py-2">
          <h3 className="text-2xl font-semibold">
            <a href={`research/${slug}`} className="text-green-800 hover:underline">
              {frontmatter.title}
            </a>
          </h3>
          <Meta frontmatter={frontmatter} type="research" />
        </div>
      ))
    }</>;
}
export default Research;
