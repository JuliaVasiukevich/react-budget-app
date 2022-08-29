import React from "react";
import { TitleStyled } from "./styles";

interface IProps {
  text?: string;
}

export const Title = ({ text }: IProps) => {
  return <TitleStyled> {text} </TitleStyled>;
};
