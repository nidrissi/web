module.exports = {
  siteMetadata: {
    siteUrl: `https://idrissi.eu`,
    siteTitle: `Najib Idrissi's page`,
    siteDescription: `Hello! I am Najib Idrissi, a mathematician, and this is my webpage.`,
    author: {
      name: `Najib Idrissi`,
      email: `najib.idrissi-kaitouni@imj-prg.fr`,
      organizations: [
        { name: "Université de Paris", url: "https://u-paris.fr" },
        { name: "IMJ-PRG", url: "https://www.imj-prg.fr" },
      ],
      address: [
        "Bâtiment Sophie Germain",
        "8 place Aurélie Nemours",
        "F-75013 Paris",
        "France",
      ],
      office: "(Sophie Germain) SG-7032, 7th floor",
      phone: {
        pretty: "(+33) 01 57 27 91 16",
        ugly: "+33157279116",
      },
      social: {
        arXiv: `idrissi_n_1`,
        github: `nidrissi`,
        twitter: `najib_idrissi`,
        mathoverflow: `36146/najib-idrissi`,
      },
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/misc`,
        name: `misc`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/index.tsx"),
        },
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [
          require("remark-math"),
          require("remark-html-katex"),
        ],
        rehypePlugins: [
          require("@mapbox/rehype-prism")
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              "dashes": "oldschool"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-S549JC61XZ"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Najib Idrissi's page`,
        short_name: `Najib Idrissi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `static/img/photo.jpg`,
      },
    },
  ],
};
