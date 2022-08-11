import React from "react";
import PostCard from "../components/PostCard";
import { SimpleGrid } from "@chakra-ui/react";
import { dataPosts } from "../dataPosts";

const Blog = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {dataPosts.map((post) => (
        <PostCard
          key={post.path}
          path={post.path}
          title={post.title}
          date={post.date}
          imgUrl={post.imgUrl}
        />
      ))}
    </SimpleGrid>
  );
};

export default Blog;
