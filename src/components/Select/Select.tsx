import React from "react";
import { customStyles } from "./styles";
import { IOption, options } from "../Header/Header";
import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrenceContext";
import { Currency } from "../../config/currency";

interface IProps {
  options: IOption[];
  onChange: (currency: string) => void;
  value: string;
}

export const Select1 = ({ value, onChange }: IProps) => {
  const { currency, setCurrency } = useCurrencyContext();

  const getCurrencyValue = () =>
    options.find((currency: IOption) => {
      return currency.value === value;
    });

  const handleCurrency = (currency: SingleValue<IOption>): void => {
    if (currency) {
      onChange(currency.value);
      setCurrency(currency.value);
    }
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      onChange={handleCurrency}
      value={getCurrencyValue()}
      isMulti={false}
      isSearchable={false}
    />
  );
};
