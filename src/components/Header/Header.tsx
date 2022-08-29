import React, { useState } from "react";
import { Currency } from "../../config/currency";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { Select1 } from "../Select/Select";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";

export interface IOption {
    value: any,
    label: string
}

export const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const Header = () => {
    const [currencyValue, setCurrencyValue] = useState<string>(options[0].value);
  return (
    <>
      <Title text="Budget" />
      <Select1 options={options} onChange={setCurrencyValue} value={currencyValue}/>
      <Budget />
      <Remaining />
      <Spent />
    </>
  );
};
