import { ReactNode } from "react";

export interface IExpense {
    id: any,
    name: string;
    cost: number;
  }

export interface IExpensesContext {
  expenses: IExpense[];
  addExpenses: (expenses: IExpense) => void;
  deleteExpenses: (expenses: IExpense) => void;
}

export interface IExpensesProviderProps{
    children: ReactNode;
}