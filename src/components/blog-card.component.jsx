import React from "react"
import theme from "../theme"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Text, Heading } from "@chakra-ui/react"
import Img from "gatsby-image"
import { grabText } from "../util/helper"
const BlogCard = ({
  post: { title, hero, createdAt, childContentfulPostBodyTextNode },
}) => {
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)

  return (
    <Box my={4} shadow="lg" border="1px" borderColor={color} color={color}>
      <Img fluid={hero.fluid} />
      <Box p={4}>
        <Heading fontSize="2xl" isTruncated>
          {title}
        </Heading>
        <Text as="i" fontSize="1xl">
          by Arun Ravishankar
        </Text>
        <Text fontSize="sm">{createdAt}</Text>
        <Text py={3} fontSize="1xl" isTruncated>
          {grabText(
            childContentfulPostBodyTextNode.childMarkdownRemark.excerpt
          )}
        </Text>
      </Box>
    </Box>
  )
}

export default BlogCard
