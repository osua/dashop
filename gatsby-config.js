var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `dashop`,
    description: `un comienzo para el ecommerce`,
    author: `@osu`,
  },
  plugins: [{
      "resolve": "gatsby-source-flotiq",
      "options": {
        "authToken": process.env.GATSBY_FLOTIQ_API_KEY,
        "forceReload": false,
        "includeTypes": ['product', '_media']
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dashop`,
        short_name: `comienzo`,
        start_url: `/`,
        background_color: `#4DB58E`,
        theme_color: `#4DB58E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
  ],
}
