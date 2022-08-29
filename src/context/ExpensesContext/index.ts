import { ReactNode } from "react";

export interface IExpense {
    id: number,
    name: string;
    cost: number;
  }

export interface IExpensesContext {
  expenses: IExpense[];
  setExpenses: (Expenses: IExpense) => void;
}

export interface IExpensesProviderProps{
    children: ReactNode;
}