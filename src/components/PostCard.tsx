import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import Gradient from "javascript-color-gradient";
import { motion } from "framer-motion";

type PostCardProps = {
  path: string;
  title: string;
  date: string;
  imgUrl: string;
};

const PostCard = ({ date, imgUrl, path, title }: PostCardProps) => {
  // Generate a gradient of colors
  //const colorArr = new Gradient()
  //  .setColorGradient("#3F2CAF", "#003566")
  //  .setMidpoint(20)
  //  .getColors();
  //
  //const colorArr1 = new Gradient()
  //  .setColorGradient("#FFAAAA", "#fb5607")
  //  .setMidpoint(20)
  //  .getColors();
  //
  //const firstColor = colorArr[Math.floor(Math.random() * colorArr.length)];
  //const secondColor = colorArr1[Math.floor(Math.random() * colorArr1.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <Box
        h="210px"
        maxH="210px"
        borderRadius="lg"
        overflow="hidden"
        background={`linear-gradient(to right, #3F2CAF, #fb5607)`}
      >
        <Flex
          p="10px"
          justifyContent="space-between"
          flexDirection="column"
          h="100%"
        >
          <Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
            >
              {date}
            </Box>

            <Text
              fontSize={["4xl", "5xl"]}
              mt="5px"
              fontWeight="900"
              lineHeight="55px"
              noOfLines={2}
            >
              {title}
            </Text>
          </Box>
          <Flex justifyContent="flex-end" mt="20px">
            <Button
              background="#003566"
              size="sm"
              _hover={{
                background: "#3F2CAF",
              }}
            >
              <Link to={`/post/${path}`}>Go</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default PostCard;
