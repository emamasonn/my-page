import { useCallback, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { NavLink as RRDNavLink } from "react-router-dom";

import { motion } from "framer-motion";
import ButtonBurger from "./ButtonBurger";

type TNavLinkProps = {
  route: string;
  text: string;
  handleOpenMenu: () => void;
};

const NavLink = ({ route, text, handleOpenMenu }: TNavLinkProps) => {
  return (
    <RRDNavLink to={route} onClick={() => handleOpenMenu()}>
      <Text
        mb="15px"
        fontSize="3xl"
        bgClip="text"
        backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
        color="transparent"
        _hover={{
          backgroundImage: "linear-gradient(to left, #7928CA, #FF0080)",
          color: "transparent",
        }}
      >
        {text}
      </Text>
    </RRDNavLink>
  );
};

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    if (!isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <motion.div
      initial={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <ButtonBurger handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
      <motion.div
        initial={{
          position: "fixed",
        }}
        variants={{
          active: {
            zIndex: 20,
            background: "#0b192f",
            width: "100%",
            height: "100vh",
            right: 0,
            top: 0,
            transition: {
              duration: 0.6,
            },
          },
          inactive: {
            zIndex: 20,
            width: "0",
            height: "0",
            right: 0,
            top: 0,
            background: "#0b192f",
          },
        }}
        animate={isOpen ? "active" : "inactive"}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              route="/"
              handleOpenMenu={() => handleOpenMenu()}
              text=" Home"
            />
          </motion.div>
          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.2,
                  duration: 1,
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              route="/about"
              handleOpenMenu={() => handleOpenMenu()}
              text="About"
            />
          </motion.div>
          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.4,
                  duration: 1,
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              route="/experience"
              handleOpenMenu={() => handleOpenMenu()}
              text="Experience"
            />
          </motion.div>

          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.6,
                  duration: 1,
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              route="/articles"
              handleOpenMenu={() => handleOpenMenu()}
              text="Articles"
            />
          </motion.div>

          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.8,
                  duration: 1,
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              route="/contact"
              handleOpenMenu={() => handleOpenMenu()}
              text="Contact"
            />
          </motion.div>
        </Flex>
      </motion.div>
    </motion.div>
  );
};

export default MenuMobile;
