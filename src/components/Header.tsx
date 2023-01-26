import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ButtonLanguage from "./ButtonLanguage";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb={["60px", "100px"]}
      mt="30px"
    >
      <Link to="/">
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="700">
          David E. Mason
        </Text>
      </Link>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="100px"
        w="100%"
      >
        <Link to="/blog">
          <Text fontSize="xl">Blog</Text>
        </Link>
        <ButtonLanguage />
      </Flex>
    </Flex>
  );
};

export default Header;
