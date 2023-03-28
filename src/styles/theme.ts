import { theme, extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    ...theme,
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 500,
        bold: 700,
    },
    colors: {
        ...theme.colors,
        primary: {
            ...theme.colors.purple,
            500: "#8257e5",
        },
        secondary: {
            ...theme.colors.gray,
            300: "#e1e1e6",
            600: "#29292e",
            700: "#202024",
            800: "#121214",
        },
    },
});

export default customTheme;