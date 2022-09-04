import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { Description, Wrapper, Button } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: string;
}
export const ExpenseItem = ({ name, cost, id }: IProps) => {
  const { deleteExpense } = useExpensesContext();

  const handleClick = () => {
    deleteExpense(id);
  };

  return (
    <>
      <Wrapper>
        <Description> {name} </Description>
        <Badge cost={cost} />
        <Button onClick={handleClick}/>
      </Wrapper>
    </>
  );
};
