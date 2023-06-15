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
  TextProps,
} from "@chakra-ui/react";

import { HappyListening } from "./components/HappyListening";
import { Masthead } from "./components/Masthead";
import { Section } from "./components/Section";
import theme from "./theme";

import "./App.css";

import heroImage from "./assets/people-connecting.jpg";
import cafe from "./assets/cafe.jpg";

const H2 = ({ children, ...otherProps }: TextProps) => {
  return (
    <Text as="h2" fontSize="2xl" fontWeight="bold" {...otherProps}>
      {children}
    </Text>
  );
};

const HeroImage = () => {
  return (
    <GridItem
      gridRowStart={1}
      gridColumnStart={1}
      colSpan={4}
      height="100%"
      position="relative"
    >
      <AspectRatio ratio={[16 / 9, 21 / 9]} minHeight="100%">
        <Box
          as="img"
          src={heroImage}
          alt="Two women camping next to a fire — Photo by Oleksandr Pidvalnyi on Pexels"
          width="100%"
        />
      </AspectRatio>
      <Box
        position="absolute"
        bgGradient="linear(to-r, blackAlpha.700, blackAlpha.400 25%)"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
      ></Box>
    </GridItem>
  );
};

const HeroContent = () => {
  return (
    <GridItem gridRowStart={1} gridColumnStart={2} zIndex={1} display="flex">
      <Stack
        padding={6}
        margin={4}
        borderRadius={4}
        justifyContent="center"
        spacing="4"
      >
        <H2 fontSize="4xl" color="white">
          Welcome to Happy Listening
        </H2>
        <Text as="p" color="white">
          Happy Listening connects you to caring listeners for emotional
          support.
        </Text>
        <ButtonGroup colorScheme="brand">
          <Button
            as="a"
            href="https://forms.gle/Z6v33n641Dwp5aQx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAKE AN APPOINTMENT
          </Button>
          <Button as="a" href="mailto:info.happylistening@gmail.com">
            EMAIL
          </Button>
        </ButtonGroup>
      </Stack>
    </GridItem>
  );
};

const AboutUs = () => {
  return (
    <Section
      full
      bgGradient="linear(to-r, brand.500 70%, whiteAlpha.100)"
      color="white"
    >
      <Section>
        <H2 id="about-us">About us</H2>
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
          heard without judgment.
        </p>
      </Section>
    </Section>
  );
};

const CoreValues = () => {
  return (
    <Section
      full
      bgGradient="linear(to-l, brand.600 70%, whiteAlpha.100)"
      color="white"
      direction="row"
      paddingX={0}
      paddingY={0}
    >
      <Section>
        <H2>Core values</H2>
        <ul>
          <li>
            <strong>Devotion:</strong> <HappyListening /> never stops trying our
            best to provide our customers with high quality services.
          </li>
          <li>
            <strong>Listening and Understanding:</strong> <HappyListening />{" "}
            always listens to every of our clients’ unique life experiences
            while providing genuine support regardless of any gender, religion,
            living standard, occupation, social class, etc.
          </li>
          <li>
            <strong>Ethical Practice:</strong> <HappyListening /> strictly
            follows ethical guidelines while constantly advancing our skills and
            knowledge to provide the best service possible.
          </li>
          <li>
            <strong>Absolute security:</strong> All your information is
            confidential in accordance with the principle of practice.
          </li>
        </ul>
      </Section>
    </Section>
  );
};

const MeetPeople = () => {
  return (
    <Section
      full
      bgGradient="linear(to-r, brand.500 70%, whiteAlpha.100)"
      color="white"
    >
      <Section>
        <H2>Meet people who understand</H2>
        <p>
          You can find support and friendship for many issues, like depression,
          anxiety, relationships, LGBTQ+ and more. We have a diverse portfolio
          of certified listeners who are willing to listen to your stories
          without judgment.
        </p>
      </Section>
    </Section>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" width="100%" minHeight="100vh">
        <Masthead />

        <Section full padding={0}>
          <Grid templateColumns="1fr minmax(auto, 1280px) 1fr">
            <HeroImage />
            <HeroContent />
          </Grid>
        </Section>

        <AboutUs />
        <CoreValues />
        <MeetPeople />

        <Box
          as="footer"
          paddingY={8}
          background="brand.700"
          color="white"
          // bgGradient="linear(white 0%, yellow.100 25%, yellow.300, orange.400)"
        >
          <Section>
            <H2 id="contact-us">Contact us</H2>
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
