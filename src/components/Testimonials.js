import FullScreen from "./FullScreen";
import { Box, Heading, VStack } from "@chakra-ui/react";
import testimonialData from "../data/testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <FullScreen>
      <VStack maxW={"860px"} m={"4rem 2rem 8rem 2rem"}>
        <Heading
          as={"h2"}
          mb={{ sm: "1.5rem", md: "4rem" }}
          color={"Yellow"}
          fontSize={{ sm: "30", md: "40" }}
          fontWeight={"regular"}
        >
          Testimonials
        </Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            sm: "minmax(0,1fr)",
            md: "repeat(4, minmax(0,1fr))",
          }}
          gridGap={{sm: 8, md:4}}
        >
          {testimonialData.map((testimonial) => {
            return (
              <TestimonialCard
                key={testimonial.getImageSrc()}
                name={testimonial.name}
                imageSrc={testimonial.getImageSrc()}
                comment={testimonial.comment}
                ratings={testimonial.ratings}
              />
            );
          })}
        </Box>
      </VStack>
    </FullScreen>
  );
};

export default Testimonials;
