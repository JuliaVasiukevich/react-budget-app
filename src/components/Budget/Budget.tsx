import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { BudgetStringStyled, BudgetStyled } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { useToggle } from "../../hooks/useToggle";
import { useInput } from "../../hooks/useInput";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Budget = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEdit, toggleIsEdit] = useToggle();
  const { value, onChange } = useInput();

  const handleSaveClick = () => {
    setBudget(+value);
    toggleIsEdit();
  };

  const handleEditClick = () => {
    toggleIsEdit();
  };

  return (
    <>
      <BudgetStyled>
        {isEdit && (
          <>
            <Input
              type="number"
              placeholder="Enter  budget ..."
              value={value}
              onChange={onChange}
            />
            <Button text="Save" onClick={handleSaveClick} />
          </>
        )}
        {!isEdit && (
          <>
            <BudgetStringStyled>
              Budget: {budget} {currency}
            </BudgetStringStyled>
            <Button text="Edit" onClick={handleEditClick} />
          </>
        )}
      </BudgetStyled>
    </>
  );
};
