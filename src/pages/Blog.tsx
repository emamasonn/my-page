import React from "react";
import PostCard from "../components/PostCard";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { dataPosts } from "../dataPosts";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <Flex flexDirection="column">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Heading>Articles</Heading>
        <Flex mt="70px" justifyContent="center">
          <SimpleGrid columns={[1, 2]} spacing={5}>
            {dataPosts.map((post) => (
              <PostCard key={post.id} id={post.id} date={post.date} />
            ))}
          </SimpleGrid>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default Blog;
