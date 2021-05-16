import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../Layout";
import Contact from "./Contact";
import Research from "./Research";
import Class from "./Class";
import Talk from "./Talk";
import Post from "./Post";

const Index: React.FC<{ data: IndexQuery, description: string }> = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        siteTitle,
        siteDescription
      },
    },
  } = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              siteTitle
              siteDescription
            }
          }
        }`);

  const hr = <hr className="my-4" />

  return (
    <Layout title={siteTitle} description={siteDescription} date={new Date().toISOString()}>
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
        {hr}
        <Talk />
        {hr}
        <Post />
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
