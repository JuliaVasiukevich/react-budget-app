export enum FormValuesKeys {
  NAME = 'name',
  COST = 'cost',
}

export type IFormValues = {
    [FormValuesKeys.NAME]: string;
    [FormValuesKeys.COST]: number;
  };
  