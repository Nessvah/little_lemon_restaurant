import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? "white" : "black"}

        >
            <VStack maxWidth="1300px" minHeight="fit-content" {...boxProps}>
                {children}
            </VStack>
        </VStack>
    );
};

export default FullScreenSection;