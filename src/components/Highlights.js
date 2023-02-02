import { HStack, Heading, Box, Button } from "@chakra-ui/react";
import menusData from "../data/menusData";
import SaladCard from "./SaladCard";

const Highlights = () => {
  return (
    <Box w={"860px"} m={"4rem auto 8rem auto"}>
      <HStack spacing={2} justifyContent={"space-between"} mb={"4rem"}>
        <Heading as={"h2"}>This weeks specials!</Heading>
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
        gridTemplateColumns={"repeat(3, minmax(0,1fr))"}
        gridGap={4}
      >
        {menusData.map((menu) => {
          return (
            <SaladCard
              key={menu.getImageSrc()}
              name={menu.name}
              imageSrc={menu.price}
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
