module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    siteUrl: `https://idrissi.eu`,
    siteTitle: `Najib Idrissi's math page`,
    siteDescription: `Hello! I am Najib Idrissi, a mathematician working at Université de Paris, and this is my personal webpage.`,
    author: {
      name: `Najib Idrissi`,
      email: `najib.idrissi-kaitouni@imj-prg.fr`,
      organizations: [
        { name: "Université de Paris", url: "https://u-paris.fr" },
        { name: "IMJ-PRG", url: "https://www.imj-prg.fr" },
      ],
      address: {
        url: `https://goo.gl/maps/2nQKHG6pEdb6w4f5A`,
        location: [
          "Bâtiment Sophie Germain",
          "8 place Aurélie Nemours",
          "F-75013 Paris",
          "France",
        ]
      },
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
          require("remark-external-links"),
          [require("@silvenon/remark-smartypants"), { "dashes": "oldschool" }],
        ],
        rehypePlugins: [
          require("rehype-katex"),
          require("@mapbox/rehype-prism"),
          require("rehype-slug"),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              tracedSVG: true,
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
        name: `Najib Idrissi`,
        short_name: `Najib Idrissi`,
        description: `Home page of Najib Idrissi`,
        start_url: `/`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#065F46`,
        display: `fullscreen`,
        icon: `src/components/Root/photo.jpg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    // needs to be after manifest
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
};
