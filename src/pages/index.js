import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import JumbotronCard from "../components/jumbotron-card.component"
import About from "../components/about.component"
import Skills from "../components/skills.component"
import Projects from "../components/projects.component"
import { useColorModeValue } from "@chakra-ui/color-mode"
import theme from "../theme"

function Home({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  // Using theme bg with alpha
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(104, 106, 106, 0.7)"
  )
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Img fluid={fluid} />
        <JumbotronCard bg={bg} color={color} />
      </div>
      <About bg={bg} color={color} />
      <Skills bg={bg} color={color} />
      <Projects bg={bg} color={color} />
    </div>
  )
}

export default Home

export const HomeQuery = graphql`
  {
    file(extension: { eq: "jpg" }, name: { eq: "star-banner" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
