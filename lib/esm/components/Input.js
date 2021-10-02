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
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { deleteProps } from "./Types";
import "@fosscord/ui/scss/input-fields.scss";
export function Input(p) {
    var props = __assign({}, p);
    props.className = "input " + (props.className || "");
    var _a = useState(""), value = _a[0], setValue = _a[1];
    if (!props.onChange && !props.value) {
        props.value = value;
        props.onChange = function (e) { return setValue(e.target.value); };
    }
    return (_jsxs("label", __assign({ className: "input-wrapper" }, { children: [_jsxs("p", __assign({ className: "label title text " + (props.error ? "danger" : "") }, { children: [props.labelText, props.error && _jsxs(_Fragment, { children: [" - ", props.error] }, void 0)] }), void 0), _jsx("input", __assign({ value: props.value }, deleteProps(__assign({}, props), "labelText", "children")), void 0), props.children] }), void 0));
}
