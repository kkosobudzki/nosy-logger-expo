import ExpoNosyLogger from "./ExpoNosyLogger";

export function info(message: string) {
  return ExpoNosyLogger.info(message);
}

export function debug(message: string) {
  return ExpoNosyLogger.debug(message);
}

export function warning(message: string) {
  return ExpoNosyLogger.warning(message);
}

// FIXME: or actually an error
export function error(message: string) {
  return ExpoNosyLogger.error(message);
}
