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
import "@fosscord/ui/scss/card.scss";
import { Icon } from "./Icon";
export function Card(props) {
    return (_jsxs("div", __assign({ style: { position: "relative" }, className: "card " + (props.active ? "active" : ""), onClick: props.onClick }, { children: [_jsx("span", { className: "header", style: { backgroundImage: "url(" + props.header + ")" } }, void 0), _jsx("span", __assign({ className: "logo" }, { children: _jsx("img", { src: props.icon, alt: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsxs("div", __assign({ className: "title" }, { children: [props.verified && (_jsx(Icon, { className: "badge", icon: "certificate", color: "var(--success)" }, void 0)), props.title] }), void 0), _jsx("p", __assign({ className: "description" }, { children: props.description }), void 0), props.children] }), void 0)] }), void 0));
}
