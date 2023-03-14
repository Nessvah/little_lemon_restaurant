import Map from "../components/Map";
import { Image } from "@chakra-ui/react";
import Restaurant from "../images/restaurant.webp";
import BookingPage from "../components/BookingPage";

const Reservations = () => {
  return (
    <>
      <Image
        src={Restaurant}
        w={"100vw"}
        h={360}
        objectFit={"cover"}
        alt="Image of little lemon terrace"
      />
      <BookingPage />
      <Map />
    </>
  );
};

export default Reservations;
