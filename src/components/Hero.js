import { VStack, HStack, Heading, Text, Button, Image, Stack} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FullScreen from "./FullScreen";
import Img from '../images/restauranfood.jpg';


const Hero = () => {


    // create navigation through the button element
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/reservations`;
        navigate(path);
    }
    return (
        <header>
            <FullScreen>
                <HStack position={'relative'} w={'860px'}>
                    <VStack w={'40%'} m={'2rem auto 2rem 0'} alignItems={'flex-start'} gap={'2rem'}>
                        <Stack direction={'column'}>
                            {/*Find a way to get this two headings closer to each other*/}
                            <Heading as={'h1'} fontWeight={'regular'} color={'Yellow'} lineHeight={'-2px'}
                                     fontSize={64}>Little Lemon</Heading>
                            <Heading as={'h2'} fontWeight={'regular'} fontSize={40} mt={0}>Chicago</Heading>
                        </Stack>

                        <Text fontWeight={'extrabold'} fontSize={20} mt={32}>We are a family owned Meditarrean restaurant,
                            focused on traditional recipes served with a
                            modern Twist.</Text>

                        {/* change color for focus outline */}
                        <Button onClick={routeChange} bg={'Yellow'} fontSize={18} color={'Dark'} fontWeight={'regular'}
                                _hover={{ bg: '#FEE361' }}
                                _active={{
                                    bg: '#DBB602',
                                    transform: 'scale(0.98)',
                                    borderColor: 'Green',
                                }}
                                _focus={{
                                    boxShadow:
                                        '0 0 1px 2px rgba(251, 218, 187, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                                }}>Reserve a table</Button>
                    </VStack>
                        <Image
                            h={'400px'}
                            objectFit='cover'
                            borderRadius={'16'}
                            src={Img}
                            alt='Chef at restaurant holding dish'
                            position={'absolute'}
                            top={'60px'}
                            right={0}/>
                </HStack>

            </FullScreen>
        </header>
    )
};

export default Hero;