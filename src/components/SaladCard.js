import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaladCard = ({ imageSrc, name, price, description, delivery }) => {
  return (
    <VStack
      height={550}
      color="Dark"
      border={"1px solid black"}
      cursor="pointer"
      borderRadius="xl"
      backgroundColor={"White"}
    >
      <Image
        src={imageSrc}
        alt={name}
        borderTopRadius={16}
        boxSize={"100%"}
        objectFit={"cover"}
      />
      <VStack spacing={2} height={"100%"} alignItems={"flex-start"}>
        <HStack spacing={4} p={4} gap={18}>
          <Heading as="h3" fontSize={18} fontFamily={"Karla"}>
            {name}
          </Heading>
          <Text color={"Salmon"} fontWeight={"bold"}>
            {price}
          </Text>
        </HStack>

        <Text color={"Green"} fontSize="lg" pr={4} pl={4}>
          {description}
        </Text>
        <HStack spacing={4} pt={2} pb={2}>
          {" "}
          <Text pl={4} fontSize={18} fontFamily={"Karla"} fontWeight={"bold"}>
            {delivery}
          </Text>
          <FontAwesomeIcon icon={faMotorcycle} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SaladCard;
