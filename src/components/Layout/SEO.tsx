import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";

type SEOQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
      siteUrl: string;
      author: {
        name: string
        social: {
          twitter: string
        }
      }
    };
  };
};


export type SEOProps = {
  title: string;
  description: string;
  date?: string;
  lastMod?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, date, lastMod }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteUrl, author: { name, social: { twitter } } },
    },
  }: SEOQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteUrl
            author {
              name
              social {
                twitter
              }
            }
          }
        }
      }
    `
  );
  const { pathname } = useLocation();

  const isRoot = title === siteTitle;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en', }}
      title={isRoot ? siteTitle : `${title} · ${siteTitle}`}
    >
      <meta charSet="utf-8" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="description" content={description} />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:creator" content={`@${twitter}`} />
      <meta name="twitter:image" content={`${siteUrl}/img/photo.jpg`} />
      <meta name="twitter:description" content={description} />

      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:image" content={`${siteUrl}/img/social.png`} />
      <meta property="og:type" content={isRoot ? "profile" : "article"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:profile:first_name" content={name.split(' ')[0]} />
      <meta property="og:profile:last_name" content={name.split(' ')[1]} />
      {date
        ? <meta property="og:article:published_time" content={new Date(date).toISOString()} />
        : null}
      {lastMod
        ? <meta property="og:article:modified_time" content={new Date(lastMod).toISOString()} />
        : null}
    </Helmet>
  );
};

export default SEO;
