import { createGlobalStyle } from "styled-components";

import BarlowRegular from "../assets/fonts/Barlow-Regular.ttf";
import BarlowBold from "../assets/fonts/Barlow-Bold.ttf";
import BarlowSemiBold from "../assets/fonts/Barlow-SemiBold.ttf";

import InterRegular from "../assets/fonts/Inter-Regular.ttf";
import InterSemiBold from "../assets/fonts/Inter-SemiBold.ttf";
import InterBold from "../assets/fonts/Inter-Bold.ttf";
import InterBlack from "../assets/fonts/Inter-Black.ttf";

import PoppinsThin from "../assets/fonts/Poppins-Thin.ttf";
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'BarlowRegular';
        font-weight: 400;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${BarlowRegular}') format('truetype');
    }

    @font-face {
        font-family: 'BarlowSemiBold';
        font-weight: 600;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${BarlowSemiBold}') format('truetype');
    }

    @font-face {
        font-family: 'BarlowBold';
        font-weight: 700;
        font-display: 'swap';
        font-style: 'bold';
        src: url('${BarlowBold}') format('truetype');
    }

    @font-face {
        font-family: 'InterRegular';
        font-weight: 400;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterRegular}') format('truetype');
    }

    @font-face {
        font-family: 'InterSemiBold';
        font-weight: 600;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterSemiBold}') format('truetype');
    }

    @font-face {
        font-family: 'InterBold';
        font-weight: 700;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterBold}') format('truetype');
    }

    @font-face {
        font-family: 'InterBlack';
        font-weight: 900;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterBlack}') format('truetype');
    }

    @font-face {
        font-family: 'PoppinsThin';
        font-weight: 100;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${PoppinsThin}') format('truetype');
    }

    @font-face {
        font-family: 'PoppinsLight';
        font-weight: 300;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${PoppinsLight}') format('truetype');
    }

    @font-face {
        font-family: 'PoppinsRegular';
        font-weight: 400;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${PoppinsRegular}') format('truetype');
    }

    @font-face {
        font-family: 'PoppinsSemiBold';
        font-weight: 600;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${PoppinsSemiBold}') format('truetype');
    }

    @font-face {
        font-family: 'PoppinsBold';
        font-weight: 700;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${PoppinsBold}') format('truetype');
    }

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
        font-display: swap;
        scroll-behavior: smooth;
    }

    @media (max-width: 430px) {
        html {
            font-size: 60%;
            font-display: swap;
        }
    }
`;
