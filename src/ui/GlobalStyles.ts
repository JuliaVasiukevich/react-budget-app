import { Color } from "./colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
  font-family: Inter;
  src: url(sansation_light.woff);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
}
`;
