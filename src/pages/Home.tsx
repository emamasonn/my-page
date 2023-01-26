import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useIntl } from "react-intl";
import PostCard from "../components/PostCard";
import { dataPosts } from "../dataPosts";

const Home = () => {
  const { formatMessage: i18n } = useIntl();

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
          {i18n({ id: `home.firstText` })}
        </Text>
        <Text fontSize={["md", "xl"]}>{i18n({ id: `home.secondText` })}</Text>
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
