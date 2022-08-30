import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledForm = styled.form``;

const Error = styled.span`
  color: ${Color.Red};
  position: absolute;
  margin-top: -30px;
`;

export { StyledForm, Error };
