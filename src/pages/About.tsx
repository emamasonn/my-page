import {
  Flex,
  Heading,
  Image,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <Flex flexDirection="column">
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
        <Heading>About Me</Heading>
        <Flex
          mt="30px"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Flex flexDirection="column" maxW="600px" mb="30px">
            <Text mb="20px">
              Hi, my name is David Mason, I'm a Front-end Developer and I really
              enjoy using technology to create solutions.
            </Text>
            <Text mb="20px">
              My journey in development started when I needed a change of job
              and I was studying Computer Engineering, then some friends
              motivated me to start web development.
              <br />
              Since then, in every job I had as a developer I was able to learn
              a lot together with a great team that made the process more fun.
            </Text>
            <Text mb="20px">
              Now, my focus is to continue polishing my Front-end skills and
              expanding my Back-end knowledge.
            </Text>
            <Text mb="20px">
              Here are a few technologies I’ve been working with recently:
            </Text>
            <Flex justifyContent="flex-start" alignItems="center">
              <UnorderedList listStyleType="none" margin="20px" fontSize="sm">
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  JavaScript (ES6+)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  TypeScript
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  ReactJS
                </ListItem>
              </UnorderedList>
              <UnorderedList listStyleType="none" margin="20px" fontSize="sm">
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  ExpressJS
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  MongoDB
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHandPointRight} color="#fc0283" />
                  Firebase
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex justifyContent="center" w={["100%", "100%", "100%", "unset"]}>
            <Flex position="relative">
              <Flex
                borderRadius="10px"
                border="4px solid #fc0283"
                position="absolute"
                w={["200px", "300px", "300px", "300px"]}
                h={["200px", "300px", "300px", "300px"]}
                top="20px"
                left="20px"
              />
              <Image
                src="/images/perfil.png"
                boxSize={["200px", "300px"]}
                borderRadius="10px"
                position="sticky"
                filter="hue-rotate(45deg)"
              />
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default About;
