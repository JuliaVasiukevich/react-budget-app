import { ReactNode } from "react";

export interface IExpense {
    id: string,
    name: string;
    cost: number;
  }

export interface IExpensesContext {
  expenses: IExpense[];
  addExpense: (expenses: IExpense) => void;
  deleteExpense: (expensesId: string) => void;
}

export interface IExpensesProviderProps{
    children: ReactNode;
}