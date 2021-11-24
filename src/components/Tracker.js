import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { BiPlus } from "react-icons/bi";
import Chart from "./Chart";

const Tracker = ({ onOpen, income, expense }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="flex-end"
    >
      <Box
        w={{ base: "230px", sm: "200px", lg: "280px" }}
        h="65px"
        display="flex"
        alignItems="center"
        border="1px solid #ebebeb"
        borderRadius="8"
        mt="30"
      >
        <Flex m="3" flexDirection="column">
          <Text fontSize="15">Income</Text>
          <Text fontSize="16" fontWeight="medium">
            ${income}
          </Text>
        </Flex>
      </Box>
      <Box
        w={{ base: "230px", sm: "200px", lg: "280px" }}
        h="65px"
        display="flex"
        alignItems="center"
        border="1px solid #ebebeb"
        borderRadius="8"
        mt="30"
      >
        <Flex m="3" flexDirection="column">
          <Text fontSize="15">Expense</Text>
          <Text fontSize="16" fontWeight="medium">
            ${expense}
          </Text>
        </Flex>
      </Box>
      <Box
        w={{ base: "230px", sm: "200px", lg: "280px" }}
        h="180px"
        display="flex"
        alignItems="center"
        border="1px solid #ebebeb"
        borderRadius="8"
        mt="30"
      >
        <Chart expense={expense} income={income} />
      </Box>
      <Button
        w={{ base: "230px", sm: "200px", lg: "280px" }}
        mt="30px"
        leftIcon={<BiPlus />}
        bg="green.500"
        color="white"
        as="a"
        cursor="pointer"
        onClick={onOpen}
        _hover={{ bg: "green.600" }}
        _active={{ bg: "green.700" }}
      >
        Add TransAction
      </Button>
    </Box>
  );
};

export default Tracker;
