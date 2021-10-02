import React, { ReactNode } from "react";
import { ColorProps } from "./Types";
export interface TextProps extends ColorProps {
    title?: boolean;
    headline?: boolean;
    secondary?: boolean;
    muted?: boolean;
    link?: boolean;
    anchor?: boolean;
    tag?: string;
    children?: ReactNode;
    className?: string;
}
export declare function Text(p: TextProps): React.DOMElement<any, Element>;
