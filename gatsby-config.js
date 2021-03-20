require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Code & Thoughts",
    description:
      "A blog where I can share programming concepts and my experiences.",
    url: "https://www.arunravishankar.com/",
    twitterUsername: "@Arunrav182",
    author: "Arun Ravishankar",
    image: "https://pbs.twimg.com/profile_images/1366599365457043464/5rhUzg5h_400x400.jpg"
  },
  proxy: {
    prefix: "/",
    url: "http://localhost:8888/",
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
  ],
}
