import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Meta from "../components/meta";
import Mini from "../components/Mini";

const sections = [
  { key: "publication", title: "Publications" },
  { key: "preprint", title: "Preprints" },
  { key: "thesis", title: "Theses" },
]

const ResearchList: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query ResearchListQuery {
  allMdx(
    filter: {fields: {myType: {eq: "research"}}}
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
        status
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
    <Layout title="Research" description="My research.">
      <h1 className="text-4xl font-bold mb-2">Research</h1>
      <div className="flex flex-col gap-6">
        {sections.map(({ key, title }) => (
          <section key={key}>
            <h2 className="text-2xl font-semibold mb-1">{title}</h2>
            <div className="flex flex-col gap-3">
              {
                nodes
                  .filter(({ frontmatter }) => frontmatter.status === key)
                  .map(({ frontmatter, slug }) => (
                    <Mini key={slug} type="research" slug={slug} frontmatter={frontmatter} />
                  ))
              }
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
export default ResearchList;
