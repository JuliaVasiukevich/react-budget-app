import { ChangeEvent } from "react";
import {
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";
import { FormValuesKeys, IFormValues } from "../../config/formValues";
import { InputStyled, Wrapper } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: FormValuesKeys;
  register?: UseFormRegister<IFormValues>;
  rules?: IRules;
  budgetInput?: boolean;
}

interface IRules {
  required?: boolean;
  maxLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
}

export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  label,
  register,
  rules,
  budgetInput,
}: IProps) => {
  return (
    <Wrapper>
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        {...(register && label && { ...register(label, { ...rules }) })}
        $budgetInput={!!budgetInput}
      />
    </Wrapper>
  );
};
