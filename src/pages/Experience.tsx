import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Experience = () => {
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
        <Heading>Where I’ve Worked</Heading>
        <Flex mt="70px" justifyContent="center">
          <Flex w="100%" maxW="700px">
            <Tabs isFitted w="100%" variant="line">
              <TabList>
                <Tab
                  _selected={{ color: "#fc0283", borderBottomColor: "#fc0283" }}
                  _hover={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                  _active={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                >
                  Scale AI
                </Tab>
                <Tab
                  _selected={{ color: "#fc0283", borderBottomColor: "#fc0283" }}
                  _hover={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                  _active={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                >
                  Outside The Cub
                </Tab>
                <Tab
                  _selected={{ color: "#fc0283", borderBottomColor: "#fc0283" }}
                  _hover={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                  _active={{ color: "#f9b4d7", borderBottomColor: "#f9b4d7" }}
                >
                  Coderhood
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Heading as="h3" size="lg" mt="10px">
                    Software Engineer @{" "}
                    <Link href="https://scale.com/" isExternal color="#fc0283">
                      Scale
                    </Link>
                  </Heading>
                  <Heading as="h5" size="sm" mt="5px" mb="20px">
                    Aug. 2021 - Jan. 2023 / 1 year 6 months
                  </Heading>
                  <UnorderedList fontSize={["sm", "md"]}>
                    <ListItem>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects.
                    </ListItem>
                    <ListItem>
                      Create quality code for e-commerce scraping, also create
                      the tool to audit the data obtained.
                    </ListItem>
                    <ListItem>
                      Work with a variety of different languages, platforms,
                      frameworks, and content management systems such as
                      JavaScript, TypeScript, React, Firebase, NestJS and
                      MongoDB.
                    </ListItem>
                    <ListItem>
                      Communicate with teams of engineers, designers, producers,
                      and clients on a daily basis.
                    </ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <Heading as="h3" size="lg" mt="10px">
                    Front End Developer @{" "}
                    <Link
                      href="https://www.outsidecube.com/"
                      isExternal
                      color="#fc0283"
                    >
                      Outside The Cube
                    </Link>
                  </Heading>
                  <Heading as="h5" size="sm" mt="5px" mb="20px">
                    Feb. 2021 - Jul. 2021 / 6 months
                  </Heading>
                  <UnorderedList>
                    <ListItem>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects.
                    </ListItem>
                    <ListItem>
                      Helped in the development of the ui/ux of a bed management
                      system for a Health center in ReactJS.
                    </ListItem>
                    <ListItem>
                      Worked on the development of Front-end tasks for a Photo
                      Management tool in VueJS / Quasar Framework.
                    </ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <Heading as="h3" size="lg" mt="10px">
                    Full Stack Developer @{" "}
                    <Link
                      href="https://www.linkedin.com/company/coderhood/?originalSubdomain=ar"
                      isExternal
                      color="#fc0283"
                    >
                      Coderhood
                    </Link>
                  </Heading>
                  <Heading as="h5" size="sm" mt="5px" mb="20px">
                    Jul. 2020 - Jul. 2021 / 1 año 1 mes
                  </Heading>
                  <UnorderedList>
                    <ListItem>
                      Write modern, effective and easy to maintain code for the
                      creation of a Medicines Delivery application.
                    </ListItem>
                    <ListItem>
                      Participate in the Front-end development of an educational
                      platform.
                    </ListItem>
                    <ListItem>
                      Work with a variety of different languages, frameworks,
                      and content management systems such as JavaScript,
                      TypeScript, NextJS, Chakra-UI.
                    </ListItem>
                    <ListItem>
                      Communicate with teams of engineers, designers, producers,
                      and clients on a daily basis.
                    </ListItem>
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default Experience;
