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
import { deleteProps, getColor } from "./Types";
import { Spinner } from "./Spinner";
import "@fosscord/ui/scss/button.scss";
export function Button(p) {
    var props = __assign({}, p);
    props.className = "button " + (props.className || "") + " " + getColor(props);
    return (_jsx("button", __assign({}, deleteProps(__assign({}, props), "loading"), { disabled: props.disabled || props.loading }, { children: props.loading ? (_jsx(Spinner, { size: "36px", borderWidth: "4px" }, void 0)) : (props.children) }), void 0));
}
