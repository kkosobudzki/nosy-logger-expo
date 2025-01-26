import { NativeModule, requireNativeModule } from "expo";

declare class ExpoNosyLoggerModule extends NativeModule {
  // init(apiKey: string): void; // FIXME: use configuration https://docs.expo.dev/modules/config-plugin-and-native-module-tutorial/
  debug(message: string): void;
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
}

export default requireNativeModule<ExpoNosyLoggerModule>("ExpoNosyLogger");
