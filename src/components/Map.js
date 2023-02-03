import { VStack, Image } from "@chakra-ui/react";
import Pinpoint from "../images/pinpoint.svg";
import mapstreet from "../images/Map.jpg";

const Map = () => {
  return (
    <VStack h={550} position="relative">
      <Image src={mapstreet} objectFit={"cover"} h={"100%"} w={"100vw"} />
      <Image
        src={Pinpoint}
        boxSize={"72px"}
        zIndex={5}
        position={"absolute"}
        top={"283px"}
        right={"383px"}
      />
    </VStack>
  );
};

export default Map;
