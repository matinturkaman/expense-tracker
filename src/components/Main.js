import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import TransActionComp from "./transActionComp";

const Main = ({ transAction }) => {
  return (
    <>
      <Box
        w={{ base: "300px", sm: "250px", lg: "300px" }}
        height="100vh"
        flex={7}
      >
        <Flex m="30" flexDirection="row" alignItems="flex-end">
          <InputGroup>
            <InputLeftElement children={<RiSearch2Line />} />
            <Input
              w="400px"
              variant="flushed"
              bg="white"
              focusBorderColor="green.300"
              placeholder="Search"
            />
          </InputGroup>
          <Text display={{ base: "none", sm: "none", lg: "none", xl: "block" }} color="#969696" mr="20px">
            Calendar
          </Text>
          <Text display={{ base: "none", sm: "none", lg: "none", xl: "block" }} color="#969696" mr="20">
            notifications
          </Text>
        </Flex>
        <Flex m="30">
          <Text fontWeight="medium" fontSize="20px">
            TransActions
          </Text>
        </Flex>
        <TransActionComp transAction={transAction} />
      </Box>
    </>
  );
};

export default Main;
