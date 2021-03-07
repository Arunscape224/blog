import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import '../../global.css'

const PageTemplate = ({ data: { contentfulPost } }) => {
  const { title, hero } = contentfulPost
  React.useEffect(() => {
    
    try {
      const deckdeckgoLoader = require("@deckdeckgo/highlight-code/dist/loader")

      deckdeckgoLoader.defineCustomElements(window)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div className="layout">
      <Img fluid={hero.fluid} />
      <h1 className="text-center">{title}</h1>
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
    </div>
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
