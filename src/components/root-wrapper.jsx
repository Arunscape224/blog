import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Layout from "./layout.component"
import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"

let customTheme = {
  styles: {
    global: props => ({
      body: {
        bg: mode("#ffffff", "#686A6A")(props),
        color: mode("#686A6A", "#ffffff")(props),
      },
    }),
  },
}

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={extendTheme(customTheme)}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
