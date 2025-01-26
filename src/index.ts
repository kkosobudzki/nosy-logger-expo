import ExpoNosyLoggerModule from "./ExpoNosyLoggerModule";

export function info(message: string) {
  return ExpoNosyLoggerModule.info(message);
}

export function debug(message: string) {
  return ExpoNosyLoggerModule.debug(message);
}

export function warning(message: string) {
  return ExpoNosyLoggerModule.warning(message);
}

// FIXME: or actually an error
export function error(message: string) {
  return ExpoNosyLoggerModule.error(message);
}
