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
        <Text fontSize={["md", "xl"]} mb="20px" lineHeight="24px">
          Hola! Soy David y trabajo como desarrollador. Me gusta encontrar
          soluciones de calidad a traves de la tecnologia.
        </Text>
        <Text fontSize={["md", "xl"]}>
          En este sitio vas a encontrar principalmente contenido sobre el
          desarrollo de aplicaciones y buenas practicas. Ademas de alguna que
          otra cosa que me parezca interesante de compratir.
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={["50px", "100px"]}
      >
        <Flex w="100%" justifyContent="flex-start" alignItems="center">
          <Text fontSize={["2xl", "3xl", "4xl"]} mb="30px">
            Posts
          </Text>
        </Flex>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {dataPosts.slice(0, 2).map((post) => (
            <PostCard key={post.id} id={post.id} date={post.date} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Home;
