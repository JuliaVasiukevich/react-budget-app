import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { RemainingStringStyled, RemainingStyled } from "./styles";

export const Remaining = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();

  return (
    <RemainingStyled>
      <RemainingStringStyled>
        Remaining: {budget} {currency}
      </RemainingStringStyled>
    </RemainingStyled>
  );
};
