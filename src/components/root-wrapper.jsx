import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Layout from "./layout.component"
import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
import theme from "../theme"

let customTheme = {
  styles: {
    global: props => ({
      body: {
        bg: mode(theme.lightMode.bg, theme.darkMode.bg)(props),
        color: mode(theme.lightMode.color, theme.lightMode.color)(props),
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
