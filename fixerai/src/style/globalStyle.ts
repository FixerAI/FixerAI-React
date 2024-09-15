import { createGlobalStyle } from "styled-components";
import "../assets/fonts/Poppins-Regular.ttf";
const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
      font-family: Poppins, sans-serif;
  }

@font-face {
  font-family: Poppins;
  src: url("../assets/fonts/Poppins-Regular.ttf");
}
`;
export default GlobalStyle;
