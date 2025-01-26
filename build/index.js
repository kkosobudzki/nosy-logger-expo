import ExpoNosyLogger from "./ExpoNosyLogger";
export function info(message) {
    return ExpoNosyLogger.info(message);
}
export function debug(message) {
    return ExpoNosyLogger.debug(message);
}
export function warning(message) {
    return ExpoNosyLogger.warning(message);
}
// FIXME: or actually an error
export function error(message) {
    return ExpoNosyLogger.error(message);
}
//# sourceMappingURL=index.js.map