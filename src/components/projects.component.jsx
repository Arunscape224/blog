import React from "react"
import { Box, Text, Button } from "@chakra-ui/react"
import "../../global.css"
import { Link } from "gatsby"
import projects from "../projects"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Project = ({ title, description, repo, deploy }) => (
  <>
    <Text py={4} fontSize="3xl">
      {title}
    </Text>
    <Text fontSize="lg">{description}</Text>
    <Box py={4}>
      {repo && (
        <Link to={repo} target="_blank">
          {" "}
          <Button mr={8} p={4}>
            <Text mr={2}>Code</Text> <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Link>
      )}
      {deploy && (
        <Link to={deploy} target="_blank">
          <Button mr={8} p={4}>
            <Text>Deploy ✨</Text>
          </Button>
        </Link>
      )}
    </Box>
  </>
)

const Projects = ({ bg, color }) => (
  <Box id="projects" my={4} className="layout" bg={bg} color={color}>
    <Project
      title={projects["surface_group"].title}
      description={projects["surface_group"].description}
      repo={projects["surface_group"].repo}
      deploy={projects["surface_group"].deploy}
    />
    <Project
      title={projects["gopi_inspires"].title}
      description={projects["gopi_inspires"].description}
      deploy={projects["gopi_inspires"].deploy}
    />
    <Project
      title={projects["halfdog"].title}
      description={projects["halfdog"].description}
      deploy={projects["halfdog"].deploy}
    />
  </Box>
)
export default Projects
