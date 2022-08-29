import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
type ExpensesFormValue = {
  name: string;
  cost: number;
};

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<ExpensesFormValue>();

  const onSubmit: SubmitHandler<ExpensesFormValue> = (pep) => {
    console.log(pep);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <Input
        placeholder="enter name"
        type="text"
      />
      <Input
        placeholder="enter cost"
        type="number"
      />
      <Button text="Done" type="submit" />
    </StyledForm>
  );
};
