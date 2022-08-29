import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";

interface IProps {
    cost: number
}

export const Badge = ({cost}: IProps) => {
  const { currency, setCurrency } = useCurrencyContext();

  return <div> {currency} {cost}</div>;
};
