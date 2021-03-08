import React from "react"
import { Box, Text } from "@chakra-ui/react"
import "../../global.css"

const About = ({ bg, color }) => (
  <Box id="about" my={4} className="layout" bg={bg} color={color}>
    <Text py={4} fontSize="3xl">
      Who Am I?
    </Text>
    <Text fontSize="lg">
      Hi! I'm a dev based in Chicago. I love buiding and designing things, and creating intuitive, fun user experiences. When I'm not working on projects or learning new tech, I'm recording something, skating or playing guitar.  
    </Text>
  </Box>
)
export default About
