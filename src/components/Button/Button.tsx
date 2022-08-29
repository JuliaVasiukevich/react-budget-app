import { ButtonStyled } from "./styles";

interface IProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"
}

export const Button = ({ text, onClick, type }: IProps) => {
  return <ButtonStyled onClick={onClick} type={type}>{text}</ButtonStyled>;
};
