import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";

type ClassListProps = {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        nodes: {
          slug: string;
          wordCount: { words: number; };
          frontmatter: Frontmatter;
        }[];
      }[];
    }
  }
};

const ClassList: React.FC<ClassListProps> = ({ data: { allMdx: { group } } }) => {

  return (
    <Layout title="Teaching" description="The classes I have taught and/or am currently teaching.">
      <h1 role="banner" className="text-4xl font-bold mb-3">Teaching</h1>
      <div className="flex flex-col gap-8">
        {group
          // Sort in reverse year order
          .sort((g1, g2) => g2.fieldValue.localeCompare(g1.fieldValue))
          .map(({ fieldValue: year, nodes }) => (
            <div key={year}>
              <h2 className="text-2xl font-bold">{year}</h2>
              <div className="flex flex-col gap-2">
                {
                  nodes
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
export default ClassList;

export const query = graphql`
{
  allMdx(
    filter: {fields: {type: {eq: "class"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    group(field: frontmatter___year) {
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
          tags
          ...allUrlsFragment
        }
      }
      fieldValue
    }
  }
}
`;
