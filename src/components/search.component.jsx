import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import SearchHit from "./search-hit.component"
import { Flex, Box } from "@chakra-ui/react"
const searchClient = algoliasearch(
  "39E60S9S9S",
  "cf08a47cae82ac3e5b5b2142c0d58b5f"
)

const Search = () => {
  return (
    <Box m={5} borderBottom="1px">
      <InstantSearch searchClient={searchClient} indexName="dev_BLOG">
      <SearchBox />
      <Hits hitComponent={SearchHit} />
      <Flex justifyContent="flex-end" mr={2}>
        {" "}
        <img
          className="algolia-branding"
          src="https://res.cloudinary.com/surface-group/image/upload/v1613271155/search-by-algolia-light-background_jamw6m.svg"
          alt="algolia branding"
        />
      </Flex>
    </InstantSearch>
    </Box>
  )
}

export default Search
