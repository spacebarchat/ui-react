/// <reference types="react" />
import "./Spinner.scss";
export interface SpinnerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: string;
    borderWidth?: string;
}
export declare function Spinner(p: SpinnerProps): JSX.Element;
