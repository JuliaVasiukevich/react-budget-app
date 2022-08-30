import { Color } from "./../../ui/colors";
import styled from "styled-components";

const SpentStringStyled = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const SpentStyled = styled.div`
  padding: 32px 20px;
  border-radius: 10px;
  background-color: ${Color.LightPurple};
`;

export { SpentStringStyled, SpentStyled };
