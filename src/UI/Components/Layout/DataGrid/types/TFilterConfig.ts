import { TFilterOperator } from "./TFilterOperator";

export type TFilterConfig = {
    column: number;
    operator: TFilterOperator;
    value: string;
}