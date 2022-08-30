import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Description, Wrapper } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: any;
}
export const ExpenseItem = ({ name, cost, id }: IProps) => {
  const { deleteExpenses } = useExpensesContext();

  const handleClick = () => {
    deleteExpenses(id);
  };

  return (
    <div>
      <Wrapper>
        <Description> {name} </Description>
        <Badge cost={cost} />
        <Button onClick={handleClick} deleteButton={true} type="button"/>
      </Wrapper>
    </div>
  );
};
