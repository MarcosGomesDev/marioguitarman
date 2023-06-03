import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      list-style: none;
      text-decoration: none;
  }
  body {
    background: #000;
    font-family: 'Inter', 'Barlow', 'Poppins', sans-serif;

    ::-webkit-scrollbar {
        background-color: rgb(16, 16, 16);
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ff4040;
        border-radius: 25px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #ff0000; 
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media (max-width: 430px) {
    html {
        font-size: 60%;
    }
  }
`;
