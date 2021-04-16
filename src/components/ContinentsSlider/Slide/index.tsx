import { Heading, Flex, Box, Text, Link } from "@chakra-ui/react";

type SlideProps = {
  heading: string;
  description: string;
  href: string;
  imgUrl: string;
};

export const Slide = ({ heading, description, href, imgUrl }: SlideProps) => (
  <Box
    w={{ base: "100%", md: 1240 }}
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
      <Link
        href={href}
        color="white"
        fontSize="4xl"
        fontWeight="bold"
        _hover={{
          color: "#ffba08",
        }}
      >
        {heading}
      </Link>
      <Text color="white" fontWeight="bold" fontSize="2xl" mt="4">
        {description}
      </Text>
    </Flex>
  </Box>
);
