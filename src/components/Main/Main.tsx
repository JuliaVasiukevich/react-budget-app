import React from "react";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";

export const Main = () => {
  return (
    <>
      <Title text="Expenses"/>
      <Input />
      <ExpenseList />
    </>
  );
};
