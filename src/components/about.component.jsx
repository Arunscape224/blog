import React from "react"
import { Box, Text } from "@chakra-ui/react"
import "../../global.css"

const About = ({ bg, color }) => (
  <Box id="about" my={4} className="layout" bg={bg} color={color}>
    <Text py={4} fontSize="3xl">
      Who Am I?
    </Text>
    <Text fontSize="lg">
      I'm a Front End Developer based in Chicago. I love building and designing websites,
      and creating intuitive, fun user experiences. I love picking up new
      hobbies and watching / learning from new tutorials! When I'm not working
      on projects or learning new tech, I'm recording something, skating or
      playing guitar.
    </Text>
  </Box>
)
export default About
