import { Box, Heading, Flex, SimpleGrid, Text, HStack } from "@chakra-ui/react";
import { CityCard } from "components/CityCard";

import { BaseTemplate } from "templates/Base";

export type City = {
  title: string;
  subtitle: string;
  imgUrl: string;
  flagUrl: string;
};

export type ContinentType = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  languages: number;
  cities: City[];
  countries: number;
  imgUrl: string;
};

type ContinentTemplate = {
  continent: ContinentType;
};

export const ContinentTemplate = ({ continent }: ContinentTemplate) => (
  <BaseTemplate>
    <Box
      w="100%"
      h={[200, 500]}
      bgImage={`url('${continent.imgUrl}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        h="100%"
        p="8"
        align={["center", "flex-end"]}
        justify="flex-start"
        bgColor="rgba(0, 0, 1, 0.2)"
        maxW={1160}
        mx="auto"
      >
        <Heading color="white">{continent.title}</Heading>
      </Flex>
    </Box>

    <Box maxW={1160} mx="auto" mt="20" mb="10" p="6">
      <SimpleGrid minChildWidth="200px" spacing={["6", "8"]} w="100%">
        <Text align="justify">{continent.description}</Text>
        <HStack spacing="8" mx="auto">
          <Flex direction="column" align="center" justify="center">
            <Text color="#ffba08" fontSize="4xl" fontWeight="bold">
              {continent.countries}
            </Text>
            <Text fontWeight="semibold">países</Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text color="#ffba08" fontSize="4xl" fontWeight="bold">
              {continent.languages}
            </Text>
            <Text fontWeight="semibold">línguas</Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text color="#ffba08" fontSize="4xl" fontWeight="bold">
              {continent.cities.length}
            </Text>
            <Text fontWeight="semibold">cidades</Text>
          </Flex>
        </HStack>
      </SimpleGrid>

      <Text fontSize="3xl" mt="10">
        Cidades
      </Text>
      <SimpleGrid mt="5" minChildWidth="40px" spacing="45px">
        {continent.cities.map((city) => (
          <CityCard
            key={city.title}
            title={city.title}
            subtitle={city.subtitle}
            imgUrl={city.imgUrl}
            flagUrl={city.flagUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  </BaseTemplate>
);
