import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Contact from "../components/Contact";

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
      <img
        src="/img/photo.jpg"
        width="150px"
        height="150px"
        className="float-right m-2 rounded-md"
      />
      <article>
        <div className="prose prose-blue max-w-none mb-3">
          <h1>{author}</h1>
          <p>
            Hello! I am a <em>maître de conférences</em> at the math department
            of the <a href="https://u-paris.fr">University of Paris</a> and a
            member of the team-project{" "}
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
            of the IMJ-PRG. You can find more info in{" "}
            <Link to="/cv">my CV</Link>.
          </p>
          <p>
            I am mainly interested in operads and their applications to
            algebraic topology and homological algebra. I am especially
            interested in the study of configuration spaces of manifolds, their
            links to graph complexes, and the invariants they define.
          </p>
          <p className="text-xs">
            (Last updated May 14<sup>th</sup>, 2021.)
          </p>
        </div>
        <Contact />
      </article>
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
