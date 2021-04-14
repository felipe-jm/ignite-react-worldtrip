import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const HeroSection = () => {
  const isDesktopOrTablet = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      h={335}
      bgImage="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
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

        {isDesktopOrTablet && (
          <Image
            src="/images/airplane.svg"
            h="270"
            w="415"
            mt="40"
            display="md:block"
          />
        )}
      </Flex>
    </Box>
  );
};
