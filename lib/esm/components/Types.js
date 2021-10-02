export function getColor(props) {
    var value = (function () {
        if (props.primary)
            return " primary";
        if (props.danger)
            return " danger";
        if (props.secondary)
            return " secondary";
        if (props.success)
            return " success";
        if (props.warning)
            return " warning";
    })();
    deleteProps(props, "primary", "danger", "secondary", "success", "warning");
    return value || "";
}
export function deleteProps(props) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        delete props[key];
    }
    return props;
}
