import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

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
        <title>{siteTitle}</title>
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
      </Helmet>
      <div className="container mx-auto">
        <header>
          <h1 className="text-4xl font-bold mb-3">{title}</h1>
        </header>
        <main>{children}</main>
        <footer className="py-2 text-center">
          <hr className="my-1" />
          Najib Idrissi
        </footer>
      </div>
    </>
  );
};

export default Layout;
