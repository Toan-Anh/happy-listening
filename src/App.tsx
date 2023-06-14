import { ReactNode } from "react";
import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Masthead } from "./components/Masthead";
import { Section } from "./components/Section";
import theme from "./theme";
import "./App.css";

import headphoneImage from "./assets/headphone.jpg";
import { HappyListening } from "./components/HappyListening";

const H2 = ({ children }: { children?: ReactNode }) => {
  return (
    <Text as="h2" fontSize="xl" fontWeight="bold" color="red.600">
      {children}
    </Text>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" width="100%" minHeight="100vh">
        <Masthead />

        <Section full padding={0}>
          <Grid templateColumns="1fr 2fr 3fr 1fr">
            <GridItem gridRowStart={1} gridColumnStart={1} colSpan={4}>
              <AspectRatio ratio={[16 / 9, 21 / 9, 32 / 9]}>
                <Box
                  as="img"
                  src={headphoneImage}
                  alt="Image of a headphone on yellow background — Photo by C D-X on Unsplash"
                  width="100%"
                />
              </AspectRatio>
            </GridItem>
            <GridItem
              gridRowStart={1}
              gridColumnStart={2}
              zIndex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                background="whiteAlpha.700"
                boxShadow="0px 0px 12px var(--chakra-colors-yellow-500)"
                padding={6}
                borderRadius={4}
                justifyContent="center"
                textAlign="center"
              >
                <H2>
                  Welcome to <HappyListening />!
                </H2>
                <p>
                  <HappyListening /> connects you to caring listeners for
                  emotional support.
                </p>
                <ButtonGroup colorScheme="orange">
                  <Stack margin="0 auto" width="100%">
                    <Button>ZALO 24/7</Button>
                    <Button>MAKE AN APPOINTMENT</Button>
                    <Button>CALL NOW</Button>
                    <Button>EMAIL</Button>
                  </Stack>
                </ButtonGroup>
              </Stack>
            </GridItem>
          </Grid>
        </Section>

        <Section>
          <H2>About us</H2>
          <p>
            We live in a world where you can be surrounded by many people, but
            still feel lonely, with nobody to turn to when things get rough.
          </p>

          <p>
            But being heard is an indispensable need of humans, but not everyone
            has someone to talk to. At <HappyListening />, we aim to answer the
            big question “How can we make being heard a reality for everyone?”
          </p>

          <p>
            No matter who you are or what you're going through, you'll always be
            heard and cared for. We work towards a world where all voices are
            heard without judgment
          </p>
        </Section>

        <Section>
          <H2>Core values</H2>
          <ul>
            <li>
              Devotion: <HappyListening /> never stops trying our best to
              provide our customers with high quality services.
            </li>
            <li>
              Listening and Understanding: <HappyListening /> always listens to
              every of our clients’ unique life experiences while providing
              genuine support regardless of any gender, religion, living
              standard, occupation, social class, etc.
            </li>
            <li>
              Ethical Practice: <HappyListening /> strictly follows ethical
              guidelines while constantly advancing our skills and knowledge to
              provide the best service possible.
            </li>
            <li>
              Absolute security: All your information is confidential in
              accordance with the principle of practice.
            </li>
          </ul>
        </Section>

        <Section>
          <H2>Meet people who understand</H2>
          <p>
            You can find support and friendship for many issues, like
            depression, anxiety, relationships, LGBTQ+ and more. We have a
            diverse portfolio of certified listeners who are willing to listen
            to your stories without judgment.
          </p>
        </Section>

        <Box
          as="footer"
          paddingY={8}
          bgGradient="linear(white 0%, yellow.100 25%, yellow.300, orange.400)"
        >
          <Section>
            <h2 id="contact-us">Contact us</h2>
            <ul>
              <li>Hotline: 18001463</li>
              <li>Email: info.happylistening@gmail.com</li>
              <li>Booking: https://forms.gle/Z6v33n641Dwp5aQx5</li>
            </ul>
          </Section>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
