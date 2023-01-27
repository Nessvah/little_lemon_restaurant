import { VStack, HStack, Heading, Text, Image} from "@chakra-ui/react";
import MarioAndAdrian from '../images/marioandadrian_A.jpg'
import Adrian from '../images/restaurantchef_B.jpg';



const About = () => {


    return(
       <HStack w={'860px'} minH={'fit-content'} m={'4rem auto 10rem auto'} alignItems={'flex-start'} position={'relative'}
               justifyContent={'space-between'}>
           <VStack spacing={6} alignItems={'flex-start'} >
               {/* Get this two headings closer to each other */}
               <Heading as={'h2'} fontSize={52} fontWeight={'regular'} color={'Green'}>Little Lemon</Heading>
               <Heading as={'h3'} fontSize={40} fontWeight={'regular'}>Chicago</Heading>

               <Text maxW={'35ch'}>
                   facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio
                   tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat
                   ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus
                   faucibus scelerisque eleifend donec pretium vulputate.
               </Text>
           </VStack>
           <HStack justifyContent={'flex-end'} position={'relative'}>
               <Image w={'50%'} h={'350px'} objectFit={'cover'} objectPosition={'75% 10%'} borderRadius={'16px'}
                      alt={'Chef\'s Mario and Adrian admiring their work'} src={MarioAndAdrian}/>
               {/* Change back image to come forward on hover */}
               <Image w={'50%'} h={'350px'}  objectFit={'cover'} borderRadius={'16px'}
                      alt={'Adrian preparing the best dish in town to a client'} src={Adrian} position={'absolute'}
                      zIndex={-5} top={90} right={120} />

           </HStack>
       </HStack>
    )
}

export default About;