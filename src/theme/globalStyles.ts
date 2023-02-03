import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, html{
  min-height: 100%;
}

  body {
    margin: 0;
    padding: 0;
    background: rgb(255,200,128);
    background: linear-gradient(71deg,rgba(255,200,128,1) 20%,rgba(168,113,98,1) 46%,rgba(61,96,97,1) 65%,rgba(30,62,67,1) 95%);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    position: relative;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
