import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#23272f",
        color: "#fff",
        height: "100vh",
      },
      root: {
        height: "100vh",
      },
    }),
  },
});

export default theme;
