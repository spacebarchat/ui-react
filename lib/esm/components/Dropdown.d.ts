import "@fosscord/ui/scss/icons.scss";
import "@fosscord/ui/scss/dropdown.scss";
import React, { MouseEventHandler, ReactElement } from "react";
export interface DropdownProps {
    labelText?: string;
    className?: string;
    children: ReactElement<DropdownItemProps>[];
    selected: number;
    onChange?: (index: number, element: ReactElement<DropdownItemProps>) => any;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
export interface DropdownItemProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    name?: string;
    icon?: string | any;
    category?: string;
    selected?: boolean;
    children?: React.ReactNode;
    id: string;
    item?: boolean;
}
export declare function DropdownItem(props: DropdownItemProps): React.ReactElement<{
    id: string;
    className: string;
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    key: string;
} | {
    key: string;
    id?: undefined;
    className?: undefined;
    onClick?: undefined;
}, string | React.JSXElementConstructor<any>>;
