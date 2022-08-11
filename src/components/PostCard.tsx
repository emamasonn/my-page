import { Box, Image, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type PostCardProps = {
  path: string;
  title: string;
  date: string;
  imgUrl: string;
};

const PostCard = ({ date, imgUrl, path, title }: PostCardProps) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imgUrl} alt="Image post" />
      <Box p="10px">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {date}
          </Box>
        </Box>

        <Text
          fontSize="xl"
          mt="5px"
          fontWeight="semibold"
          lineHeight="tight"
          noOfLines={2}
        >
          {title}
        </Text>

        <Flex justifyContent="flex-end" mt="20px">
          <Button colorScheme="teal" size="sm">
            <Link to={`/post/${path}`}>Go</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PostCard;
