import { Heading, Flex, Box, Text } from "@chakra-ui/react";

type SlideProps = {
  heading: string;
  description: string;
  imgUrl: string;
};

export const Slide = ({ heading, description, imgUrl }: SlideProps) => (
  <Box
    w={1240}
    h={450}
    bgImage={`url(${imgUrl})`}
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Flex
      bgColor="rgba(0, 0, 1, 0.4)"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading color="white">{heading}</Heading>
      <Text color="white" fontWeight="bold" fontSize="2xl" mt="4">
        {description}
      </Text>
    </Flex>
  </Box>
);
