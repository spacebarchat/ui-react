import { ReactNode } from "react";
import "@fosscord/ui/scss/input-fields.scss";
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText?: string;
    children?: ReactNode;
    error?: ReactNode;
}
export declare function Input(p: InputProps): JSX.Element;
