import { MouseEventHandler } from "react";
export interface IconProps {
    className?: string;
    icon?: string;
    size?: string;
    color?: string;
    style?: React.CSSProperties;
    onClick?: MouseEventHandler<HTMLElement>;
}
export declare function Icon(props: IconProps): JSX.Element;
