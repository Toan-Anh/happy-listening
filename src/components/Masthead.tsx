import { Image, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import { Navigation } from "./Navigation";

import logo from "/happy-listening-logo.png";

export const Masthead = () => {
  return (
    <Stack
      paddingX="8"
      paddingY="1"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      boxShadow="0px 2px 4px #757575"
      background="brand.500"
      zIndex={100}
    >
      <Image src={logo} alt="Happy Listening Logo" height={24} />
      <VisuallyHidden as="h1">Happy Listening</VisuallyHidden>

      <Navigation />
    </Stack>
  );
};
