import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledForm = styled.form``;

const Error = styled.span`
  color: ${Color.Red};
  position: absolute;
  margin-top: -30px;
`;

const Button = styled.button`
   display: inline-block;
   border: none;
   border-radius: 10px;
   padding-block: 15px;
   background-color: ${Color.Primary};
   font-size: 16px;
   width: 100%;
   margin-bottom: 30px;
   text-align: center;
   cursor: pointer;
   color: ${Color.White}
 `;

export { StyledForm, Error, Button };
