import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faDoorOpen,
  faMapMarkerAlt,
  faPhone,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        siteTitle,
        author: { name: author, email, organizations, phone, address, office },
      },
    },
  } = data;

  const contactLinks = [
    { label: email, url: `mailto:${email}`, icon: faAt },
    organizations.map((o) => ({
      label: o.name,
      url: o.url,
      icon: faUniversity,
    })),
    { label: phone.pretty, url: `tel:${phone.ugly}`, icon: faPhone },
    { label: address.join(" • "), icon: faMapMarkerAlt },
    { label: office, icon: faDoorOpen },
  ].flat();

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
            of the IMJ-PRG. You can find more info in <a href="/cv">CV</a>.
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
        <h2 className="text-2xl font-bold mb-1">Contact</h2>
        <ul>
          {contactLinks.map((l) => (
            <li key={l.label} className="content-center">
              <FontAwesomeIcon icon={l.icon} className="mr-1" />
              {l.url ? (
                <a href={l.url} className="text-blue-600 hover:underline">
                  {l.label}
                </a>
              ) : (
                l.label
              )}
            </li>
          ))}
        </ul>
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
        email: string;
        address: string[];
        office: string;
        phone: {
          pretty: string;
          ugly: string;
        };
        organizations: { name: string; url: string }[];
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
          email
          address
          office
          phone {
            pretty
            ugly
          }
          organizations {
            name
            url
          }
        }
      }
    }
  }
`;
