import { Flex, Text, Heading } from "@chakra-ui/react";
//import { useIntl } from "react-intl";
import { motion } from "framer-motion";

const Home = () => {
  //const { formatMessage: i18n } = useIntl();

  return (
    <Flex flexDirection="column">
      <motion.div
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.3,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <Text fontSize={["md", "md"]} mb="20px" color="#FF0080">
          Hi, my name is
        </Text>
      </motion.div>
      <motion.div
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.6,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <Heading
          as="h1"
          fontSize="clamp(40px, 8vw, 80px)"
          letterSpacing="0.6px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          lineHeight="1.3"
        >
          David E. Mason.
        </Heading>
      </motion.div>
      <motion.div
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.9,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <Heading
          as="h2"
          fontSize="clamp(40px, 8vw, 80px)"
          letterSpacing="0.6px"
          bgGradient="linear(to-l, #7928CA, #f9b4d7)"
          bgClip="text"
          lineHeight="1.3"
        >
          I'm Front-end Developer.
        </Heading>
      </motion.div>
      <motion.div
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 2.1,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <Text maxW="540px" fontSize={["15px", "17px", "17px"]} mt="20px">
          I like to create quality applications of all kinds but I like more
          when there is a need to experiment. I usually focus on the front-end
          but I also participate to a lesser extent in the back-end, that allows
          me to have a broader vision of development.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default Home;
