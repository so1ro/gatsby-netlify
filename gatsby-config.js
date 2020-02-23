module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Learning Gatsby`,
    author: `@gatsbyjs`,
    siteUrl: `https://condescending-murdock-b32b94.netlify.com/`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        // use: [rupture()],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Flourish - Mastery based learning`,
        short_name: `Code Flourish`,
        start_url: `/`,
        background_color: `#524763`,
        theme_color: `#524763`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-netlify",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify-cms",
  ],
}
