import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../Layout";
import Contact from "./Contact";
import Research from "./Research";
import Class from "./Class";

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

  const hr = <hr className="my-4" />

  return (
    <Layout title={siteTitle}>
      <img
        src="/img/photo.jpg"
        width="150px"
        height="150px"
        className="float-right m-2 rounded-md"
        alt="My photo."
      />
      <article>
        <div className="prose prose-blue max-w-none mb-3">
          {children}
        </div>
        <Contact />
        {hr}
        <Research />
        {hr}
        <Class />
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
