import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";

const SaladCard = ({ imageSrc, name, price, description, delivery }) => {
  return (
    <VStack
      height={"fit-content"}
      color="black"
      border={"1px solid black"}
      cursor="pointer"
      borderRadius="xl"
    >
      <Image src={imageSrc} alt={name} borderRadius="xl" />
      <VStack spacing={2} height={"100%"}>
        <HStack spacing={4} p={4} justifyContent={"space-between"}>
          <Heading as="h3" size="md" color="secundary">
            {name}
          </Heading>
          <Text>{price}</Text>
        </HStack>

        <Text color="black" fontSize="lg" pr={4} pl={4}>
          {description}
        </Text>
        <Text>{delivery}</Text>
      </VStack>
    </VStack>
  );
};

export default SaladCard;
