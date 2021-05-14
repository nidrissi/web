import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        siteTitle,
        author: { name: author },
      },
    },
  } = data;

  return (
    <Layout title={siteTitle}>
      <h1 className="text-3xl font-bold mb-3">{author}</h1>
      <div className="prose prose-blue">
        <p>
          Hello! I am a <em>maître de conférences</em> at the math department of
          the <a href="https://u-paris.fr">University of Paris</a> and a member
          of the team-project{" "}
          <a href="https://www.imj-prg.fr/tga/">
            Algebraic Topology &amp; Geometry
          </a>{" "}
          of the{" "}
          <a href="https://www.imj-prg.fr">
            Institut de Mathématiques de Jussieu&ndash;Paris Rive Gauche
          </a>
          . I am one of the organizers of the{" "}
          <a href="https://www.imj-prg.fr/gestion/evenement/affEvenement/43">
            Topology Seminar
          </a>{" "}
          of the IMJ-PRG. You can find more info in <a href="/cv">CV</a>.
        </p>
        <p>
          I am mainly interested in operads and their applications to algebraic
          topology and homological algebra. I am especially interested in the
          study of configuration spaces of manifolds, their links to graph
          complexes, and the invariants they define.
        </p>
      </div>
    </Layout>
  );
};

export default Index;

type IndexQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
      author: {
        name: string;
      };
    };
  };
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        author {
          name
        }
      }
    }
  }
`;
