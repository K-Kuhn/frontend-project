import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  SimpleGrid,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';

const Reservations = () => {
  const { isLoading, response, submit } = useSubmit();
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      diners: "",
      seating: "",
      occasion: "",
      comment: "",
      name: "",
      email: "",
      phone: ""
    },
    onSubmit: async (values) => {
      try {
        await submit("/api/submitForm", values)
      } catch (error) {
        console.log("Error submitting form:", error)
      }
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      diners: Yup.string().required("Number of Diners is required"),
      seating: Yup.string().required("Seating option is required"),
      Occasion: Yup.string().required("Occasion is required"),
      comment: Yup.string().required("Comment is required").min(25, "Must be at least 25 characters"),
      name: Yup.string().required("First Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formik.handleSubmit(e);
  };

  const padding = useBreakpointValue({
    base: "30px 0px 30px 0px",
    md: "30px 107px 30px 107px",
    lg: "30px 213px 30px 213px"
  });

  return (

    <SimpleGrid
      columns={2}
      mx={70}
      p={padding}
      spacing={20}
      backgroundColor="white"
      minChildWidth="154px"
      justifyContent={"center"}
    >
      <VStack
        justifyContent={"center"}
        backgroundColor="#edefee"
        p={padding}
        borderRadius="8">
        <Heading as="h2"
        fontWeith="bold"
        fontSize={"40"}>
          Reservation
        </Heading>
        <form onSubmit={handleSubmit}>
          <Heading as="h3"
          fontSize={"24"}
          textAlign={"center"}>
            General Information
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <VStack spacing={4}>

              <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Box>
                  <DatePicker
                    id="date"
                    name="date"
                    showIcon
                    selected={formik.values.date}
                    onBlur={formik.handleBlur}
                    onChange={(date) => formik.setFieldValue('date', date)}
                  />
                </Box>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Box
                  border='1px solid'
                  borderColor='gray.200'
                  background='gray.50'
                  borderRadius='full'>
                  <TimePicker
                    id="time"
                    name="time"
                    value={formik.values.time}
                    onChange={(time) => formik.setFieldValue('time', time)}
                    format="HH:mm"
                  />
                </Box>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  border='1px solid'
                  backgroundColor="white"
                  id="occasion"
                  name="occasion"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  border='1px solid'
                  backgroundColor="white"
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

            </VStack>
          </Box>
          <Heading as="h3"
          fontSize={"24"}
          textAlign={"center"} id="contactme-section">
            Contact Data
          </Heading>
          <Box p={6} rounded="md" w="100%">

            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">Name*</FormLabel>
              <Input
              border='1px solid'
              backgroundColor="white"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <Input
              border='1px solid'
              backgroundColor="white"
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
              <FormLabel htmlFor="phone">Phone Number*</FormLabel>
              <Input
              border='1px solid'
              backgroundColor="white"
                id="phone"
                name="phone"
                type="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
          </Box>
          <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
            Submit
          </Button>
        </form>
      </VStack>
      <Box>
                <Image
                    fit="cover"
                    height="1000px"
                    width="600px"
                    borderRadius={"8px"}
                    src={require("../assets/Mario and Adrian A.jpg")}
                    alt="Restaurant Chef" />
            </Box>
    </SimpleGrid>

  )
}

export default Reservations