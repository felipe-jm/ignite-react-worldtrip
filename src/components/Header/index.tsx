import { Box, Image } from "@chakra-ui/react";

export const Header = () => (
  <Box as="header" w="100%" h="16" p="4">
    <Image src="/images/logo.png" alt="logo" mx="auto" />
  </Box>
);
