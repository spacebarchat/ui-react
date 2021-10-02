import { MouseEventHandler, ReactNode } from "react";
import { ColorProps } from "./Types";
import "@fosscord/ui/scss/list.scss";
export interface ListProps {
    children?: ReactNode;
    accent?: boolean;
    collapsed?: boolean;
    className?: string;
    label?: string;
}
export declare function List(p: ListProps): JSX.Element;
export interface ListItemProps extends ColorProps {
    seperator?: boolean;
    className?: string;
    children?: ReactNode;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLLIElement>;
    state?: string;
    setState?: React.Dispatch<React.SetStateAction<string>>;
    name?: string;
}
export declare function ListItem(p: ListItemProps): JSX.Element;
