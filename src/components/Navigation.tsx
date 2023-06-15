import { Box, Stack, List, ListItem, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box as="nav">
      <Stack as={List} direction="row" spacing="8">
        <ListItem>
          <Link color="white" href="/">
            Home
          </Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="#about-us">
            About us
          </Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="/">
            Service
          </Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="/">
            Donate
          </Link>
        </ListItem>

        <ListItem>
          <Link color="white" href="/">
            Policy
          </Link>
        </ListItem>

        <ListItem>
          <Link
            color="white"
            href="https://forms.gle/Z6v33n641Dwp5aQx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appointment
          </Link>
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
