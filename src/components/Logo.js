import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        width={"150px"}
        objectFit={"cover"}
        src={Logo}
        alt={"Little Lemon logo"}
      ></Image>
    </Box>
  );
}
