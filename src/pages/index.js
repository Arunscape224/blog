import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import JumbotronCard from "../components/jumbotron-card.component"
import About from "../components/about.component"
import Skills from "../components/skills.component"
import Projects from "../components/projects.component"
import ContactForm from "../components/contact.component"
import { useColorModeValue } from "@chakra-ui/color-mode"
import theme from "../theme"
import "../../global.css"
import BlogCard from "../components/blog-card.component"
import { Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"
function Home({ data }) {
  // Using theme bg with alpha
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(104, 106, 106, 0.7)"
  )
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  const fluid = data.file.childImageSharp.fluid
  const posts = data.allContentfulPost.edges
  return (
    <>
      <div className="p-relative" onClick={() => console.log(posts)}>
        <Img fluid={fluid} />
        <JumbotronCard bg={bg} color={color} />
      </div>
      <div className="home-content">
        <Box className="home-content-left">
          <About bg={bg} color={color} />
          <Skills bg={bg} color={color} />
          <Projects bg={bg} color={color} />
        </Box>
        <Box
          className="layout"
          py={4}
          className="home-content-right layout"
          color={color}
        >
          <Heading py={5} fontSize="2xl" textAlign="center">
            Recent Posts
          </Heading>

          <Box my={4}>
            {posts.map(({ node }, i) => (
              <Link to={`blog/${node.slug}`}>
                <BlogCard post={node} key={i} />
              </Link>
            ))}
          </Box>
        </Box>
      </div>
      <ContactForm bg={bg} color={color} />
    </>
  )
}

export default Home

export const HomeQuery = graphql`
  {
    allContentfulPost {
      edges {
        node {
          createdAt(formatString: "MMMM Do YYYY")
          childContentfulPostBodyTextNode {
            childMarkdownRemark {
              html
              excerpt(format: HTML, pruneLength: 0)
            }
          }
          id
          title
          tags
          slug
          hero {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    file(extension: { eq: "jpg" }, name: { eq: "star-banner" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
