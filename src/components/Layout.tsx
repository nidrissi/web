import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
      siteUrl: string;
    };
  };
};

const Layout: React.FC<{ title: string, description: string }> = ({ children, title, description }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteUrl },
    },
  }: LayoutQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteUrl
          }
        }
      }
    `
  );
  const { pathname } = useLocation();

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en', }}
        title={title !== siteTitle ? `${title} | ${siteTitle}` : siteTitle}
      >
        <meta charSet="utf-8" />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      <main className="container mx-auto p-2">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
