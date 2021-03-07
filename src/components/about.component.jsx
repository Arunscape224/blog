import React from "react"
import { Box, Text } from "@chakra-ui/react"
import "../../global.css"

const About = ({ bg, color }) => (
  <Box id="about" my={4} className="layout" bg={bg} color={color}>
    <Text py={4} fontSize="3xl">
      Who Am I?
    </Text>
    <Text fontSize="lg">
      I am a Chicago based Web developer who specializes in creating responsive,
      dynamic web applications with Javascript. I am currently building an
      ecommerce website for a company called Surface Group International using
      MongoDB, Express, React, Redux, and Node.js. I am constantly learning, and
      am always willing to take on new challenges. My goal is to grow with a
      fast paced team that practices Agile methodology and exercises best
      practices.
    </Text>
  </Box>
)
export default About
