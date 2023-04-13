import { Flex, Text } from "@chakra-ui/react";
import { NavLink, useMatch } from "react-router-dom";

import useWindowResize from "../hooks/useWindowResize";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const windowSize = useWindowResize();

  const match = useMatch("/");

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
      {windowSize[0] > 600 ? <MenuDesktop /> : <MenuMobile />}
    </Flex>
  );
};

export default Header;
