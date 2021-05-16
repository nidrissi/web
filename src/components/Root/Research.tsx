import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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
          nodes.map(({ frontmatter, slug }) => (
            <article key={slug}>
              <h3 className="text-xl font-semibold">
                <a href={`research/${slug}`} className="text-yellow-700 hover:underline">
                  {frontmatter.title}
                </a>
              </h3>
              <Meta frontmatter={frontmatter} type="research" />
            </article>
          ))
        }
      </div>
    </section>
  );
}
export default Research;
