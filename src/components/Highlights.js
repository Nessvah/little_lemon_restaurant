import { VStack, HStack, Image, Heading, Text, Card, CardHeader, CardBody, CardFooter, Box } from "@chakra-ui/react";
import MenusData from "../data/menusData";


const Highlights = ()=> {
    return (
        <Box>
            <HStack spacing={2}>
                <Heading as={'h2'}>
                    This weeks specials!
                </Heading>

            </HStack>
        </Box>
    )
};

export default Highlights;