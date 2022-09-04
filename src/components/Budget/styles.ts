import { Color } from "./../../ui/colors";
import styled from "styled-components";

const BudgetStringStyled = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const BudgetStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 20px;
  background-color: ${Color.Blue};
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding-block: 10px;
  background-color: ${Color.White};
  font-size: 14px;
  width: 85px;
  margin-bottom: 0;
  color: black;
`;

export { BudgetStringStyled, BudgetStyled, Button };
