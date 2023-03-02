import { Link } from "react-router-dom";
import { HStack, UnorderedList, ListItem, Box, Image } from "@chakra-ui/react";
import Logo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <header className={"header"}>
      <HStack
        maxW={"860px"}
        margin={"0 auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"100%"}
      >
        <Box>
          <Image
            width={"150px"}
            objectFit={"cover"}
            src={Logo}
            alt={"Little Lemon logo"}
          ></Image>
        </Box>
        <nav>
          <UnorderedList styleType={"none"}>
            <HStack gap={6} fontWeight={"bold"} color={"Dark"}>
              <ListItem>
                <p> Home</p>
              </ListItem>
              <ListItem>
                <p>About</p>
              </ListItem>
              <ListItem>
                <p>Menu</p>
              </ListItem>
              <ListItem>
                <Link to={"/reservations"}>Reservations</Link>
              </ListItem>
              <ListItem>
                <p>Order Online</p>
              </ListItem>
              <ListItem>
                <p>Login</p>
              </ListItem>
            </HStack>
          </UnorderedList>
        </nav>
      </HStack>
    </header>
  );
};

export default Navbar;
