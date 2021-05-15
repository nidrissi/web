import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../Layout";
import Contact from "./Contact";

const Index: React.FC<{ data: IndexQuery }> = ({ children, data }) => {
  const {
    site: {
      siteMetadata: {
        siteTitle
      },
    },
  } = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              siteTitle
            }
          }
        }`);

  return (
    <Layout title={siteTitle}>
      <img
        src="/img/photo.jpg"
        width="150px"
        height="150px"
        className="float-right m-2 rounded-md"
      />
      <article>
        <div className="prose prose-blue max-w-4xl mb-3">
          {children}
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
    };
  };
};
