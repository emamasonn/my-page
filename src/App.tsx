import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import theme from "./theme";

import IntlProvider from "./intl/IntlProvider";

function App() {
  return (
    <IntlProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Flex justifyContent="center" height="100vh">
            <Flex
              w="100%"
              maxW="900px"
              p="20px"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="post/:key" element={<Post />} />
                </Routes>
              </Box>
              <Footer />
            </Flex>
          </Flex>
        </BrowserRouter>
      </ChakraProvider>
    </IntlProvider>
  );
}

export default App;
