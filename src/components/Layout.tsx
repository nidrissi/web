import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

import Footer from "./Footer";

import "../styles/global.css";
import "katex/dist/katex.css";

type LayoutQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
      siteUrl: string;
    };
  };
};

const Layout: React.FC<{ title: string }> = ({ children, title }) => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title !== siteTitle ? `${title} | ${siteTitle}` : siteTitle}
        </title>
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
      </Helmet>
      <main className="container mx-auto p-2">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
