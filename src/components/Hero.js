import { VStack, HStack, Heading, Text, Button, Image, Box} from "@chakra-ui/react";


const Hero = () => {
    return (
        <header>
            <Box bg={'Green'} h={'400px'} maxW={'100%'}>
                <HStack>
                    <VStack maxW={'80%'} m={'0 auto'}>
                        <Heading as={'h1'} color={'Yellow'}>Little Lemon</Heading>
                        <Heading as={'h2'}>Chicago</Heading>
                        <Text>We are a family owned Meditarrean restaurant,
                            focused on traditional recipes served with a
                            modern Twist.</Text>
                        <Button>Reserve a table</Button>
                    </VStack>
                    <Box>
                        <Image></Image>
                    </Box>

                </HStack>

            </Box>
        </header>
    )
};

export default Hero;