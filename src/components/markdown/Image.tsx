import { Flex, Image } from "@chakra-ui/react";
import React from "react";

type TNoteProps = {
  url: string;
};

const MainImage = ({ url }: TNoteProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mb={["40px", "80px"]}
      mt="30px"
    >
      <Image src={url} alt="Main Image" />
    </Flex>
  );
};

export default MainImage;
