import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import SearchHit from './search-hit.component'
const searchClient = algoliasearch(
  "39E60S9S9S",
  "cf08a47cae82ac3e5b5b2142c0d58b5f"
)

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_BLOG">
      <SearchBox />
      <Hits hitComponent={SearchHit} />
    </InstantSearch>
  )
}

export default Search
