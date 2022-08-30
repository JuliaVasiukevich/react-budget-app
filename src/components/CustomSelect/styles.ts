import { StylesConfig, GroupBase } from "react-select";
import { IOption } from "../Header/Header";

export const customStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
  control: (styles) => ({
    ...styles,
    minWidth: "75px",
    borderRadius: "5px",
    position: "relative",
    fontSize: "12px",
  }),
};
