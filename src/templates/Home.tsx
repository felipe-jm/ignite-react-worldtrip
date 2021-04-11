import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BaseTemplate } from "templates/Base";

export const HomeTemplate = () => (
  <BaseTemplate>
    <Box
      w="100%"
      h={335}
      backgroundImage="url('/images/background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex h="100%" align="center" justify="space-around">
        <Box>
          <Text color="white" fontSize="4xl">
            5 Continentes,
          </Text>
          <Text color="white" fontSize="4xl">
            Infinitas possibilidades.
          </Text>
          <Text color="white" fontSize="1xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image src="/images/airplane.svg" h="270" w="415" mt="40" />
      </Flex>
    </Box>
  </BaseTemplate>
);
