import { Box, Image, Flex, Text, VStack } from "@chakra-ui/react";

type CityCardProps = {
  title: string;
  subtitle: string;
  imgUrl: string;
  flagUrl: string;
};

export const CityCard = ({
  title,
  subtitle,
  imgUrl,
  flagUrl,
}: CityCardProps) => (
  <Box w={256} h={279} bg="#ffffff" borderRadius="4">
    <Flex direction="column" h="100%">
      <Image
        src={imgUrl}
        alt={title}
        w="100%"
        h={173}
        borderRadius="4"
        borderBottomRadius="none"
      />
      <Flex
        h="100%"
        pt="3"
        px="6"
        align="center"
        justify="space-between"
        border="1px"
        borderTop="none"
        borderColor="#ffba08"
        borderRadius="4"
        borderTopRadius="none"
      >
        <Box textAlign="left">
          <Text fontWeight="semibold" fontSize="20">
            {title}
          </Text>
          <Text mt="2" color="gray.500">
            {subtitle}
          </Text>
        </Box>
        <Image boxSize="50px" src={flagUrl} alt={title} />
      </Flex>
    </Flex>
  </Box>
);
