import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import JumbotronCard from '../components/jumbotron-card.component'
function Home({ data: { allImageSharp } }) {
  const fluid = allImageSharp.edges[0].node.fluid
  return (
    <div>
      <div style={{position: 'relative'}}>
        <Img fluid={fluid} />
        <JumbotronCard/>
      </div>
    </div>
  )
}

export default Home

export const HomeQuery = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
