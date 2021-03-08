import React from "react"
import { Box, Text, Badge } from "@chakra-ui/react"
import "../../global.css"

const proficient = [
  "Javascript",
  "React + Hooks",
  "Gatsby",
  "Next.js",
  "SCSS",
  "Redux",
  "Context API",
  "GraphQL",
  "Apollo",
  "REST API",
  "Postgres",
  "SQL",
  "Node.js",
  "Contentful",
  "Netlify + Netlify CLI",
  "Bootstrap & Chakra UI",
  "Shopify + Liquid",
  "Shopify Store Front API",
  "UI/UX Design (Sketch)",
]
const learning = [
  "Testing / TDD",
  "PHP + Laravel",
  "Ruby + Rails",
  "Supercollider",
]
const Skills = ({ bg, color }) => (
  <Box id="skills" my={4} className="layout" bg={bg} color={color} pb={4}>
    <Text py={4} fontSize="3xl">
      Proficient In:
    </Text>
    <>
      {proficient.map((skill, i) => (
        <Badge mr={4} colorScheme="green" key={i}>
          {skill}
        </Badge>
      ))}
    </>
    <Text py={4} fontSize="3xl">
      Actively Learning:
    </Text>
    <>
      {learning.map((skill, i) => (
        <Badge mr={4} colorScheme="purple" key={i}>
          {skill}
        </Badge>
      ))}
    </>
  </Box>
)
export default Skills
