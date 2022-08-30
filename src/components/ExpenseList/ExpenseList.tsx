import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { EmptyWrapper, Wrapper } from "./styles";

interface IProps {
  filterQuery: string
}

export const ExpenseList = ({ filterQuery }: IProps) => {
  const { expenses } = useExpensesContext();
  const filterExpenses = expenses.filter((item) => {
    return (
      !filterQuery ||
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  });
  if (filterExpenses.length) {
    return (
      <Wrapper>
        {filterExpenses.map((expense) => {
          return (
            <ExpenseItem
              name={expense.name}
              cost={expense.cost}
              id={expense.id}
              key={expense.id}
            />
          );
        })}
      </Wrapper>
    );
  } else {
    return <EmptyWrapper>Oooops 🙈</EmptyWrapper>;
  }
};
