import {
  Flex,
  ListItem,
  UnorderedList,
  Link,
  Center,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5, position: "fixed", bottom: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.6,
            duration: 1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <Flex
        flexDirection={["row", "column"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="fit-content"
        position="fixed"
        bottom="0"
      >
        <UnorderedList listStyleType="none" m="0px" spacing="30px">
          <ListItem
            fontSize="25px"
            transition="all 0.5s ease-out"
            _hover={{ transform: "translate(0px, 4px)", color: "#fc0283" }}
          >
            <Link href="https://www.linkedin.com/in/demamason/" isExternal>
              <FaLinkedin />
            </Link>
          </ListItem>
          <ListItem
            fontSize="25px"
            transition="all 0.5s ease-out"
            _hover={{ transform: "translate(0px, 4px)", color: "#fc0283" }}
          >
            <Link href="https://github.com/emamasonn" isExternal>
              <FaGithub />
            </Link>
          </ListItem>
          <ListItem
            fontSize="25px"
            transition="all 0.5s ease-out"
            _hover={{ transform: "translate(0px, 4px)", color: "#fc0283" }}
          >
            <Link href="https://twitter.com/meisonsays" isExternal>
              <FaTwitter />
            </Link>
          </ListItem>
        </UnorderedList>
        <Center height="150px" mt="30px">
          <Divider orientation="vertical" />
        </Center>
      </Flex>
    </motion.div>
  );
};

export default SocialMedia;
