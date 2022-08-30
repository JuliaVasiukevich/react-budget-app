import { createContext, FC, useContext, useState } from "react";
import { ICurrencyContext, ICurrencyProviderProps } from ".";
import { Currency } from "../../config/currency";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useContextCurrencyValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (newCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
    },
  });

  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvder: FC<ICurrencyProviderProps> = ({
  children,
}) => {
  return (
    <CurrencyContext.Provider value={useContextCurrencyValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
