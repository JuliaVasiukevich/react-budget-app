import { ChangeEvent } from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../Form/Form";
import { InputStyled } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: any,
  register?: UseFormRegister<IFormValues>,
  required?:  boolean
}

export const Input = ({ placeholder, type, value, onChange, label, register, required}: IProps) => {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...register && {...register(label, { required })}}
    />
  );
};
