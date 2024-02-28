import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FullScreen from "./FullScreen";
import Img from "../images/restauranfood2.webp";

const Hero = () => {
  // create navigation through the button element
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/reservations`;
    navigate(path);
  };
  return (
    <header>
      <FullScreen>
        <HStack
          position={"relative"}
          maxW={"860px"}
          flexDirection={{ sm: "column", md: "column" }}
        >
          <VStack
            w={{ sm: "70%", lg: "40%" }}
            m={{ sm: "2rem auto", lg: "2rem auto 2rem 0" }}
            alignItems={"flex-start"}
            gap={"2rem"}
          >
            <Stack direction={"column"}>
              {/*Find a way to get this two headings closer to each other*/}
              <Heading
                as={"h1"}
                fontWeight={"regular"}
                color={"Yellow"}
                fontSize={{ sm: 45, md: 54, lg: 64 }}
              >
                Little Lemon
              </Heading>
              <Heading
                as={"h2"}
                fontWeight={"regular"}
                fontSize={{ sm: 32, md: 40 }}
                mt={0}
              >
                Chicago
              </Heading>
            </Stack>

            <Text
              fontWeight={"extrabold"}
              fontSize={{ sm: 18, md: 20 }}
              mt={32}
            >
              We are a family owned Meditarrean restaurant, focused on
              traditional recipes served with a modern Twist.
            </Text>

            {/* change color for focus outline */}
            <Button
              onClick={routeChange}
              bg={"Yellow"}
              fontSize={18}
              color={"Dark"}
              fontWeight={"regular"}
              _hover={{ bg: "#FEE361" }}
              _active={{
                bg: "#DBB602",
                transform: "scale(0.98)",
                borderColor: "Green",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(251, 218, 187, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Reserve a table
            </Button>
          </VStack>
          <Image
            h={"380px"}
            w={{ sm: "80%", md: "80%", lg: "33%" }}
            objectFit="cover"
            borderRadius={"16"}
            src={Img}
            alt="Chef at restaurant holding dish"
            position={{ md: "", lg: "absolute" }}
            marginBottom={{ sm: "16px !important", md: 0 }}
            top={"60px"}
            right={0}
          />
        </HStack>
      </FullScreen>
    </header>
  );
};

export default Hero;
