import React from "react"
import { Box, Text, Badge } from "@chakra-ui/react"
import "../../global.css"

const proficient = [
  "Javascript",
  "React + Hooks",
  "Gatsby",
  "Next.js",
  "Redux",
  "Context API",
  "GraphQL",
  "Apollo",
  "REST API",
  "PostgreSQL",
  "SQL Queries",
  "Node.js",
  "Contentful",
  "Netlify + Netlify CLI",
  "Bootstrap & Chakra UI",
  "Shopify + Liquid",
  "Shopify Store Front API",
  "UI/UX Design (Sketch)",
]
const learning = ["PHP + Laravel", "Ruby + Rails", "Supercollider", "Testing / TDD"]
const Skills = ({ bg, color }) => (
  <Box className="layout" bg={bg} color={color}>
    <Text py={4} fontSize="3xl">
      Proficient In:
    </Text>
    <div>
      {proficient.map((skill, i) => (
        <Badge mr={4} colorScheme="green" key={i}>
          {skill}
        </Badge>
      ))}
    </div>
    <Text py={4} fontSize="3xl">
      Learning / Playing With:
    </Text>
    <div>
      {learning.map((skill, i) => (
        <Badge mr={4} colorScheme="purple" key={i}>
          {skill}
        </Badge>
      ))}
    </div>
  </Box>
)
export default Skills
