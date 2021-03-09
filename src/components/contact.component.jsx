import React, { useState } from "react"
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
import { navigate } from "gatsby"
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
            <a href="audionekt@gmail.com">audionekt@gmail.com</a>
          </strong>
          . I will get back to you in 2-3 business days.{" "}
        </Text>
      </Box>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <FormControl textAlign="center" w="50%" m="auto" id="email" my={4}>
          <Box my={4}>
            <Input
              required
              focusBorderColor="#E9D8FD"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
          </Box>
          <Box my={4}>
            <Input
              required
              focusBorderColor="#E9D8FD"
              placeholder="Subject"
              type="text"
              name="subject"
              id="subject"
            />
          </Box>
          <Box my={4}>
            <Textarea
              required
              focusBorderColor="#E9D8FD"
              placeholder="Type message here.."
              name="text"
              id="text"
              name="text"
            />
          </Box>
          <Box my={4}>
            <Button type="submit" border="1px" bg="bg" borderColor="#e9d8fd">
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  )
}

export default ContactForm
