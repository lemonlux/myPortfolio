import createGlobalStyle from "@emotion/styled";

interface GlobalStylesProps{
props: string,
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`


        *{
           box-sizing: "border-box";
           color:  "${props => props.theme.palette.color.main}";
         }
         html, body {
           height: "100vh";
           font-family: 'Onest';
           width: "100vw";
           background: "${props=> props.theme.palette.background.main}";
           padding: 0;
           margin: 0;
         }
         p {
           font-weight: 300;
         }
          span{
           color: "${props=> props.theme.palette.color.enhance}";
           font-weight: 600;
         };
         a: {
           color: "inherit";
           text-decoration: "none";
         };




`