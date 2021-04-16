import { useRouter } from "next/router";

import Link from "next/link";

import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h="16"
      align="center"
      justify="space-between"
      my="2"
    >
      {asPath !== "/" ? (
        <a href="/">
          <Image src="/images/chevron-left.svg" alt="Voltar" ml="4" />
        </a>
      ) : (
        <div />
      )}

      <a href="/">
        <Image src="/images/logo.png" alt="logo" />
      </a>

      <div />
    </Flex>
  );
};
