import { StylesConfig, GroupBase } from "react-select";
import { IOption } from "../Header/Header";

export const customStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
  control: () => ({
    display: "flex",
    width: "73px",
    fontSize: "12px",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
  }),
};
