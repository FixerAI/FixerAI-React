import { createGlobalStyle } from "styled-components";

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
      font-family: "Poppins", sans-serif;
  }
`;
export default GlobalStyle;
