import { Heading } from "@chakra-ui/react";
import React from "react";

type TTitleH3Props = {
  children: string;
};

const Title = ({ children }: TTitleH3Props) => {
  return (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  );
};

export default Title;
