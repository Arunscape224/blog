import * as React from 'react'
import { graphql } from 'gatsby'

const PageTemplate = ({ data: { contentfulPost } }) => {
  const { hero, body } = contentfulPost
  return (
    <div>
      {/* <Img className="card-image-top" fluid={hero.fluid} /> */}
      {contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark.html && (
        <div
          dangerouslySetInnerHTML={{
            __html: contentfulPost.childContentfulPostBodyTextNode.childMarkdownRemark.html
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
          aspectRatio
          base64
          src
          sizes
          srcSetWebp
          srcSet
          srcWebp
          tracedSVG
        }
      }
    }
  }
`
