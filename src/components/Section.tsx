import { Stack } from "@chakra-ui/react";
import { ComponentProps, ReactNode } from "react";

export const Section = ({
  full = false,
  children,
  ...otherProps
}: {
  full?: boolean;
  children?: ReactNode;
} & Pick<
  ComponentProps<typeof Stack>,
  "padding" | "paddingX" | "paddingY"
>) => {
  return (
    <Stack
      as="section"
      paddingX="8"
      paddingY="6"
      maxWidth={full ? "100%" : "1280px"}
      margin="0 auto"
      spacing="4"
      {...otherProps}
    >
      {children}
    </Stack>
  );
};
