import styled from "styled-components";

const InputStyled = styled.input<{ $budgetInput: boolean }>`
  border: none;
  box-shadow: ${({ $budgetInput }) =>
    $budgetInput ? "none" : "1px 1px 10px rgba(0, 0, 0, 0.1)"};
  height: ${({ $budgetInput }) => ($budgetInput ? "24px" : "50px")};
  border-radius: 10px;
  margin-bottom: ${({ $budgetInput }) => ($budgetInput ? "none" : "30px")};
  font-size: ${({ $budgetInput }) => ($budgetInput ? "20px" : "16px")};
  padding: ${({ $budgetInput }) => ($budgetInput ? "0" : "15px 20px")};
  background: ${({ $budgetInput }) => ($budgetInput ? "transparent" : "none")};
  width: ${({ $budgetInput }) => ($budgetInput ? "210px" : "100%")};
  line-height: ${({ $budgetInput }) => ($budgetInput ? "24px" : "19px")};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: ${({ $budgetInput }) => ($budgetInput ? "white" : "black")};
  }

  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

export { InputStyled, Wrapper };
