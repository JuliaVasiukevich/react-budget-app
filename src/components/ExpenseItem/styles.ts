import styled from "styled-components";
import { Color } from "../../ui/colors";
import closeButton from "./../../assets/closeButton.svg"

const Description = styled.p`
  
`;
const CloseButton = styled.button`
  background-image: url(${closeButton});
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  color: ${Color.PrimaryGray};
  border-bottom: 2px solid #CCD5FF;
  padding: 13px 20px;
  height: 50px;
`;

export { Description, CloseButton, Wrapper};