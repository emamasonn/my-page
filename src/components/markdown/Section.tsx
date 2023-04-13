import { Text } from "@chakra-ui/react";
import React from "react";

type TSectionProps = {
  children: string;
};

const Section = ({ children }: TSectionProps) => {
  return (
    <Text
      fontSize={["md", "lg", "xl"]}
      mt={["10px", "20px", "20px"]}
      mb={["10px", "20px", "20px"]}
    >
      {children}
    </Text>
  );
};

export default Section;
