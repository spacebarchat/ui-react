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
import { getColor } from "./Types";
import "@fosscord/ui/scss/list.scss";
export function List(p) {
    var props = __assign({}, p);
    if (!props.className)
        props.className = "";
    props.className += " list";
    if (props.accent)
        props.className += " accent";
    if (props.collapsed)
        props.className += " collapsed";
    return (_jsxs("ul", __assign({ className: props.className }, { children: [props.label && _jsx("li", __assign({ className: "text title" }, { children: props.label }), void 0), props.children] }), void 0));
}
export function ListItem(p) {
    var props = __assign({}, p);
    if (!props.className)
        props.className = "";
    if (props.seperator)
        props.className += " seperator";
    else
        props.className += " item";
    if (props.active || props.name === props.state)
        props.className += " active";
    if (!props.onClick && props.name)
        props.onClick = function () { var _a; return (_a = props.setState) === null || _a === void 0 ? void 0 : _a.call(props, props.name); };
    props.className += getColor(props);
    return (_jsx("li", __assign({ onClick: props.onClick, className: props.className }, { children: props.children }), void 0));
}
