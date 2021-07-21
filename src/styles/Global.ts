import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./theme"

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
* {
    box-sizing: "border-box";
    margin: 0;
    padding: 0;
}

body{
    font-family: Montserrat;
}

a{
    text-decoration:none;
}

`

export default GlobalStyle