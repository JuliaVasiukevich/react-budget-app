import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { StyledBadge } from "./styles";

interface IProps {
    cost: number
}

export const Badge = ({cost}: IProps) => {
  const { currency, setCurrency } = useCurrencyContext();

  return <StyledBadge> {currency}{cost}</StyledBadge>;
};
