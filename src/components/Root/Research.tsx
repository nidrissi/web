import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Meta from "../meta";
import SeeMore from "./SeeMore";

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
          customFile {
            name
            file {
              publicURL
            }
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

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Research</h2>
      <div className="flex flex-col gap-4">
        {
          nodes.map(({ frontmatter, slug }) => {
            return (
              <article key={slug}>
                <h3 className="text-xl font-semibold">
                  <Link to={`/research/${slug}`} className="text-blue-800 hover:underline">
                    {frontmatter.title}
                  </Link>
                </h3>
                <Meta frontmatter={frontmatter} type="research" />
              </article>
            );
          })
        }
        <SeeMore to="/research" label="research" />
      </div>
    </section>
  );
}
export default Research;
