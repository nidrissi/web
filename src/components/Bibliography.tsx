import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Meta from "./meta";

const Bibliography: React.FC<{ status: string }> = ({ status }) => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query BibliographyQuery {
  allMdx(
    filter: {fields: {type: {eq: "research"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      slug
      frontmatter {
        title
        authors
        date
        lastMod
        publication
        status
      }
    }
  }
}`);

  return (
    <ul>
      {nodes
        .filter(node => node.frontmatter.status === status)
        .map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link to={`/research/${slug}`}>
              {frontmatter.title}.
            </Link>
            <Meta frontmatter={frontmatter} type="research" />
          </li>
        ))
      }
    </ul>
  )
}
export default Bibliography;
