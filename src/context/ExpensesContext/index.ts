import { ReactNode } from "react";

export interface IExpense {
    id: string,
    name: string;
    cost: number;
  }

export interface IExpensesContext {
  expenses: IExpense[];
  addExpenses: (expenses: IExpense) => void;
  deleteExpenses: (expensesId: string) => void;
}

export interface IExpensesProviderProps{
    children: ReactNode;
}