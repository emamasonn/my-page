import { Flex, Text } from "@chakra-ui/react";
import { NavLink as RRDNavLink } from "react-router-dom";
import ButtonLanguage from "./ButtonLanguage";

import { motion } from "framer-motion";

type TNavLinkProps = {
  route: string;
  text: string;
};

const NavLink = ({ route, text }: TNavLinkProps) => {
  return (
    <RRDNavLink
      to={route}
      style={(e) =>
        e.isActive
          ? {
              textDecorationLine: "underline",
              textDecorationStyle: "double",
              textDecorationColor: "#fc0283",
              textUnderlineOffset: "5px",
              color: "#fc0283",
            }
          : { color: "#f9b4d7" }
      }
    >
      <Text
        fontSize="xl"
        _hover={{
          textDecorationLine: "underline",
          textDecorationStyle: "double",
          textDecorationColor: "#fc0283",
          textUnderlineOffset: "5px",
          color: "#fc0283",
        }}
      >
        {text}
      </Text>
    </RRDNavLink>
  );
};

const MenuDesktop = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth="300px"
      w="100%"
    >
      <motion.div
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <NavLink route="/about" text="About" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <NavLink route="/experience" text="Experience" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <NavLink route="/articles" text="Articles" />
      </motion.div>

      <ButtonLanguage />
    </Flex>
  );
};

export default MenuDesktop;
