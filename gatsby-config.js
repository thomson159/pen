const menu = require("./src/utils/menu");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Premium Bullet Shell Pens – 243Pen.store`,
    description: `Handcrafted, exclusive pens made from fired bullet casings. A unique blend of craftsmanship, history, and elegance. Perfect as a gift.`,
    author: `@thomson159`,
    menulinks: menu,
    siteUrl: `https://243pen.store`,
    repository: `https://github.com/thomson159/pen`,
    commit: process.env.NOW_GITHUB_COMMIT_SHA || `main`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locales`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://243pen.store`,
      },
    },
    {
      resolve: "gatsby-plugin-replace-path",
      options: {
        pattern: /\d+-/g,
        replacement: "",
      },
    },
    `re-slug`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    `gatsby-background-image`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/layouts"),
        },
        remarkPlugins: [require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`)],
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "Premium Bullet Shell Pens – 243Pen.store",
              separator: "|",
              author: "@thomson159",
              // background: require.resolve('./static/images/twitter_card.png'), // path to 1200x630px file or hex code, defaults to black (#000000)
              // fontColor: "#ffffff",
              fontStyle: "sans-serif",
              titleFontSize: 124,
              fontFile: require.resolve("./static/fonts/GT-Haptik-Regular.ttf"),
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              showCaptions: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
