import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

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
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
      </Helmet>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>Najib Idrissi</footer>
    </div>
  );
};

export default Layout;
