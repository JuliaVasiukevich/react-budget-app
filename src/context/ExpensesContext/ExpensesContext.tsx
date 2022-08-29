import { createContext, FC, useContext, useState } from "react";
import { IExpensesContext, IExpensesProviderProps, IExpense } from ".";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useContextBudgetValue = () => {
  const [ExpensesContext, setExpensesContext] = useState<IExpensesContext>({
    expenses: [],
    setExpenses: (newExpenses) => {
    //   setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
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
    <ExpensesContext.Provider value={useContextBudgetValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
