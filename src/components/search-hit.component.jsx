import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { useColorModeValue } from "@chakra-ui/react"
import theme from "../theme"

const SearchHit = ({ hit }) => (
  <Box color={useColorModeValue(theme.lightMode.color, theme.darkMode.color)}>
    <Link to={`/blog/${hit.fields.slug["en-US"]}`}>
      <Text p={3} fontSize="lg">
        {hit.fields.title["en-US"]}
      </Text>
    </Link>
  </Box>
)

export default SearchHit
