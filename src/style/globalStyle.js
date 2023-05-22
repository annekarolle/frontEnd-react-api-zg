import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-green: #9fbb68;
    --color-dark: #282c34;
    --color-white: white;
    --color-light-grey:#686c78;
    --color-grey: #40444c;
    --color-dark-grey:#36383e;
    --color-error: #c43939;
    --color-transparence:#36383ed4;

    --toastify-z-index: 99999;
    --toastify-color-success: var(--color-green);
    --toastify-color-error: #c43939;
    --toastify-text-color-sucess: #07bc0c;

    font-family: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 0.4rem;

    }
    &::-webkit-scrollbar-track {
      background: var(--color-light-grey);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var(--color-dark-grey);
      border-radius: 0.3rem;
    }
  }

  button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }

`;

export default GlobalStyle;
