import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { RemainingStringStyled, RemainingStyled } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remain =
  budget -
  expenses.reduce((sumExpenses, expense) => {
    return (sumExpenses += +expense.cost);
  }, 0);
  
  const isOver = (remain >=0)

  return (
    <>
    <RemainingStyled $isOver={isOver}>
      <RemainingStringStyled>
        {isOver  && ( `Remaining: ${currency}${remain} ` ) || ( `Overspending: ${currency}${remain*(-1)} ` )} 
      </RemainingStringStyled>
    </RemainingStyled>
    </>
  );
};
