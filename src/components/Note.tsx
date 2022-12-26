import { Flex } from "@chakra-ui/react";
import React from "react";

type THeaderProps = {
  children: string;
};

const Header = ({ children }: THeaderProps) => {
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

export default Header;
