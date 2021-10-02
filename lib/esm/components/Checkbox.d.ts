import "@fosscord/ui/scss/icons.scss";
import "@fosscord/ui/scss/checkbox.scss";
import { ReactNode } from "react";
export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText?: ReactNode;
    error?: ReactNode;
}
export declare function Checkbox(p: CheckboxProps): JSX.Element;
