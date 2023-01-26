import React from "react";
import PostCard from "../components/PostCard";
import { SimpleGrid } from "@chakra-ui/react";
import { dataPosts } from "../dataPosts";

const Blog = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={5}>
      {dataPosts.map((post) => (
        <PostCard key={post.id} id={post.id} date={post.date} />
      ))}
    </SimpleGrid>
  );
};

export default Blog;
