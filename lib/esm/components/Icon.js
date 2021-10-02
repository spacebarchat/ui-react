var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
export function Icon(props) {
    return (_jsx("i", { onClick: props.onClick, style: __assign({ "--size": props.size, color: props.color }, props.style), className: "icon " + (props.className || "") + " " + props.icon }, void 0));
}
