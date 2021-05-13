module.exports = {
  siteMetadata: {
    siteTitle: `Najib Idrissi's page`,
    author: `Najib Idrissi`,
    siteUrl: `https://idrissi.eu`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
  ],
};
