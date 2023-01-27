import { extendTheme, theme as base } from "@chakra-ui/react";

const brand = extendTheme({
    styles: {
        global: {
            body: {
                color: "Dark",
                bg: 'white'
            },



            // styles for the `a`
            a: {
                color: "Dark",
                _hover: {
                    textDecoration: "underline",
                },
            },


        },


    },
    fonts: {
        heading: `Markazi Text, ${base.fonts?.heading}`,
        body: `Karla,  ${base.fonts?.body}`,
    },
    colors: {
        Green: "#495E57",
        Yellow: "#F4CE14",
        Salmon: "#EE9972",
        LightSalmon: "#FBDABB",
        White: "#EDEFEE",
        Dark: "#333333"
    },


})

export default brand;