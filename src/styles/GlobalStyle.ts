import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.colors.Background};
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'League Spartan', sans-serif;
        font-weight: 700;
    }
    
`