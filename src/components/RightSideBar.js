import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { FiEdit2 } from "react-icons/fi";
import { RiSettings3Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import TransActionForm from "./TransActionForm";
import Tracker from "./Tracker";
import { useDisclosure } from "@chakra-ui/hooks";

const RightSideBar = ({ addTransAction, expense, income }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      mr="20px"
      flex={2}
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      <Link href="https://github.com/matinturkaman" isExternal>
        <Flex
          w={{ base: "180px", sm: "180px", lg: "280px" }}
          h="220px"
          bg="gray.50"
          mt="50"
          borderRadius="8"
          display={{ base: "none", sm: "flex", lg: "flex", xl: "flex" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Avatar
            name="matin turkaman"
            src="https://avatars.githubusercontent.com/u/79017406?v=4"
          />
          <Text mt="5px" fontWeight="medium">
            matin turkaman
          </Text>
          <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="row"
            mt="15"
          >
            <Text color="#969696">Profile</Text>
            <FiEdit2 color="#969696" />
          </Box>
          <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="row"
            mt="5px"
          >
            <Text color="#969696">Setting</Text>
            <RiSettings3Line color="#969696" />
          </Box>
          <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="row"
            mt="5px"
          >
            <Text color="#969696">Wallet</Text>
            <IoWalletOutline color="#969696" />
          </Box>
        </Flex>
      </Link>
      <Tracker onOpen={onOpen} expense={expense} income={income} />
      <TransActionForm
        isOpen={isOpen}
        onClose={onClose}
        addTransAction={addTransAction}
      />
    </Box>
  );
};

export default RightSideBar;
