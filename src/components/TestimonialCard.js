import { Heading, HStack, Avatar, Text, VStack, Image } from "@chakra-ui/react";
import star from "../images/ratingstar.svg";

const TestimonialCard = ({ name, imageSrc, comment, ratings }) => {
  const renderRatings = (ratings) => {
    let stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(<Image key={i} src={star} boxSize={"20px"} alt={""}></Image>);
    }
    return stars;
  };
  return (
    <VStack
      color="Dark"
      backgroundColor={"White"}
      border={"none"}
      cursor="pointer"
      borderRadius={16}
    >
      <VStack
        spacing={4}
        p={3}
        alignItems={{ sm: "center", md: "flex-start" }}
        width={"100%"}
        cursor={"default"}
      >
        <Heading as="h3" fontSize={"18"} fontFamily={"Karla"}>
          {name}
        </Heading>
        <HStack p>
          <Avatar
            src={imageSrc}
            width={"65px"}
            height={"65px"}
            objectFit={"cover"}
            alt={"profile picture of costumer"}
          />
          <Text hyphens={"auto"} marginTop={{ sm: "1rem !important", md: "0" }}>
            {comment}
          </Text>
        </HStack>
        <HStack
          display="flex"
          gap={8}
          justifyContent="flex-start"
          width={"100%"}
          pt={2}
          pb={2}
          flexDir={{sm: "column", md: "row"}}
        >
          <HStack spacing={1} >{renderRatings(ratings)}</HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default TestimonialCard;
