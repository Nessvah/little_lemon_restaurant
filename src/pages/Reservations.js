import Map from "../components/Map";

import { Image } from "@chakra-ui/react";
import Restaurant from "../images/restaurant.jpg";

const Reservations = () => {
  return (
    <>
      <Image src={Restaurant} w={"100vw"} h={360} objectFit={"cover"} />
      <Map />
    </>
  );
};

export default Reservations;
