import { Heading } from "@chakra-ui/react";
import React from "react";

type TTitleH1Props = {
  children: string;
};

const TitleH1 = ({ children }: TTitleH1Props) => {
  return (
    <Heading
      as="h1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom="45px"
    >
      {children}
    </Heading>
  );
};

export default TitleH1;
