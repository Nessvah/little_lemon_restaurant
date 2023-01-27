import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";


const SaladCard = ({ title, description, imageSrc }) => {
    return (
        <VStack
            color="black"
            backgroundColor="#ffffff"
            border={"1px solid black"}
            cursor="pointer"
            borderRadius="xl"
        >
            <Image src={imageSrc} alt={title} borderRadius="xl" />
            <HStack spacing={4} p={4} justifyContent="flex-start" width={"100%"}>
                <Heading as="h3" size="md" color="secundary">
                    {title}
                </Heading>
            </HStack>
            <Text color="black" fontSize="lg" pr={4} pl={4}>
                {description}
            </Text>
            <HStack display="flex" gap={8} justifyContent="flex-start" width={"100%"} pt={2} pb={2}>
                <HStack spacing={2} pl={4}>
                    <p>Source Code</p>

                </HStack>{" "}
                <HStack spacing={2}>
                    <p>Live Demo</p>

                </HStack>
            </HStack>
        </VStack>
    );
};

export default SaladCard;