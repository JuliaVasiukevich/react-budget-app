import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { Wrapper } from "./styles";

export const ExpenseList = ({ filterQuery }: any) => {
  const { expenses } = useExpensesContext();

  return (
    <Wrapper>
      {expenses
        .filter((item) => {
          return (
            !filterQuery ||
            item.name.toLowerCase().includes(filterQuery.toLowerCase())
          );
        })
        .map((expense) => {
          return (
            <ExpenseItem
              name={expense.name}
              cost={expense.cost}
              id={expense.id}
            />
          );
        }) 
      }
    </Wrapper>
  );
};
