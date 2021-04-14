import { Box, Flex, Text } from "@chakra-ui/react";

import { ContinentsSlider } from "components/ContinentsSlider";

export const ContinentsSection = () => (
  <Flex direction="column" align="center" justify="center" mb="12">
    <Text fontSize="4xl">Vamos nessa?</Text>
    <Text fontSize="4xl">Então escolha seu continente</Text>
    <Box mt="16" w={1240}>
      <ContinentsSlider />
    </Box>
  </Flex>
);
