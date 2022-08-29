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

  return (
    <>
    <RemainingStyled>
      <RemainingStringStyled>
        {remain >=0  && ( `Remaining: ${remain} ${currency}` ) || ( `Overspending: ${remain*(-1)} ${currency}` )} 
      </RemainingStringStyled>
    </RemainingStyled>
    </>
  );
};
