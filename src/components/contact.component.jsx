import React from "react"
import {
  Box,
  Heading,
  Text,
  FormControl,
  Textarea,
  Button,
  Input,
} from "@chakra-ui/react"
import "../../global.css"
const ContactForm = ({ bg, color }) => {
  return (
    <Box
      id="contact"
      boxShadow="lg"
      textAlign="center"
      className="layout"
      py={4}
      bg={bg}
      color={color}
    >
      <Heading as="h2" size="2xl">
        Shoot Me A Message!
      </Heading>
      <Heading as="h3" size="1xl" py={4}>
        Like What You See?
      </Heading>
      <Box w="50%" m="auto" my={1}>
        <Text>
          Hire me for your next project! Send me an email through this form, or
          at{" "}
          <strong>
            <a href="#">audionekt@gmail.com</a>
          </strong>
          . I will get back to you in 2-3 business days.{" "}
        </Text>
      </Box>
      <FormControl textAlign="center" w="50%" m="auto" id="email" my={4}>
        <Box my={4}>
          <Input focusBorderColor="#E9D8FD" placeholder="Email" type="email" />
        </Box>
        <Box my={4}>
          <Input focusBorderColor="#E9D8FD" placeholder="Subject" type="text" />
        </Box>
        <Box my={4}>
          <Textarea
            focusBorderColor="#E9D8FD"
            placeholder="Type message here.."
          />
        </Box>
        <Box my={4}>
          <Button border="1px" bg="bg" borderColor="#e9d8fd">
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  )
}

export default ContactForm
