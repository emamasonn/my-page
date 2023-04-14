import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Post from "./pages/Post";
import theme from "./theme";

import IntlProvider from "./intl/IntlProvider";
import ContainerLayout from "./layout/ContainerLayout";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  return (
    <IntlProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <ContainerLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Articles" element={<Articles />} />
              <Route path="post/:key" element={<Post />} />
              <Route path="experience" element={<Experience />} />
              <Route path="about" element={<About />} />
            </Routes>
          </ContainerLayout>
        </BrowserRouter>
      </ChakraProvider>
    </IntlProvider>
  );
}

export default App;
