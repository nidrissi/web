import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../Layout";
import Contact from "./Contact";
import Research from "./Research";
import Class from "./Class";
import Talk from "./Talk";
import Post from "./Post";

const Index: React.FC<{ description: string }> = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        siteTitle,
        siteDescription
      },
    },
  }: IndexQuery = useStaticQuery(graphql`
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
    <Layout title={siteTitle} description={siteDescription}>
      <div className="float-right m-3 p-1 border rounded-md">
        <StaticImage
          src="../../images/photo.jpg"
          alt="A photo of me."
          className="rounded-sm w-28 sm:w-40"
          loading="eager"
        />
      </div>
      <header>
        <h1 role="banner" className="text-3xl font-medium mb-4">
          Najib Idrissi
        </h1>
      </header>
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
      siteDescription: string;
    };
  };
};
