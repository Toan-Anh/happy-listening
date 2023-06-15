import { Box, Stack, List, ListItem, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box as="nav">
      <Stack as={List} direction="row" spacing="8">
        <ListItem>
          <Link color="white">Home</Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="#about-us">
            About us
          </Link>
        </ListItem>

        <ListItem>
          <Link color="white">Service</Link>
        </ListItem>

        <ListItem>
          <Link color="white">Donate</Link>
        </ListItem>

        <ListItem>
          <Link color="white">Policy</Link>
        </ListItem>

        <ListItem>
          <Link color="white">Appointment</Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="#contact-us">
            Contact us
          </Link>
        </ListItem>
      </Stack>
    </Box>
  );
};
