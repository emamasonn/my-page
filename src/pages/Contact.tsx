import {
  Flex,
  ListItem,
  UnorderedList,
  Link,
  Text,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaHandSpock } from "react-icons/fa";

const Contact = () => {
  const urlSocialMedia = [
    { url: "https://www.linkedin.com/in/demamason/", icon: <FaLinkedin /> },
    { url: "https://github.com/emamasonn", icon: <FaGithub /> },
    { url: "https://twitter.com/meisonsays", icon: <FaTwitter /> },
  ];
  return (
    <motion.div
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="400px"
        color="#f7b2d7"
      >
        <Heading
          w="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb="50px"
        >
          Contact me! <FaHandSpock style={{ marginLeft: "10px" }} />
        </Heading>

        <Text textAlign="center" maxW="400px">
          I am always open to hear about new job opportunities. If you have any
          questions or just want to say hello or have a drink feel free to talk.
        </Text>
        <Text my="20px">emamasonn@gmail.com</Text>
        <Box>
          <UnorderedList listStyleType="none" display="flex" my="20px">
            {urlSocialMedia.map((sm) => {
              return (
                <ListItem
                  key={sm.url}
                  fontSize="30px"
                  transition="all 0.5s ease-out"
                  _hover={{
                    transform: "translate(0px, 4px)",
                    color: "#fc0283",
                  }}
                  mx="10px"
                >
                  <Link href={sm.url} isExternal>
                    {sm.icon}
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>

        <Button
          fontSize="17px"
          textTransform="uppercase"
          padding="18px"
          fontWeight="400"
          my="20px"
          color="#fc0283"
          colorScheme="#fc0283"
          variant="outline"
          _hover={{
            bg: "#fc0283",
            color: "#f9b4d7",
          }}
          _active={{
            bg: "#fc0283",
            transform: "scale(0.98)",
          }}
        >
          <Link
            href="resume/resume.pdf"
            isExternal
            target="_blank"
            download="David Mason's Resume"
            _hover={{ textDecoration: "none" }}
          >
            Resume
          </Link>
        </Button>
      </Flex>
    </motion.div>
  );
};

export default Contact;
