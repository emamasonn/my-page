import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import ButtonLanguage from "./ButtonLanguage";

import { motion } from "framer-motion";

// TO-DO Components must be optimized

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const match = useMatch("/");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // TO-DO Find some away of modifier
  const handleOpenMenu = () => {
    if (!isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb={["60px", "100px"]}
      mt="30px"
    >
      <NavLink to="/">
        <Text
          fontSize={["3xl", "3xl", "3xl"]}
          fontWeight="700"
          width="max-content"
          color="#fc0283"
        >
          {!match ? `David E. Mason` : `DM`}
        </Text>
      </NavLink>
      {windowSize[0] > 600 ? (
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
            animate={"visible"}
          >
            <NavLink
              to="/about"
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
                //color="#f9b4d7"
                _hover={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "double",
                  textDecorationColor: "#fc0283",
                  textUnderlineOffset: "5px",
                  color: "#fc0283",
                }}
              >
                About
              </Text>
            </NavLink>
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
            animate={"visible"}
          >
            <NavLink
              to="/experience"
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
                //color="#f9b4d7"
                fontSize="xl"
                _hover={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "double",
                  textDecorationColor: "#fc0283",
                  textUnderlineOffset: "5px",
                  color: "#fc0283",
                }}
              >
                Experience
              </Text>
            </NavLink>
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
            animate={"visible"}
          >
            <NavLink
              to="/blog"
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
                Blog
              </Text>
            </NavLink>
          </motion.div>

          <ButtonLanguage />
        </Flex>
      ) : (
        <motion.div
          initial={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <motion.button
            onClick={() => handleOpenMenu()}
            initial={{
              background: "#0b192f",
              border: "unset",
              position: "absolute",
              zIndex: 30,
            }}
          >
            <motion.div
              initial={{
                width: "40px",
                background: "linear-gradient(to left, #7928CA, #fc0283)",
                height: "3px",
                marginBottom: "8px",
              }}
              variants={{
                active: {
                  rotate: 135,
                  translateY: 5,
                },
                inactive: {
                  rotate: 0,
                  translateY: 0,
                },
              }}
              animate={isOpen ? "active" : "inactive"}
            />
            <motion.div
              initial={{
                width: "40px",
                background: "linear-gradient(to left, #7928CA, #fc0283)",
                height: "3px",
                marginBottom: "8px",
              }}
              variants={{
                active: {
                  opacity: 0,
                },
                inactive: {
                  opacity: 1,
                },
              }}
              animate={isOpen ? "active" : "inactive"}
            />
            <motion.div
              initial={{
                width: "40px",
                background: "linear-gradient(to left, #7928CA, #fc0283)",
                height: "3px",
              }}
              variants={{
                active: {
                  rotate: -135,
                  translateY: -16,
                },
                inactive: {
                  rotate: 0,
                  translateY: 0,
                },
              }}
              animate={isOpen ? "active" : "inactive"}
            />
          </motion.button>

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
                <NavLink to="/" onClick={() => handleOpenMenu()}>
                  <Text
                    mb="15px"
                    fontSize="3xl"
                    bgClip="text"
                    backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
                    color="transparent"
                    _hover={{
                      backgroundImage:
                        "linear-gradient(to left, #7928CA, #FF0080)",
                      color: "transparent",
                    }}
                  >
                    Home
                  </Text>
                </NavLink>
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
                <NavLink to="/about" onClick={() => handleOpenMenu()}>
                  <Text
                    mb="15px"
                    fontSize="3xl"
                    bgClip="text"
                    backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
                    color="transparent"
                    _hover={{
                      backgroundImage:
                        "linear-gradient(to left, #7928CA, #FF0080)",
                      color: "transparent",
                    }}
                  >
                    About
                  </Text>
                </NavLink>
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
                <NavLink to="/experience" onClick={() => handleOpenMenu()}>
                  <Text
                    mb="15px"
                    fontSize="3xl"
                    bgClip="text"
                    backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
                    color="transparent"
                    _hover={{
                      backgroundImage:
                        "linear-gradient(to left, #7928CA, #FF0080)",
                      color: "transparent",
                    }}
                  >
                    Experience
                  </Text>
                </NavLink>
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
                <NavLink to="/blog" onClick={() => handleOpenMenu()}>
                  <Text
                    mb="15px"
                    fontSize="3xl"
                    bgClip="text"
                    backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
                    color="transparent"
                    _hover={{
                      backgroundImage:
                        "linear-gradient(to left, #7928CA, #FF0080)",
                      color: "transparent",
                    }}
                  >
                    Blog
                  </Text>
                </NavLink>
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
                <NavLink to="/contact" onClick={() => handleOpenMenu()}>
                  <Text
                    mb="15px"
                    fontSize="3xl"
                    bgClip="text"
                    backgroundImage="linear-gradient(to left, #7928CA, #FF0080)"
                    color="transparent"
                    _hover={{
                      backgroundImage:
                        "linear-gradient(to left, #7928CA, #FF0080)",
                      color: "transparent",
                    }}
                  >
                    Contact
                  </Text>
                </NavLink>
              </motion.div>
            </Flex>
          </motion.div>
        </motion.div>
      )}
    </Flex>
  );
};

export default Header;
