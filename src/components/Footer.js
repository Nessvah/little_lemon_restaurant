import { VStack, HStack, UnorderedList, ListItem, Image, Heading} from "@chakra-ui/react";
import FooterLogo from '../images/Lemon.svg';
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import FullScreen from "./FullScreen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(
        <footer>
            <FullScreen>
                <HStack w={'860px'} spacing={8} mt={'80px'} mb={'80px'} alignItems={'flex-start'}
                        justifyContent={'space-between'}>
                    <VStack alignItems={'flex-start'}>
                        <Image boxSize={'120px'}  src={FooterLogo}/>
                        <Heading as={'h2'} color={'Yellow'} fontWeight={'regular'} letterSpacing={1.5} fontSize={'40px'}
                                 textTransform={'uppercase'} >Little</Heading>
                        <Heading as={'h2'} color={'Yellow'} fontWeight={'regular'} letterSpacing={1.5} fontSize={'40px'}
                                 textTransform={'uppercase'} >Lemon</Heading>
                    </VStack>
                    <VStack spacing={4} alignItems={'flex-start'}>
                        <Heading as={'h5'} fontFamily={'Karla'} fontWeight={'extrabold'} fontSize={'18px'}
                                 color={'LightSalmon'}>Links</Heading>
                        <UnorderedList styleType={'none'}>
                            <ListItem>Home</ListItem>
                            <ListItem>About</ListItem>
                            <ListItem>Menu</ListItem>
                            <ListItem>Reservations</ListItem>
                            <ListItem>Order Online</ListItem>
                            <ListItem>Login</ListItem>
                        </UnorderedList>
                    </VStack>
                    <VStack spacing={4} alignItems={'flex-start'}>
                        <Heading as={'h5'} fontFamily={'Karla'} fontWeight={'extrabold'} fontSize={'18px'}
                                 color={'LightSalmon'}> Contact </Heading>
                        <address>
                            <p>302-750-7946</p>
                            <p>2225 Argonne Street</p>
                            <p>Chicago</p>
                            <p>info@littlelemon.com</p>
                        </address>
                    </VStack>
                    <VStack spacing={4}>
                        <Heading as={'h5'} fontFamily={'Karla'} fontWeight={'extrabold'} fontSize={'18px'}
                                 color={'LightSalmon'}>
                            Socials
                        </Heading>
                            <UnorderedList styleType={'none'}>
                                <HStack>
                                <ListItem><FontAwesomeIcon icon={faFacebook} size='1x'/></ListItem>
                                <ListItem><FontAwesomeIcon icon={faTwitter} size='1x'/></ListItem>
                                <ListItem><FontAwesomeIcon icon={faInstagram} size='1x'/></ListItem>
                                </HStack>
                            </UnorderedList>


                    </VStack>
                </HStack>
            </FullScreen>
        </footer>
    )
}

export default Footer;