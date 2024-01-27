import createGlobalStyle from "@emotion/styled";
import { theme } from "../context/theme";


const GlobalStyles = createGlobalStyle`


        *{
           box-sizing: "border-box";
           color:  ${({theme})=>theme.palette.color.main};
         }
         html, body {
           height: "100vh";
           font-family: 'Onest';
           width: "100vw";
           background: ${({theme})=>theme.palette.background.main};
           padding: 0;
           margin: 0;
         }
         p {
           font-weight: 300;
         }
          span{
           color: ${({theme})=>theme.palette.color.enhance};
           font-weight: 600;
         };

         ::-webkit-scrollbar {
           width:  ${({theme})=>theme.spacing(0.75)};
           background: ${({theme})=> theme.palette.background.main};
         };
         ::-webkit-scrollbar-thumb {
           width: ${({theme})=> theme.spacing(0.75)};
           background: ${({theme})=> theme.palette.background.main};
           border-radius:  ${({theme})=>theme.spacing(0.5)};
         };
         a: {
           color: "inherit";
           text-decoration: "none";
         };




`
