import React from 'react'
import { HStack, Image, SimpleGrid, useBreakpointValue, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const pages = [
  {
    name: "Home",
    target: "/",
  },
  {
    name: "About",
    target: "/about"
  },
  {
    name: "Menu",
    target: "/menu"
  },
  {
    name: "Reservations",
    target: "/reservations"
  },
  {
    name: "Order Online",
    target: "/orderonline"
  },
  {
    name: "Login",
    target: "/login"
  }
];

const Nav = () => {
  const padding = useBreakpointValue({
    base: "30px 0px 30px 0px",
    md: "30px 107px 30px 107px",
    lg: "30px 213px 30px 213px"
  });

  return (
    <SimpleGrid
      columns={2}
      mx={70}
      backgroundColor="white"
      minChildWidth="200px"
      align="center"
      p={padding}
    >
      <Box
      align="left"
      p="20px">
        <Image
          fit="cover"
          height="52px"
          width="194px"
          src={require("../assets/Logo.jpg")}
          alt="Little Lemon Logo" />
      </Box>
      <HStack
        px={16}
        py={4}
        justifyContent="right"
        alignItems="center"
        spacing={10}>
        {pages.map((page, index) => (
          <Link
            to={page.target}
            style={{
              fontWeight: 'bold',
              ...(index === pages.length - 1 && {
                backgroundColor: '#f4c314',
                borderRadius: '8px',
                padding: '8px', // Adding padding to make the box visible
              }),
            }}
            >
            {page.name}
          </Link>
        ))}
      </HStack>
    </SimpleGrid>
  )
}

export default Nav