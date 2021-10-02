import React from "react";
import "@fosscord/ui/scss/modal.scss";
import "./LittleModal.scss";
export interface ModalProps {
    children?: React.ReactNode;
    open: boolean;
    onClose?: () => any;
    className?: string;
}
export declare function LittleModal(props: ModalProps): JSX.Element;
