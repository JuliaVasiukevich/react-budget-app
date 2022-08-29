import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export type IFormValues = {
  name: string;
  cost: number;
};

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<IFormValues>();
  const { expenses, addExpenses } = useExpensesContext();


  const onSubmit: SubmitHandler<IFormValues> = (formValues) => {
    const newExpense = {
      ...formValues,
      id: uuidv4(),
    };
    console.log(newExpense);
    addExpenses(newExpense);
    console.log(expenses)
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <Input
        placeholder="enter name"
        type="text"
        label="name"
        register={register}
        required
      />
      <Input
        placeholder="enter cost"
        type="number"
        label="cost"
        register={register}
        required
      />
      <Button text="Done" type="submit" />
    </StyledForm>
  );
};

