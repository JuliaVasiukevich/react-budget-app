import React, { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export const ExpenseList = ({ filterQuery }: any) => {
  const { expenses } = useExpensesContext();

  return (
    <div>
      {expenses
        .filter((item) => {
          return (
            !filterQuery ||
            item.name.toLowerCase().includes(filterQuery.toLowerCase())
          );
        })
        .map((expense) => {
          return (
            <ExpenseItem
              name={expense.name}
              cost={expense.cost}
              id={expense.id}
            />
          );
        })}
    </div>
  );
};
