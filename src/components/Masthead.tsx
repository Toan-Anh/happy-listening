import { Stack, Text } from "@chakra-ui/react";
import { Navigation } from "./Navigation";

export const Masthead = () => {
  return (
    <Stack
      paddingX="8"
      paddingY="4"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      boxShadow="0px 2px 4px #757575"
      background="white"
      zIndex={100}
    >
      <Text as="h1" fontSize="3xl" fontFamily="Concert One" color="orange.500">
        Happy Listening
      </Text>
      <Navigation />
    </Stack>
  );
};
