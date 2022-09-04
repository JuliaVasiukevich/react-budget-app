import { createContext, FC, useContext, useState } from "react";
import { IExpensesContext, IExpensesProviderProps } from ".";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useContextExpensesValue = () => {
  const [ExpensesContext, setExpensesContext] = useState<IExpensesContext>({
    expenses: [],
    addExpense: (newExpenses) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpenses],
      }));
    },
    deleteExpense: (expenseIdForRemove) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses].filter((expense) => expense.id !== expenseIdForRemove),
      }))
    },
  });

  return ExpensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvder: FC<IExpensesProviderProps> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useContextExpensesValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
