import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#0a192f",
        color: "#c2a5b4",
        height: "100vh",
      },
      h1: {
        color: "#f9b4d7",
      },
      h2: {
        color: "#f9b4d7",
      },
      h3: {
        color: "#f9b4d7",
      },
      root: {
        height: "100vh",
      },
    }),
  },
});

export default theme;
