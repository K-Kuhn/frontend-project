import React from 'react'
import { Link } from 'react-router-dom';
import { SimpleGrid, VStack, Text, Image, Heading, Button, useBreakpointValue, Box, Spacer } from '@chakra-ui/react'
import Card from './Card';

const projects = [
  {
    title: "Greek Salad",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ",
    getImageSrc: () => require("../assets/greek salad.jpg"),
    price: "15.99$"
  },
  {
    title: "Bruchetta",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
    price: "15.99$"
  },
  {
    title: "Lemon Dessert",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
    price: "15.99$"
  }
];

const Home = () => {

  const padding = useBreakpointValue({
    base: "30px 0px 30px 0px",
    md: "30px 107px 30px 107px",
    lg: "30px 213px 30px 213px"
  });

  return (
    <>
      <SimpleGrid
        columns={2}
        mx={70}
        p={padding}
        spacing={20}
        backgroundColor="#495E57"
        minChildWidth="154px"
      >
        <VStack
          spacing={4}
          align={"left"}
          mx={70}>
          <Heading
            textColor={"#f4ce14"}
            fontSize={64}
            fontWeight={"bold"}
          >Little Lemon</Heading>
          <Heading
            textColor={"#000000"}
            fontSize={20}
            fontWeight={"bold"}>Chicago</Heading>

          <Text
            textColor={"#000000"}
            fontSize={18}
            fontWeight={"medium"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero </Text>
          <Spacer></Spacer>
          <Link to="/reservations">
            <Button backgroundColor='#f4c314'>Reserve a Table</Button>
          </Link>
          <Spacer></Spacer>
        </VStack>
        <Box
          align="center"
          p="20px">
          <Image
            fit="cover"
            height="300px"
            width="400px"
            borderRadius={"8px"}
            src={require("../assets/restaurantChefB.jpg")}
            alt="Restaurant Chef" />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={2}
        mx={70}
        p={padding}
        spacing={20}
        backgroundColor="white"
        minChildWidth="248px"
      >
        <Box
          align="left"
          mx={70}>
          <Heading
            textColor={"#000000"}
            fontSize={32}
            fontWeight={"regular"}
            align="left"
          >This weeks specials!</Heading>
        </Box>
        <Spacer></Spacer>
        <Box
          align="right"
          mx={70}>
          <Link to="/orderonline">
            <Button backgroundColor='#f4c314'>Order Online</Button>
          </Link>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={3}
        mx={70}
        p={padding}
        spacing={20}
        backgroundColor="white"
        minChildWidth="248px"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            price={project.price}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Home