import styled from "styled-components";
import { Color } from "../../ui/colors";

const Description = styled.p`
  width: 220px;
`;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  color: ${Color.PrimaryGray};
  border-bottom: 2px solid #CCD5FF;
  padding: 13px 20px;
  height: 50px;
`;

export { Description, Wrapper};