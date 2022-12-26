import { Heading } from "@chakra-ui/react";
import React from "react";

type TTitleH5Props = {
  children: string;
};

const Title = ({ children }: TTitleH5Props) => {
  return (
    <Heading as="h5" size="sm" mt="10px" mb="10px">
      {children}
    </Heading>
  );
};

export default Title;
