import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";

export const CharacteristicsSection = () => (
  <Box maxW={1480} mt="36" mx="auto">
    <SimpleGrid minChildWidth="140px" spacing={["6", "8"]} w="100%">
      <Flex direction="column" align="center" justify="center">
        <Image src="/images/cocktail.svg" alt="cocktail" />
        <Text fontWeight="bold" mt="4">
          vida noturna
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/images/surf.svg" alt="surf" />
        <Text fontWeight="bold" mt="4">
          praia
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/images/building.svg" alt="building" />
        <Text fontWeight="bold" mt="4">
          moderno
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/images/museum.svg" alt="museum" />
        <Text fontWeight="bold" mt="4">
          clássico
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/images/earth.svg" alt="earth" />
        <Text fontWeight="bold" mt="4">
          e mais...
        </Text>
      </Flex>
    </SimpleGrid>
  </Box>
);
