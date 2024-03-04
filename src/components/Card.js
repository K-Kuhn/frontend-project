import { Heading, HStack, Image, Text, VStack, Box, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, price }) => {
  return (
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
      <Image
        fit="cover"
        width="100%"
        height="100%"
        borderRadius={"8px"}
        src={imageSrc}
        alt="Restaurant Chef" />
      <HStack>
        <Heading as="h3" size="md" textAlign="left">
          {title}
        </Heading >
        <Spacer></Spacer>
        <Text
          textColor={"#ee9972"}
          fontSize={16}
          fontWeight={"medium"}
        >{price}</Text>
      </HStack>
      <Text
        textColor={"#000000"}
        fontSize={16}
        fontWeight={"medium"}>{description}</Text>
      <Spacer></Spacer>
      <HStack justifyContent="flex-end">
        <Text
          textColor={"#000000"}
          fontSize={16}
          fontWeight={"bold"}>Order Online</Text>
        <FontAwesomeIcon icon={faCoffee} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
