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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { deleteProps } from "./Types";
import "@fosscord/ui/scss/icons.scss";
import "@fosscord/ui/scss/checkbox.scss";
export function Checkbox(p) {
    var props = __assign({}, p);
    return (_jsxs("label", __assign({ className: "checkbox" }, { children: [_jsxs("p", __assign({ className: "label text " + (props.error ? "danger" : "") }, { children: [props.labelText, props.error && "- " + props.error] }), void 0), _jsx("input", __assign({}, deleteProps(props, "labelText"), { type: "checkbox" }), void 0), _jsx("span", __assign({ className: "checkmark" }, { children: _jsx("i", { className: "icon check" }, void 0) }), void 0)] }), void 0));
}
