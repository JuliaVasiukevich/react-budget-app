import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm, Error } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { FormValuesKeys, IFormValues } from "../../config/formValues";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  const { addExpenses } = useExpensesContext();

  const onSubmit: SubmitHandler<IFormValues> = (formValues) => {
    const newExpense = {
      ...formValues,
      id: uuidv4(),
    };
    addExpenses(newExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <Input
        placeholder="enter name"
        type="text"
        label={FormValuesKeys.NAME}
        register={register}
        rules={{
          required: true,
          maxLength: {
            value: 15,
            message: "Name must be less than 15 characters long",
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "Name must contain only letters",
          },
        }}
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <Input
        placeholder="enter cost"
        type="text"
        label={FormValuesKeys.COST}
        register={register}
        rules={{
          required: true,
          maxLength: {
            value: 6,
            message: "Cost must be less than 6 characters long",
          },
          pattern: {
            value: /[0-9]/,
            message: "Cost must contain only numbers",
          },
        }}
      />
      {errors.cost && <Error>{errors.cost.message}</Error>}

      <Button text="Done" type="submit" />
    </StyledForm>
  );
};
