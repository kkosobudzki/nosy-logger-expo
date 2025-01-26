import { NativeModule, requireNativeModule } from "expo";

declare class ExpoNosyLoggerModule extends NativeModule {
  debug(message: string): void;
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
}

export default requireNativeModule<ExpoNosyLoggerModule>("ExpoNosyLogger");
