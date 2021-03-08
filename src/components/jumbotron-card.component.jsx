import React from "react"
import "../../global.css"
import { Link } from "gatsby"
import { Box, Heading, Text } from "@chakra-ui/react"
import {
  faGithubAlt,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Animated } from "react-animated-css"

const JumbotronCard = ({ bg, color }) => {
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
        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Box color={color}>
            <Link to="https://github.com/Arunscape224" target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/aravishankar2/"
              target="_blank"
            >
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </Link>
            <Link to="https://www.instagram.com/shank.ar/" target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </Link>
            <Link to="https://twitter.com/Arunrav182" target="_blank">
              <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            </Link>
          </Box>
        </Animated>
      </Box>
    </Box>
  )
}

export default JumbotronCard
