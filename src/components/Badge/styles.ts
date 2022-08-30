import { Color } from "./../../ui/colors";
import styled from "styled-components";

const StyledBadge = styled.div`
  width: 56px;
  height: 21px;
  text-align: center;
  background-color: ${Color.Primary};
  border-radius: 10px;
  color: ${Color.White};
  font-size: 12px;
`;

export { StyledBadge };
