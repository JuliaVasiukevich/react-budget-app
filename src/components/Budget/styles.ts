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

export { BudgetStringStyled, BudgetStyled };
