import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Index = ({ data }) => {
  return <Layout title={data.site.siteMetadata.author}>Index page.</Layout>;
};

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
