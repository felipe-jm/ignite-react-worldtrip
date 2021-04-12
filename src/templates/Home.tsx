import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";

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
      <Flex
        h="100%"
        mx="auto"
        align="center"
        justify="space-around"
        maxW={1480}
      >
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

    <Box maxW={1480} mt="36" mx="auto">
      <SimpleGrid minChildWidth="140px" spacing={["6", "8"]} w="100%">
        <Flex direction="column" align="center" justify="center">
          <Image src="/images/cocktail.svg" alt="cocktail" />
          <Text fontWeight="bold" color="gray.600" mt="4">
            vida noturna
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Image src="/images/surf.svg" alt="surf" />
          <Text fontWeight="bold" color="gray.600" mt="4">
            praia
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Image src="/images/building.svg" alt="building" />
          <Text fontWeight="bold" color="gray.600" mt="4">
            moderno
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Image src="/images/museum.svg" alt="museum" />
          <Text fontWeight="bold" color="gray.600" mt="4">
            clássico
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Image src="/images/earth.svg" alt="earth" />
          <Text fontWeight="bold" color="gray.600" mt="4">
            e mais...
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  </BaseTemplate>
);
