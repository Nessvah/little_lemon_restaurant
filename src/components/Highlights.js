import { HStack, Heading, Box, Button, grid } from "@chakra-ui/react";
import menusData from "../data/menusData";
import SaladCard from "./SaladCard";

const Highlights = () => {
  return (
    <Box maxW={"860px"} m={"4rem 2rem 8rem 2rem"}>
      <HStack
        spacing={2}
        flexDir={{ sm: "column", md: "row" }}
        justifyContent={"space-between"}
        mb={"4rem"}
      >
        <Heading
          as={"h2"}
          fontWeight={"regular"}
          fontSize={{ sm: 30, lg: 40 }}
          marginBottom={{ sm: "1rem", md: "0" }}
        >
          This weeks specials!
        </Heading>
        <Button
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
          Online Menu
        </Button>
      </HStack>

      <Box
        display={"grid"}
        gridTemplateColumns={{
          sm: "minmax(0,1fr)",
          md: "repeat(3, minmax(0,1fr))",
        }}
        gridGap={{sm: 10, md: 6}}
      >
        {menusData.map((menu) => {
          return (
            <SaladCard
              key={menu.getImageSrc()}
              name={menu.name}
              imageSrc={menu.getImageSrc()}
              description={menu.description}
              delivery={menu.delivery}
              price={menu.price}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Highlights;
