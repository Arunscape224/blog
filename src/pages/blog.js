import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../../global.css"
import BlogCard from "../components/blog-card.component"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
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
    }
  `)

  let posts = data.allContentfulPost.edges

  return (
    <Box className="layout grid-container">
      {posts.map(({ node }, i) => (
        <Link to={node.slug}>
          <BlogCard post={node} key={i} />
        </Link>
      ))}
    </Box>
  )
}

export default Blog
