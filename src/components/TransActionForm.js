import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

const TransActionForm = ({ addTransAction, onClose, isOpen }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const [value, setValue] = useState("expense");

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransAction(formValues);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>TransAction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  name="desc"
                  focusBorderColor="green.500"
                  placeholder="Enter description ..."
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  name="amount"
                  focusBorderColor="green.500"
                  placeholder="Enter Amount ..."
                  onChange={handleChange}
                />
              </FormControl>
              <RadioGroup
                onChange={setValue}
                value={value}
                defaultValue="1"
                mt="5"
              >
                <Stack spacing={5} direction="row">
                  <Radio
                    onChange={handleChange}
                    name="type"
                    colorScheme="red"
                    value="expense"
                    checked={formValues.type === "expense"}
                  >
                    Expense
                  </Radio>
                  <Radio
                    onChange={handleChange}
                    name="type"
                    colorScheme="green"
                    value="income"
                    checked={formValues.type === "income"}
                  >
                    Income
                  </Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button cursor="pointer" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                bg="green.500"
                color="white"
                cursor="pointer"
                onClick={onClose}
                _hover={{ bg: "green.600" }}
                _active={{ bg: "green.700" }}
              >
                add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransActionForm;
