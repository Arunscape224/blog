import React, { useState } from "react"
import Header from "./header.component"
import "../../global.css"
import Search from "./search.component"
const Layout = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <>
      <Header showSearch={showSearch} setShowSearch={setShowSearch} />
      {showSearch && <Search showSearch={showSearch} />}
      <main>{children}</main>
    </>
  )
}

export default Layout
