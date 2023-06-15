import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Be Vietnam Pro', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`,
  },
  colors: {
    brand: {
      100: "#C3D2D8",
      // 200: "#699CB3",
      // 300: "#347893",
      // 400: "#205565",

      // 200: "#B2D9EA",
      // 300: "#84B4C8",
      // 500: "#619196",

      // 500: "#5bb8ff",
      // 600: "#205565",

      400: "#347893",
      500: "#00A0A9",
      600: "#005F7B",
      700: "#08314A",
    },
    brandAccent: {
      500: "#F9968B",
    },
  },
});

export default theme;
