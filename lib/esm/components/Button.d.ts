import React from "react";
import { ColorProps } from "./Types";
import "@fosscord/ui/scss/button.scss";
export interface ButtonProps extends ColorProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean;
}
export declare function Button(p: ButtonProps): JSX.Element;
