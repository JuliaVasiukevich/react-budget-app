import React from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export const ExpenseList = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {items.map((item) => {
        return <ExpenseItem />;
      })}
    </div>
  );
};
