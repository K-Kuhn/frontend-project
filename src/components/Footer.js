import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Image, Box, UnorderedList, ListItem, Link, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'

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

const contacts = ["Peter P", "Street1", "Town X", "Phone: 123456789", "Email: hello@example.com"];

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
        name: "Mail"
    },
    {
        icon: faGithub,
        url: "https://github.com",
        name: "GitHub"
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
        name: "LinkedIn"
    }
];



const Footer = () => {

    const padding = useBreakpointValue({
        base: "30px 0px 30px 0px",
        md: "30px 107px 30px 107px",
        lg: "30px 213px 30px 213px"
    });

    return (

        <SimpleGrid
            columns={4}
            mx={70}
            p={padding}
            spacing={20}
            backgroundColor="#FBDABB"
            minChildWidth="154px"
            justifyContent={"center"}
            columnWidth="154px"
        >
            <Box
                align="left"
                p="20px">
                <Image
                    fit="cover"
                    height="300px"
                    width="150px"
                    borderRadius={"8px"}
                    src={require("../assets/restaurantChefB.jpg")}
                    alt="Restaurant Chef" />
            </Box>
            <Box
                align="left"
                p="20px">
                <UnorderedList listStyleType="none" margin="0" padding="0">
                    <ListItem marginBottom="10px" fontWeight="bold">Doormat Navigation</ListItem>
                    {pages.map((page, index) => (
                        <ListItem>
                            <Link to={page.target}>
                                {page.name}
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
            <Box align="left"
                p="20px">
                <UnorderedList listStyleType="none" margin="0" padding="0">
                    <ListItem marginBottom="10px" fontWeight="bold">Contact</ListItem>
                    {contacts.map((contact, index) => (
                        <ListItem>
                            <Text>{contact}</Text>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
            <Box align="left"
                p="20px">
                <UnorderedList listStyleType="none" margin="0" padding="0">
                    <ListItem marginBottom="10px" fontWeight="bold">Social Media Links</ListItem>
                    {socials.map((social, index) => (
                        <ListItem>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={social.icon} size="2px" />
                            </a>
                            <span style={{ marginLeft: "10px" }}>{social.name}</span>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </SimpleGrid>
    )
}

export default Footer