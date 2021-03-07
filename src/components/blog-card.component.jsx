import React from "react"
import theme from "../theme"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Text, Heading } from "@chakra-ui/react"
import Img from "gatsby-image"

const BlogCard = ({ post: { title, hero, createdAt, childContentfulPostBodyTextNode } }) => {
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  return (
    <Box my={4} shadow="lg" border="1px" borderColor={color} color={color}>
      <Img fluid={hero.fluid} />
      <Box p={4}>
        <Heading fontSize="2xl">{title}</Heading>
        <Text as="i" fontSize="1xl">
          by Arun Ravishankar
        </Text>
        <Text fontSize="1xl">{createdAt}</Text>
        <Text fontSize="1xl">{childContentfulPostBodyTextNode.childMarkdownRemark.excerpt}</Text>
      </Box>
    </Box>
  )
}

export default BlogCard
