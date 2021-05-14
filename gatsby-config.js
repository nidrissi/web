module.exports = {
  siteMetadata: {
    siteTitle: `Najib Idrissi's page`,
    author: `Najib Idrissi`,
    siteUrl: `https://idrissi.eu`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/post`,
        name: `post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/class`,
        name: `class`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/research`,
        name: `research`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/talk`,
        name: `talk`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-S549JC61XZ"],
      },
    },
  ],
};
