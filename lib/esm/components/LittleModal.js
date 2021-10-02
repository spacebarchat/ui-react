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
import "./LittleModal.scss";
export function LittleModal(props) {
    useEffect(function () {
        function handleKeyDown(event) {
            var _a;
            if (event.key !== "Escape")
                return;
            (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
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
    return (_jsx("div", __assign({ className: "overlay " + (props.open ? "open" : "") }, { children: _jsxs("div", __assign({ className: "modal " + (props.open ? "open" : "") + " " + (props.className || "") }, { children: [_jsx("span", __assign({ className: "close-wrapper" }, { children: _jsx("span", __assign({ className: "close", onClick: props.onClose }, { children: _jsx("i", { className: "icon times" }, void 0) }), void 0) }), void 0), props.children] }), void 0) }), void 0));
}
