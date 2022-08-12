import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import PostCard from "../components/PostCard";
import { dataPosts } from "../dataPosts";

const Home = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="flex-start"
        lineHeight="24px"
        letterSpacing="1px"
        fontWeight="300"
      >
        <Text fontSize="xl" mb="30px" lineHeight="24px">
          Hola! Soy David, desarrollador. Asi como la practica hace al maestro.
          En este blog vas a encontrar sobre los topic que vaya a aprendiendo y
          tenga que ganas de hablar.
        </Text>
        <Text fontSize="xl">
          Cualquier comentario que tengan no duden en decirme o de mandar un PR
          al repo.
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt="100px"
      >
        <Flex w="100%" justifyContent="flex-start" alignItems="center">
          <Text fontSize="4xl" my="30px">
            Posts
          </Text>
        </Flex>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {dataPosts.slice(0, 2).map((post) => (
            <PostCard
              key={post.path}
              path={post.path}
              title={post.title}
              date={post.date}
              imgUrl={post.imgUrl}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Home;
