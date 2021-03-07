import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import "../../global.css"
import { useColorModeValue } from "@chakra-ui/color-mode"
import theme from "../theme"
import {
  faGithubAlt,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const JumbotronCard = () => {
  // Using theme bg with alpha
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(104, 106, 106, 0.7)"
  )
  const color = useColorModeValue(theme.lightMode.color, theme.darkMode.color)
  return (
    <Box className="jumbotron-card-overlay" shadow="lg" pos="absolute">
      <Box
        className="jumbotron-card col-center"
        shadow="lg"
        bg={bg}
        color={color}
      >
        <Heading as="h1" size="2xl">
          Arun Ravishankar
        </Heading>
        <Text as="i" fontSize="2xl">
          Front End Developer
        </Text>
        {/* Social Media */}
        <Box color={color}>
          <Link to="https://github.com/Arunscape224" target="_blank">
            <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
          </Link>
          <Link to="https://www.linkedin.com/in/aravishankar2/" target="_blank">
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          </Link>
          <Link to="https://www.instagram.com/shank.ar/" target="_blank">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </Link>
          <Link to="https://twitter.com/Arunrav182" target="_blank">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default JumbotronCard
