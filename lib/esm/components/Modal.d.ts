import React from "react";
import "@fosscord/ui/scss/modal.scss";
import "./Modal.scss";
export interface ModalProps {
    children?: React.ReactNode;
    open?: boolean;
    onClose?: () => any;
    className?: string;
}
export declare function Modal(props: ModalProps): JSX.Element;
