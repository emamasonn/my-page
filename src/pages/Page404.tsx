import { Flex, Text } from "@chakra-ui/react";

const Page404 = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="200px">
      <Text textAlign="center">
        The page you are trying to access does not exist :(
      </Text>
    </Flex>
  );
};

export default Page404;
