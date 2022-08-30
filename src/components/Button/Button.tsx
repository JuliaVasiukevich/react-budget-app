import { ButtonStyled, DeleteButton, HeaderButton } from "./styles";

interface IProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  headerButton?: boolean;
  deleteButton?: boolean;
}

export const Button = ({ text, onClick, type, headerButton, deleteButton }: IProps) => {

  if (headerButton){
     return <HeaderButton onClick={onClick} type={type} $headerButton={headerButton}>{text}</HeaderButton>;
  } else if (deleteButton) {
    return <DeleteButton onClick={onClick} type={type} $deleteButton={deleteButton}>{text}</DeleteButton>;
  } else {
    return <ButtonStyled onClick={onClick} type={type}>{text}</ButtonStyled>;
  }
 
};
