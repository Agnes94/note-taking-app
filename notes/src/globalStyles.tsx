import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* font: inherit; */
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  /* body {
    line-height: 1;
  } */

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html {
    font-size:  62.5%;
    min-height: 100vh;
  }

  body {
    background:       white;
    background-color: white;
    min-height:       100vh;
  }

  * {
  font-family: 'Inter', sans-serif;
  }
  strong {
    font-weight: 600;
  }
  html {
      width: 100%;
      height: 100%;
      display: table;
  }

  body {
      width: 100%;
      display: table-cell;
  }

  html, body {
      margin: 0;
      padding: 0;
  }
  #root {
    height: 100vh; /* changed from 100% to 100vh. Did this break something? */
  }
`;
