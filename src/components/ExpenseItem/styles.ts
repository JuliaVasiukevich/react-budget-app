import styled from "styled-components";
import { Color } from "../../ui/colors";
import closeButton from "./../../assets/icons/close.svg"

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

const Button = styled.button`
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

export { Description, Wrapper, Button};