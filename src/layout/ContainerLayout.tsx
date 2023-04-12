import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Flex } from "@chakra-ui/react";
import SocialMedia from "../components/SocialMedia";

type ContainerLayoutProps = {
  children: React.ReactNode;
};

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Flex
      justifyContent="center"
      px={["25px", "25px", "100px"]}
      position="relative"
    >
      <Flex
        justifyContent="flex-start"
        flexDirection="column"
        w="100%"
        maxW="1300px"
        h="100vh"
      >
        <Header />
        <Box mx={["0", "20px", "100px", "130px"]} pb="60px">
          {children}
        </Box>
        {windowSize[0] > 767 && <SocialMedia />}
      </Flex>
    </Flex>
  );
};

export default ContainerLayout;
