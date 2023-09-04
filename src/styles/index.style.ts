import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "rgb(239, 239, 239)",
        color: "blackAlpha.900",
      },
    },
  },
});

export default theme;