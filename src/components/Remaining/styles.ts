import { Color } from "./../../ui/colors";
import styled from "styled-components";

const RemainingStringStyled = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const RemainingStyled = styled.div<{ $isOver: boolean }>`
  padding: 32px 20px;
  background-color: ${({ $isOver }) =>
  $isOver ? `${Color.LightBlue}` : `${Color.Red}`};
  color: ${({ $isOver }) => ($isOver ? "black" : `${Color.White}`)};
  margin-bottom: 20px;
  border-radius: 10px;
`;

export { RemainingStringStyled, RemainingStyled };
