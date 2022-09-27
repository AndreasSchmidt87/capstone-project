import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  color: whitesmoke;
}

html,
body {
  background-color: black;
  padding: 0;
  margin: 0;
  font-family: 'Indie Flower', cursive;
}
`;

export default GlobalStyle;
