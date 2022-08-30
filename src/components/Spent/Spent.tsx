import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { SpentStringStyled, SpentStyled } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spent =
    expenses.reduce((sumExpenses, expense) => {
      return (sumExpenses += +expense.cost);
    }, 0);

  return (
    <SpentStyled>
      <SpentStringStyled>
        Spent so far: {currency}{spent} 
      </SpentStringStyled>
    </SpentStyled>
  );
};
