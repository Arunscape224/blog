import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import JumbotronCard from "../components/jumbotron-card.component"
import About from "../components/about.component"
import Skills from "../components/skills.component"
import { useColorModeValue } from "@chakra-ui/color-mode"
import theme from "../theme"

function Home({ data: { allImageSharp } }) {
  // Using theme bg with alpha
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(104, 106, 106, 0.7)"
  )
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  const fluid = allImageSharp.edges[0].node.fluid
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Img fluid={fluid} />
        <JumbotronCard bg={bg} color={color} />
      </div>
      <About bg={bg} color={color} />
      <Skills bg={bg} color={color} />
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
