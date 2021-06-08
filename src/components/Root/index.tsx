import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../Layout";
import Contact from "./Contact";
import Research from "./Research";
import Class from "./Class";
import Talk from "./Talk";
import Post from "./Post";

const Index: React.FC<{}> = ({ children }) => {
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

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <article>
        <div className="float-right w-28 sm:w-40 md:w-56 m-3 p-1 border rounded-md">
          <StaticImage
            src="photo.jpg"
            alt="Photo of myself."
            className="rounded-sm"
            loading="eager"
            placeholder="tracedSVG"
          />
        </div>
        <header>
          <h1 role="banner" className="text-4xl font-bold mb-4">
            {siteTitle}
          </h1>
        </header>
        <div className="prose prose-blue max-w-none mb-3">
          {children}
        </div>
        <Contact />
      </article>
      <div className="flex flex-col gap-8 mt-8">
        <Research />
        <Class />
        <Talk />
        <Post />
      </div>
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
