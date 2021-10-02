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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
export function Link(props) {
    if (!props.to)
        return _jsx(_Fragment, { children: props.children }, void 0);
    if (props.external)
        return (_jsx("a", __assign({ target: "_BLANK", rel: "noreferrer", href: props.to }, { children: props.children }), void 0));
    return _jsx("a", __assign({ href: props.to }, { children: props.children }), void 0);
}
