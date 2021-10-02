import "@fosscord/ui/scss/card.scss";
import { MouseEventHandler, ReactNode } from "react";
export interface CardProps {
    active?: boolean;
    children?: ReactNode;
    header?: string;
    icon?: string;
    title?: string;
    description?: string;
    verified?: boolean;
    partnered?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
export declare function Card(props: CardProps): JSX.Element;
