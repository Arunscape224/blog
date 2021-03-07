import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../../global.css"
import BlogCard from "../components/blog-card.component"
import { Link } from "gatsby"
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
    <div className="layout">
      {posts.map(({ node }, i) => (
        <Link to={node.slug}>
          <BlogCard post={node} key={i} />
        </Link>
      ))}
    </div>
  )
}

export default Blog
