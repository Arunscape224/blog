import React from "react"
import { Box } from "@chakra-ui/react"
import "../../global.css"
const JumbotronCard = () => (
  <Box className="jumbotron-card-overlay" shadow="lg" pos="absolute">
    <Box className="jumbotron-card" shadow="lg">
      Hello There!
    </Box>
  </Box>
)

export default JumbotronCard
