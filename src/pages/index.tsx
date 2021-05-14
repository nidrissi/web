import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  return <Layout title={data.site.siteMetadata.siteTitle}>Index page.</Layout>;
};

export default Index;

type IndexQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
    };
  };
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
