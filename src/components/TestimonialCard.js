import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";


const TestimonialCard = ({ name, imageSrc, comment, ratings }) => {
    return (
        <VStack
            color="Dark"
            backgroundColor={'White'}
            border={"none"}
            cursor="pointer"
            borderRadius={16}
        >

            <HStack spacing={4} p={4} justifyContent="flex-start" width={"100%"}>
                <Heading as="h3" size="md" color="secundary">
                    {name}
                </Heading>
            </HStack>
            <Text color="black" fontSize="lg" pr={4} pl={4}>
                {comment}
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

export default TestimonialCard;