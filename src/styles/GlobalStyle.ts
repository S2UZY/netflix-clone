import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:${(props) => props.theme.white.darker};
  line-height: 1.2;
  background-color: black;
}
`;
