import React, { useContext } from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { useColorModeValue } from "@chakra-ui/react"
import theme from "../theme"
import "../../global.css"
import { SearchBarContext } from "../search-bar-context"

const SearchHit = ({ hit }) => {
  const { setShowSearch } = useContext(SearchBarContext)

  return (
    <Box
      mr={10}
      ml={10}
      my={4}
      color={useColorModeValue(theme.lightMode.color, theme.darkMode.color)}
    >
      <Link
        to={`/blog/${hit.fields.slug["en-US"]}`}
        onClick={() => setShowSearch(false)}
      >
        <Text p={3} fontSize="lg" className="hit">
          {hit.fields.title["en-US"]}
        </Text>
      </Link>
    </Box>
  )
}

export default SearchHit
