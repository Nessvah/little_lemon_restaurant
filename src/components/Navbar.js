// Navbar.js
import { useState } from "react";
import {
  Flex,
  Spacer,
  Image,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";
import Logo from "../images/Logo.svg";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useState(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      bg={"white"}
      className="header"
      maxW={"860px"}
      as="nav"
      margin={"0 auto"}
      justifyContent={"space-between"}
      alignItems={"center"}
      align="center"
      justify="space-between"
      padding="1rem"
      color={"Dark"}
    >
      <Flex align="center">
        <Image
          width={"150px"}
          objectFit={"cover"}
          src={Logo}
          alt={"Little Lemon logo"}
        />
      </Flex>

      {isMobile ? (
        <FaHamburger
          aria-label="Open Menu"
          size={30}
          cursor={"pointer"}
          color={"#333333"}
          onClick={onToggle}
          display={{ md: "none" }}
        />
      ) : (
        <Spacer />
      )}

      {isMobile ? (
        <VStack
          pos="absolute"
          top="90px"
          left={0}
          right={0}
          bg="whitesmoke"
          fontWeight={"bold"}
          padding={"1rem 0"}
          color={"Dark"}
          zIndex={10}
          display={isOpen ? "flex" : "none"}
          flexDirection="column"
          textAlign="center"
        >
          <Link to={"/"}> Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Menu</Link>
          <Link to={"/reservations"}>Reservations</Link>
          <Link href="#">Order Online</Link>
          <Link href="#">Login</Link>
        </VStack>
      ) : (
        <Flex align="center" gap={6} fontWeight={"bold"} color={"Dark"}>
          <Link to={"/"}> Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Menu</Link>
          <Link to={"/reservations"}>Reservations</Link>
          <Link href="#">Order Online</Link>
          <Link href="#">Login</Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
