import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../../global.css"
import theme from "../theme"
import { Box, Badge } from "@chakra-ui/react"
import { DiscussionEmbed } from "disqus-react"
import { grabText } from "../util/helper"
import Helmet from "react-helmet"

import { useColorModeValue } from "@chakra-ui/color-mode"
const PageTemplate = ({ data: { contentfulPost } }) => {
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  const { title, hero, createdAt, id, slug, tags } = contentfulPost
  const [excerpt, setExcerpt] = React.useState("")

  const baseUrl = "https://www.arunravishankar.com/"
  const disqusConfig = {
    identifier: id,
    title: title,
    url: baseUrl + slug,
  }

  React.useEffect(() => {
    setExcerpt(
      grabText(
        contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt
      )
    )
    try {
      const deckdeckgoLoader = require("@deckdeckgo/highlight-code/dist/loader")
      deckdeckgoLoader.defineCustomElements(window)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="keyword" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={`https:${hero.fluid.src}`} />
        <meta property="og:url" content={`${baseUrl}/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${baseUrl}/blog/${slug}`} />
      </Helmet>
      <Box color={color} className="layout">
        <Img fluid={hero.fluid} className="blog-img" />
        <div className="p-block">
          <h1 className="header" onClick={() => console.log(excerpt)}>{title}</h1>
          <em>by Arun Ravishankar</em>
          <div>{createdAt}</div>
        </div>
        {contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark
          .html && (
          <div
            dangerouslySetInnerHTML={{
              __html:
                contentfulPost.childContentfulPostBodyTextNode
                  .childMarkdownRemark.html,
            }}
          />
        )}

        <DiscussionEmbed
          shortname="https-www-arunravishankar-com"
          config={disqusConfig}
        />
        <Box my={4} w="100%">
          {tags.map((tag, i) => (
            <Badge mr={4} colorScheme="purple" key={i}>
              #{tag}
            </Badge>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      childContentfulPostBodyTextNode {
        childMarkdownRemark {
          html
          excerpt(format: HTML, pruneLength: 0)
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
