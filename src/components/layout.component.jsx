import React, { useContext } from "react"
import Header from "./header.component"
import "../../global.css"
import Search from "./search.component"
import { SearchBarContext } from "../search-bar-context"

const Layout = ({ children }) => {
  // const [showSearch, setShowSearch] = useState(false)
  const { showSearch, setShowSearch } = useContext(SearchBarContext)
  return (
    <>
      <Header />
      {showSearch && <Search />}
      <main>{children}</main>
    </>
  )
}

export default Layout
