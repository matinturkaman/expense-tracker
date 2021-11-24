import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

const TransActionComp = ({ transAction }) => {
  return (
    <Box
      pl="10"
      pr="16"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {transAction.map((t) => {
        return (
          <Flex
            w={{
              base: "full",
              sm: "250px",
              md: "full",
              lg: "full",
              xl: "full",
            }}
            h="60px"
            bg="white"
            alignItems="center"
            boxShadow="lg"
            justifyContent="space-between"
            p="5"
            borderRadius="8px"
            mb="8"
            ml="4"
          >
            <Flex alignItems="center">
              <Avatar
                name={t.desc}
                borderRadius="8"
                w="10"
                h="10"
                background={t.type === "expense" ? "red.400" : "green.400"}
                color="white"
              />
              <Flex ml="15" flexDirection="column">
                <Text
                  color={t.type === "expense" ? "red.500" : "green.500"}
                  fontWeight="medium"
                >
                  {t.desc}
                </Text>
                <Text color="gray.500">{new Date().getFullYear()}</Text>
              </Flex>
            </Flex>
            <Text
              color={t.type === "expense" ? "red.500" : "green.500"}
              fontWeight="medium"
            >
              ${t.amount}
            </Text>
          </Flex>
        );
      })}
      {transAction.length <= 0 ? (
        <Box width={{ base: "300px", md: "600px", lg: "600px", xl: "600px" }}>
          <Image
            width="full"
            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg"
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default TransActionComp;
