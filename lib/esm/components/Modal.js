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
import { useEffect } from "react";
import "@fosscord/ui/scss/modal.scss";
import "./Modal.scss";
export function Modal(props) {
    var _a, _b;
    useEffect(function () {
        function handleKeyDown(event) {
            var _a;
            if (event.keyCode !== 27)
                return; // matches Escape
            (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(// matches Escape
            props);
        }
        document.addEventListener("keydown", handleKeyDown);
        function handleClick(evt) {
            var _a;
            var insideItem = document.querySelector(".modal.open");
            var targetElement = evt.target; // clicked element
            do {
                if (targetElement === insideItem) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement);
            if (props.open) {
                (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
            }
        }
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClick);
        };
    });
    if (props.open)
        (_a = document.querySelector(".modal-background")) === null || _a === void 0 ? void 0 : _a.classList.add("modal-open");
    if (!props.open)
        (_b = document.querySelector(".modal-background")) === null || _b === void 0 ? void 0 : _b.classList.remove("modal-open");
    return (_jsxs("div", __assign({ className: "modal " + (props.open ? "open" : "") + " " + (props.className || "") }, { children: [_jsxs("span", __assign({ className: "close-wrapper" }, { children: [_jsx("span", __assign({ className: "close", onClick: props.onClose }, { children: _jsx("i", { className: "icon times" }, void 0) }), void 0), _jsx("span", __assign({ className: "text title" }, { children: "ESC" }), void 0)] }), void 0), props.children] }), void 0));
}
