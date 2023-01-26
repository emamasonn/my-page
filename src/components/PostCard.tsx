import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import Gradient from "javascript-color-gradient";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

type PostCardProps = {
  id: string;
  date: string;
};

const PostCard = ({ date, id }: PostCardProps) => {
  const { formatMessage: i18n } = useIntl();
  const i18nNs = "titles";

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
        borderRadius="10px"
        overflow="hidden"
        background="#343a46"
        padding="8px"
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
              fontSize={["sm", "md"]}
              textTransform="uppercase"
            >
              {date}
            </Box>

            <Text
              fontSize={["2xl", "3xl"]}
              mt="5px"
              fontWeight="900"
              lineHeight={["35px", "45px"]}
              noOfLines={2}
            >
              {i18n({ id: `${i18nNs}.whyIsImportTheKeysInReact` })}
            </Text>
          </Box>
          <Flex justifyContent="flex-end" mt="20px">
            <Button
              size={["sm"]}
              bg="#DD6B20"
              variant="solid"
              _hover={{
                bg: "#fb5407de",
              }}
              _active={{
                bg: "#fb5407de",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
            >
              <Link to={`/post/${id}`}>
                {i18n({ id: `buttonText.readMore` })}
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default PostCard;
