import React from 'react'
import { Link } from 'react-router-dom';
import { SimpleGrid, VStack, Text, Image, Heading, Button } from '@chakra-ui/react'

const Home = () => {
  return (
    <SimpleGrid
    mx={70}
    p="30px 0px 30px 0px"
    spacing={20}
    backgroundColor="#495E57"
    justifyContent={"center"}
    >
    <VStack
      p="4"
      maxW="md"
      borderWidth="4px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      color="black"
      textAlign="left"
      alignItems="center"
      >
        <Image src={require("../assets/Mario and Adrian b.jpg")} />
        <Heading as="h3" size="md" textAlign="left">
          This is the Homepage
        </Heading >
        <Text>
          Here you can reserve a Table
        </Text>
        <Link to="/reservations">
          <Button backgroundColor='#f4c314'>Reserve a Table</Button>
        </Link>
    </VStack>
    </SimpleGrid>
  )
}

export default Home