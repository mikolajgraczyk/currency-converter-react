import { createGlobalStyle } from "styled-components";
import background from "./background-image.jpg";

export const GlobalStyle = createGlobalStyle`
        html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: 'Rubik', sans-serif;
    padding: 10px;
    background-image: url(${background});
    background-attachment: fixed;
    background-repeat: repeat;
    background-size: cover;
    }
`;