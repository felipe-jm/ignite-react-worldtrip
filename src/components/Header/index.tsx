import { Flex, Image } from "@chakra-ui/react";

export const Header = () => (
  <Flex as="header" w="100%" h="16" align="center" justify="center" my="2">
    <Image src="/images/logo.png" alt="logo" />
  </Flex>
);
