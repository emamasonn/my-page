import { Flex } from "@chakra-ui/react";
import React from "react";

type TNoteProps = {
  children: string;
};

const Note = ({ children }: TNoteProps) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb="80px"
      mt="30px"
      bg="red"
    >
      {children}
    </Flex>
  );
};

export default Note;
