import { NativeModule } from "expo";
declare class ExpoNosyLoggerModule extends NativeModule {
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
declare const _default: ExpoNosyLoggerModule;
export default _default;
//# sourceMappingURL=ExpoNosyLogger.d.ts.map