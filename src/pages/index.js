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
import { Box, Heading, Button, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
function Home({ data }) {
  // Using theme bg with alpha
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(104, 106, 106, 0.7)"
  )
  const bgGradient = useColorModeValue(
    "linear-gradient(90deg, rgba(91,84,103,1) 0%, rgba(255,255,255,1) 100%)",
    "linear-gradient(90deg, rgba(91,84,103,1) 0%, rgba(255,255,255,1) 100%)"
  )

  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  const fluid = data.file.childImageSharp.fluid
  const posts = data.allContentfulPost.edges
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keyword" content="" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={siteMetadata.url} />
      </Helmet>
      <Box className="p-relative" bg={bgGradient}>
        <Img fluid={fluid} />
        <JumbotronCard bg={bg} color={color} />
      </Box>
      <div className="home-content">
        <Box className="home-content-left">
          <About bg={bg} color={color} />
          <Skills bg={bg} color={color} />
          <Projects bg={bg} color={color} />
        </Box>
        <Box py={4} className="home-content-right recent-posts" color={color}>
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

          <Flex justifyContent="center" py={8}>
            <Link to="/blog">
              <Button border="1px" bg="bg">
                View Blog
              </Button>
            </Link>{" "}
          </Flex>
        </Box>
      </div>
      <ContactForm bg={bg} color={color} />
    </>
  )
}

export default Home

export const HomeQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
        image
        url
      }
    }
    allContentfulPost(limit: 4) {
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
    file(extension: { eq: "png" }, name: { eq: "star-banner" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
