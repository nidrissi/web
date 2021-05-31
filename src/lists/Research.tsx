import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Mini from "../components/Mini";
import { Frontmatter } from "../components/meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const sections = [
  { key: "publication", title: "Publications" },
  { key: "preprint", title: "Preprints" },
  { key: "thesis", title: "Theses" },
]

type ResearchListProps = {
  data: {
    allMdx: {
      nodes: {
        slug: string;
        frontmatter: Frontmatter;
      }[];
    }
  }
};

const ResearchList: React.FC<ResearchListProps> = ({ data }) => {
  const { allMdx: { nodes } } = data;

  return (
    <Layout title="Research" description="My research.">
      <h1 role="banner" className="text-4xl font-bold mb-2">
        <FontAwesomeIcon icon={faFlask} size="sm" />&nbsp;Research
      </h1>
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

export const query = graphql`
query {
  allMdx(
    filter: {fields: {type: {eq: "research"}}}
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
        accepted
        status
        ...allUrlsFragment
      }
    }
  }
}`;
