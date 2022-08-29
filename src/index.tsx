import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvder } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvder } from "./context/CurrencyContext/CurrenceContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BudgetContextProvder>
      <CurrencyContextProvder>
        <GlobalStyles />
        <App />
      </CurrencyContextProvder>
    </BudgetContextProvder>
  </>
);
