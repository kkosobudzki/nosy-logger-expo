import ExpoModulesCore
import NosyLogger

public class ExpoNosyLoggerModule: Module {

    private let logger = NosyLogger()

    public func definition() -> ModuleDefinition {
        Name("ExpoNosyLogger")

        Function("init") { (apiKey: String) -> Void in
            logger.start(apiKey: apiKey)
        }

        Function("debug") { (message: String) -> Void in
            logger.debug(message)
        }

        Function("info") { (message: String) -> Void in
            logger.info(message)
        }

        Function("warning") { (message: String) -> Void in
            logger.warning(message)
        }

        Function("error") { (message: String) -> Void in
            logger.error(message)
        }
    }
}
