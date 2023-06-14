import { Box, Stack, List, ListItem } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box as="nav">
      <Stack as={List} direction="row" spacing="8">
        <ListItem>
          <a>Home</a>
        </ListItem>

        <ListItem>
          <a>About us</a>
        </ListItem>

        <ListItem>
          <a>Service</a>
        </ListItem>

        <ListItem>
          <a>Donate</a>
        </ListItem>

        <ListItem>
          <a>Policy</a>
        </ListItem>

        <ListItem>
          <a>Appointment</a>
        </ListItem>

        <ListItem>
          <a href="#contact-us">Contact us</a>
        </ListItem>
      </Stack>
    </Box>
  );
};
