import React, { useState, createContext } from "react"
export const SearchBarContext = createContext()

const SearchbarContextProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <SearchBarContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchBarContext.Provider>
  )
}

export default SearchbarContextProvider
