import { createContext, FC, useContext, useState } from "react";
import { IBudgetContext, IBudgetProviderProps } from "./intex";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useContextBudgetValue = () => {
  const [BudgetContext, setBudgetContext] = useState<IBudgetContext>({
    budget: 0,  
    setBudget: (newBudget: number) => {
      setBudgetContext((ctx: IBudgetContext) => ({ ...ctx, budget: newBudget }));
    },
  });
  return BudgetContext;
};

export const useBudgetContext = () =>
  useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvder: FC<IBudgetProviderProps> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={useContextBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
