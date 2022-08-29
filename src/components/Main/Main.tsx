import useDebounce from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";

export const Main = () => {
  const searchFilter = useInput();
  const debouncedValue = useDebounce(searchFilter.value, 1000);

  return (
    <>
      <Title text="Expenses" />
      <Input {...searchFilter} placeholder="search..."/>
      <ExpenseList filterQuery={debouncedValue} />
    </>
  );
};
