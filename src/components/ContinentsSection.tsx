import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import { ContinentsSlider } from "components/ContinentsSlider";
import { ContinentType } from "templates/Continent";

type ContinentsSectionProps = {
  continents: ContinentType[];
};

export const ContinentsSection = ({ continents }: ContinentsSectionProps) => (
  <Flex direction="column" align="center" justify="center" mb="12">
    <VStack w="100%" spacing="2" textAlign="center" px="6">
      <Text fontSize={{ base: "2xl", md: "4xl" }}>Vamos nessa?</Text>
      <Text fontSize={{ base: "2xl", md: "4xl" }}>
        Então escolha seu continente
      </Text>
    </VStack>
    <Box mt="16" w={{ base: "100%", md: 1240 }}>
      <ContinentsSlider continents={continents} />
    </Box>
  </Flex>
);
