import FullScreen from "./FullScreen";
import { Box, Heading, VStack } from "@chakra-ui/react";
import testimonialData from "../data/testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <FullScreen>
      <VStack w={"860px"} m={"4rem auto 8rem auto"}>
        <Heading
          as={"h2"}
          mb={"4rem"}
          color={"Yellow"}
          fontSize={"40"}
          fontWeight={"regular"}
        >
          Testimonials
        </Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(4, minmax(0,1fr))"}
          gridGap={4}
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
