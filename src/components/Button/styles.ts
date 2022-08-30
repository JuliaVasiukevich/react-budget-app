import { Color } from "./../../ui/colors";
import styled from "styled-components";
import closeButton from "./../../assets/closeButton.svg"

const ButtonStyled = styled.button`
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

const HeaderButton = styled(ButtonStyled)<{ $headerButton: boolean}>`
  padding-block: 10px;
  background-color: ${Color.White};
  font-size: 14px;
  width: 85px;
  margin-bottom: 0;
  color: black;
`;

const DeleteButton = styled.button<{ $deleteButton: boolean}>`
  background: none;
  background-image: url(${closeButton});
  background-size: 100%;
  background-repeat:no-repeat;
  margin-left: 20px;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export { ButtonStyled, HeaderButton, DeleteButton };
