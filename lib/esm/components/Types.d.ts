import React from "react";
export interface ColorProps {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
}
export interface Children {
    children?: React.ReactNode;
}
export declare function getColor(props: ColorProps): "" | " primary" | " danger" | " secondary" | " success" | " warning";
export declare function deleteProps(props: any, ...keys: string[]): any;
