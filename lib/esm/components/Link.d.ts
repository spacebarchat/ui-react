import { ReactNode } from "react";
export interface LinkProps {
    external?: boolean;
    to?: string;
    children: ReactNode;
}
export declare function Link(props: LinkProps): JSX.Element;
