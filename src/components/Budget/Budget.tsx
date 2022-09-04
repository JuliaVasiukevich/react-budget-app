import React from "react";
import { Input } from "../Input/Input";
import { BudgetStringStyled, BudgetStyled, Button } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { useToggle } from "../../hooks/useToggle";
import { useInput } from "../../hooks/useInput";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Budget = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEdit, toggleIsEdit] = useToggle();
  const newBudget = useInput();

  const handleSaveClick = () => {
    setBudget(+newBudget.value);
    toggleIsEdit();
  };

  const handleEditClick = () => {
    toggleIsEdit();
  };

  return (
    <BudgetStyled>
      {isEdit ? (
        <>
          <Input
            type="number"
            placeholder="Enter  budget ..."
            budgetInput={true}
            {...newBudget}
          />
          <Button onClick={handleSaveClick}>Save</Button>
        </>
      ) : (
        <>
            <BudgetStringStyled>
              Budget: {currency}
              {budget}
            </BudgetStringStyled>
            <Button onClick={handleEditClick}>Edit</Button>
        </>
      )}
    </BudgetStyled>
  );
};
