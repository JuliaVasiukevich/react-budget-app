import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { SpentStringStyled, SpentStyled } from "./styles";

export const Spent = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  return (
    <SpentStyled>
      <SpentStringStyled>
        Spent so far: {budget} {currency}
      </SpentStringStyled>
    </SpentStyled>
  );
};
