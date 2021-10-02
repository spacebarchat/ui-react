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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "@fosscord/ui/scss/icons.scss";
import "@fosscord/ui/scss/dropdown.scss";
import React, { useEffect, useRef, useState } from "react";
export function Dropdown(props) {
    var _a;
    var dropdownRef = useRef(null);
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var selected = props.selected;
    var children = props.children.map(function (x, i) {
        var child = __assign(__assign({}, x), { props: __assign({}, x.props) });
        if (i === selected)
            child.props.selected = true;
        if (!child.props.onClick) {
            child.props.onClick = function () {
                var _a;
                var index = props.children.findIndex(function (y) { return y.props.id === child.props.id; });
                setOpen(false);
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, index, props.children[index]);
            };
        }
        return child;
    });
    useEffect(function () {
        // this will close the dropdown menu if the user clicks on anything else then the dropdown menu
        function handleClick(event) {
            var element = dropdownRef.current;
            // @ts-ignore
            if (event.target !== element && !(element === null || element === void 0 ? void 0 : element.contains(event.target))) {
                setOpen(false);
            }
        }
        function handleKeypress(event) {
            if (event.keyCode !== 27)
                return;
            setOpen(false);
        }
        window.addEventListener("keypress", handleKeypress);
        window.addEventListener("click", handleClick);
        return function () {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keypress", handleKeypress);
        };
    }, []);
    return (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ className: "text title" }, { children: props.labelText }), void 0), _jsxs("div", __assign({ ref: dropdownRef, className: "dropdown " + (props.className || "") + " " + (open && "open") }, { children: [_jsxs("div", __assign({ className: "control item", onClick: function () { return setOpen(!open); } }, { children: [_jsx("span", __assign({ className: "left" }, { children: children[selected] && __assign(__assign({}, children[selected]), { props: __assign(__assign({}, (_a = children[selected]) === null || _a === void 0 ? void 0 : _a.props), { item: true }) }) }), void 0), _jsx("span", __assign({ className: "right" }, { children: _jsx("i", { className: "icon chevron-down" }, void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: "menu" }, { children: children }), void 0)] }), void 0)] }, void 0));
}
export function DropdownItem(props) {
    return React.createElement(props.item ? React.Fragment : "div", !props.item
        ? {
            id: props.id,
            className: "item " + (props.className || "") + " " + (props.selected ? "selected" : ""),
            onClick: props.onClick,
            key: props.id,
        }
        : {
            key: props.id,
        }, _jsxs(_Fragment, { children: [props.icon &&
                (typeof props.icon === "string" ? (_jsx("i", __assign({ className: "prefix icon " + props.icon }, { children: " " }), void 0)) : (props.icon)), _jsx("span", __assign({ className: "name" }, { children: props.name }), void 0), _jsx("span", __assign({ className: "category text title" }, { children: props.category }), void 0), " "] }, void 0));
}
