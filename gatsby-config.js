require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
