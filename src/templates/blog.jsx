import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../../global.css"
import theme from "../theme"
import { Box } from "@chakra-ui/react"

import { useColorModeValue } from "@chakra-ui/color-mode"
const PageTemplate = ({ data: { contentfulPost } }) => {
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)

  const { title, hero, createdAt } = contentfulPost
  React.useEffect(() => {
    try {
      const deckdeckgoLoader = require("@deckdeckgo/highlight-code/dist/loader")

      deckdeckgoLoader.defineCustomElements(window)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <Box color={color} className="layout">
      <Img fluid={hero.fluid} />
      <div className="p-block">
        <h1 className="header">{title}</h1>
        <em>by Arun Ravishankar</em>
        <div>{createdAt}</div>
      </div>
      {contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark
        .html && (
        <div
          dangerouslySetInnerHTML={{
            __html:
              contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark
                .html,
          }}
        />
      )}
    </Box>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      childContentfulPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "MMMM Do YYYY")
      id
      title
      tags
      slug
      body {
        body
      }
      hero {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
