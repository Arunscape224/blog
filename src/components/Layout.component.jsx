import React from "react"
import Header from "./header.component"
import "../../global.css"



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
