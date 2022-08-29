import React from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { StyledWrapper } from "./ui/styles";

function App() {
  return (
    <>
      <StyledWrapper>
        <Header />
        <Main />
        <Form />
      </StyledWrapper>
    </>
  );
}

export default App;
