import { VStack } from "@chakra-ui/react";

const FullScreen = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack bg={"Green"}>
      <VStack
        width={"100%"}
        maxWidth="860px"
        minHeight="fit-content"
        {...boxProps}
        color={"White"}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreen;
