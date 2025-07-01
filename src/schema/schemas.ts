// types.ts
import { fields, operators, logicOptions } from "../constants";

export type Field = keyof typeof fields;
export type Operator = typeof operators[number];
export type Logic = typeof logicOptions[number];

export type Condition = {
    field: Field;
    operator: Operator;
    value: string;
};

export type Group = {
    logic: Logic;
    conditions: (Condition | Group)[];
};
