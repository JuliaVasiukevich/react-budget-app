import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";

export const Badge = () => {
  const { currency, setCurrency } = useCurrencyContext();

  return <div> {currency} 100</div>;
};
