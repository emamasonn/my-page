import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb={["60px", "100px"]}
      mt="30px"
    >
      <Link to="/">
        <Text fontSize="2xl" fontWeight="700">
          David E. Mason
        </Text>
      </Link>
      <Link to="/blog">
        <Text fontSize="xl">Blog</Text>
      </Link>
    </Flex>
  );
};

export default Header;
