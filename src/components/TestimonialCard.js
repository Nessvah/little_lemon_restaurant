import {Heading, HStack, Avatar, Text, VStack, Image} from "@chakra-ui/react";
import star from '../images/ratingstar.svg'


const TestimonialCard = ({ name, imageSrc, comment, ratings }) => {

    const renderRatings = (ratings) => {
        let stars = [];
        for(let i=0; i < ratings; i++){
            stars.push(<Image key={i} src={star} boxSize={'25px'}></Image>);
        }
        return stars;
    }
    return (
        <VStack
            color="Dark"
            backgroundColor={'White'}
            border={"none"}
            cursor="pointer"
            borderRadius={16}
        >
            <VStack spacing={4} p={3} alignItems={'flex-start'} width={"100%"}>
                <Heading as="h3" fontSize={'18'} fontFamily={'Karla'}>
                    {name}
                </Heading>
                <HStack p>
                    <Avatar src={imageSrc} width={'65px'} height={'65px'} objectFit={'cover'}/>
                    <Text hyphens={'auto'}>
                        {comment}
                    </Text>
                </HStack>
            <HStack display="flex" gap={8} justifyContent="flex-start" width={"100%"} pt={2} pb={2}>
                <HStack spacing={2} >
                    {
                        renderRatings(ratings)
                    }

                </HStack>
            </HStack>
            </VStack>
        </VStack>
    );
};

export default TestimonialCard;