import React from 'react'
import { SimpleGrid, VStack, Text, Image, Heading } from '@chakra-ui/react'

const OrderOnline = () => {
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
      alignItems="flex-start"
      >
        <Image src={require("../assets/Mario and Adrian b.jpg")} />
        <Heading as="h3" size="md" textAlign="left">
          This is the Order Online Page
        </Heading >
        <Text>
          Work in Progress!
        </Text>
    </VStack>
    </SimpleGrid>
  )
}

export default OrderOnline