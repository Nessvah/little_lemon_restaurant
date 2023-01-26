import {Link} from "react-router-dom";
import { HStack, UnorderedList, ListItem, Box, Image} from "@chakra-ui/react";
import Logo from "../images/Logo.svg";


const Navbar = () => {

    return (
        <header className={'header'}>
            <HStack maxW={'860px'} margin={'0 auto'} justifyContent={'space-between'} alignItems={'center'} h={'100%'}>
                <Box>
                    <Image boxSixe={'150px'} objectFit={'cover'} src={Logo} alt={'Little Lemon logo'}></Image>
                </Box>
                <nav>
                    <UnorderedList styleType={'none'}>
                        <HStack gap={6} fontWeight={'bold'} color={"Dark"}>
                            <ListItem><Link to={"/"}>Home</Link></ListItem>
                            <ListItem><Link to={"/"}>About</Link></ListItem>
                            <ListItem><Link to={"/"}>Menu</Link></ListItem>
                            <ListItem><Link to={"/reservations"}>Reservations</Link></ListItem>
                            <ListItem><Link to={"/"}>Order Online</Link></ListItem>
                            <ListItem><Link to={"/"}>Login</Link></ListItem>
                        </HStack>
                    </UnorderedList>
                </nav>
            </HStack>

        </header>

    )
}

export default Navbar;