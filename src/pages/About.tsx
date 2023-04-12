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
              Hi, I'm Emanuel Mason and I want you to get to know me a little
              bit better and tell you about how I ended up working as a
              developer.
            </Text>
            <Text mb="20px">
              When I moved to La Plata to study Computer Engineering I had to
              look for a job, that led me to work as a dishwasher, kitchen
              helper or as a builder.
              <br />
              But that had nothing to do with programming and that bothered me.
              I have some friends who at that time worked as developers, that
              motivated me to start studying on my own and after a few hard
              months I was able to get my first job as a developer and from then
              on I did not stop growing professionally.
            </Text>
            <Text mb="20px">
              Since then I had several jobs as a developer and I can say that in
              each one I learned a lot and I was lucky that I always had a great
              team.
            </Text>
            <Text mb="20px">
              I worked in different types of companies such as a start up, a
              large company and as a freelance so I had in my hands varied
              projects from creating an application from scratch to work on a
              finished product.
            </Text>
            <Text mb="20px">
              Not everything is development, I also love other things like
              outdoor activities such as trekking or just having some mates in a
              park, BJJ and making a barbecue with family or friends.
            </Text>
            <Text mb="20px">
              Here are a few technologies I’ve been working with recently:
            </Text>
            <UnorderedList listStyleType="none" margin="0" fontSize="sm">
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
              <ListItem>
                <ListIcon as={FaHandPointRight} color="#fc0283" />
                ExpressJS
              </ListItem>
            </UnorderedList>
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
