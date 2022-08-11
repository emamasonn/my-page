import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
//import Footer from "./components/Footer";
import Post from "./pages/Post";
import theme from "./theme";
// no tengo una frase motivacional ni nada loco.esto es un blog sobre topic que quiero abordar.
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex justifyContent="center">
          <Box w="100%" maxW="900px" p="20px">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="post/:key" element={<Post />} />
            </Routes>
            {/*<Footer />*/}
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
