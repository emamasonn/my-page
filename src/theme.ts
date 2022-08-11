import { extendTheme } from "@chakra-ui/react";
//import { mode } from "@chakra-ui/theme-tools";
//const dark = "#232323";
//const light = "#f0f0f0";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#1f2028", // mode(light, dark)(props),
        color: "#fff",
      },
    }),
  },
});

export default theme;
