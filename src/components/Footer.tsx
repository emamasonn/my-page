import { Box, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaBeer, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      m="60px"
    >
      <Text
        fontSize="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        David E. Mason
        <Box ml="5px" color="#ED8936" position="relative">
          <Tooltip hasArrow label="Tomemos una birra!" placement="top">
            <Box>
              <FaBeer />
            </Box>
          </Tooltip>
        </Box>
      </Text>
      <Flex m="10px">
        <Link href="https://www.linkedin.com/in/demamason/" m="5px" isExternal>
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/emamasonn" m="5px" isExternal>
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/meisonsays" m="5px" isExternal>
          <FaTwitter />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
