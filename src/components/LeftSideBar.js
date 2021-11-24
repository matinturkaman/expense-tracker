import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box flex={2} display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
      <Box m="30">
        <Heading>Tracker</Heading>
      </Box>
      <Box ml="10">
        <Text
          p="5px"
          cursor="pointer"
          fontWeight="medium"
        >
          Home
        </Text>
        <Text
          p="5px"
          cursor="pointer"
          color="#969696"
          fontWeight="medium"
          mt="5"
        >
          Categories
        </Text>
        <Text
          p="5px"
          cursor="pointer"
          color="#969696"
          fontWeight="medium"
          mt="5"
        >
          TransActions
        </Text>
        <Text
          p="5px"
          cursor="pointer"
          color="#969696"
          fontWeight="medium"
          mt="5"
        >
          Calendar
        </Text>
        <Text
          p="5px"
          cursor="pointer"
          color="#969696"
          fontWeight="medium"
          mt="5"
        >
          Events
        </Text>
        <Text
          p="5px"
          cursor="pointer"
          color="#969696"
          fontWeight="medium"
          mt="5"
        >
          Setting
        </Text>
      </Box>
    </Box>
  );
};

export default NavBar;
