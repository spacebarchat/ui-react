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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { deleteProps } from "./Types";
import "./Spinner.scss";
export function Spinner(p) {
    var props = __assign({}, p);
    if (!props.className)
        props.className = "";
    props.className += " spinner";
    if (!props.style)
        props.style = {};
    // @ts-ignore
    props.style["--size"] = props.size;
    // @ts-ignore
    props.style["--border-width"] = props.borderWidth;
    return (_jsxs("div", __assign({}, deleteProps(props, "children", "size", "borderWidth"), { children: [_jsx("div", {}, void 0), _jsx("div", {}, void 0), _jsx("div", {}, void 0), _jsx("div", {}, void 0), props.children] }), void 0));
}
