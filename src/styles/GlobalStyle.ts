import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.colors.Background};
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    :root {

        // Theme 1
        // Background
        --dark-blue: hsl(222, 26%, 31%); //Background
        --very-dark-blue: hsl(223, 31%, 20%); // Background keys
        --very-dark-desaturated-blue: hsl(224, 36%, 15%); // Background input
        
        // Keys
        --desaturated-dark-blue: hsl(225, 21%, 49%); // Tecla
        --desaturated-dark-blue-2: hsl(224, 28%, 35%); // Sombra

        --red: hsl(6, 63%, 50%); // Tecla
        --dark-red: hsl(6, 70%, 34%); // Sombra

        --light-grayish-orange: hsl(30, 25%, 89%); // Tecla
        --grayish-orange: hsl(28, 16%, 65%); // Sombra

        // Text
        --white: hsl(0, 0%, 100%);
        --grayish-blue: hsl(221, 14%, 31%); // Texto


        // Theme 2
        // Background
        --light-gray: hsl(0, 0%, 90%);
        --grayish-red: hsl(0, 5%, 81%);
        -very-light-gray: hsl(0, 0%, 93%);

        // Keys
        --dark-cyan: hsl(185, 42%, 37%);
        --very-dark-cyan: hsl(185, 58%, 25%);

        --orange: hsl(25, 98%, 40%);
        --dark-orange: hsl(25, 99%, 27%);

        --light-yellow: hsl(45, 7%, 89%);
        --dark-grayish-orange: hsl(35, 11%, 61%);

        // Text
        --very-dark-yellow: hsl(60, 10%, 19%);
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'League Spartan', sans-serif;
        font-weight: 700;
    }
    
`