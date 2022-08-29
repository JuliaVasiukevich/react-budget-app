import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { CloseButton, Description } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: any;
}
export const ExpenseItem = ({ name, cost, id }: IProps) => {
  const { deleteExpenses } = useExpensesContext();

  const handleClick = () => {
        deleteExpenses(id);
  }

  return (
    <div>
      <Description> {name} </Description>
      <Badge cost={cost} />
      <CloseButton
        onClick={handleClick}>
        Del
      </CloseButton>
    </div>
  );
};
