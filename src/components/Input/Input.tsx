import { ChangeEvent } from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";
import { InputStyled } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, value, onChange}: IProps) => {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
