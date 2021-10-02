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
import React from "react";
import { deleteProps } from "./Types";
export function Text(p) {
    var props = __assign({}, p);
    if (!props.className)
        props.className = "";
    if (props.title)
        props.className += " title";
    if (props.headline) {
        props.className += " headline";
        if (!props.tag)
            props.tag = "h1";
    }
    if (props.secondary)
        props.className += " secondary";
    if (props.muted)
        props.className += " muted";
    if (props.link)
        props.className += " link";
    if (props.anchor)
        props.className += " anchor";
    props.className = "title " + props.className;
    return React.createElement(props.tag || "p", deleteProps(props, "tag", "title", "headline", "secondary", "muted", "link", "anchor"), props.children);
}
