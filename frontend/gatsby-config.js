const { faHtml5 } = require("@fortawesome/free-brands-svg-icons")
const { HTML5_FMT } = require("moment")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Ana Vela | Front-End Developer",
    titleTemplate: "%s · Unleash content",
    description: "Ana Vela | Front-End Developer",
    url: process.env.API_URL || "http://localhost:1337", // No trailing slash allowed!
    image: "/uploads/default-image.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@anaveecodes",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "user"],
        singleTypes: [`Homepage`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `frontend/src/assets/favicon.png`,
        icons: [
          {
            src: `favicons/icon-48X48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
  ],
}
