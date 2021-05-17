import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Meta from "../components/meta";
import Mini from "../components/Mini";

const Class: React.FC<{}> = () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
query ClassListQuery {
  allMdx(
    filter: {fields: {myType: {eq: "class"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      slug
      wordCount {
        words
      }
      frontmatter {
        title
        date
        lastMod
        time
        what
        cursus
        year
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
}`);

  const years = [...new Set(nodes.map(c => c.frontmatter.year))].sort().reverse();

  return (
    <Layout title="Teaching" description="My teaching.">
      <h1 className="text-4xl font-bold mb-3">Teaching</h1>
      <div className="flex flex-col gap-8">
        {years.map(year => (
          <div key="year">
            <h2 className="text-2xl font-bold">{year}</h2>
            <div className="flex flex-col gap-2">
              {
                nodes
                  .filter(node => node.frontmatter.year === year)
                  .map(({ frontmatter, slug, wordCount: { words } }) => (
                    <Mini key={slug} type="class" slug={slug} frontmatter={frontmatter} noLink={words === 0} />
                  ))
              }
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Class;
