import ExpoModulesCore
import NosyLogger

public class ExpoNosyLoggerModule: Module {

    enum ValidationError: Error {
        case apiKeyNotSet
    }

    private let logger: NosyLogger = {
        guard let apiKey = Bundle.main.object(forInfoDictionaryKey: "NOSY_LOGGER_API_KEY") else {
            throw ValidationError.apiKeyNotSet
        }

        let _logger = NosyLogger()
        _logger.start(apiKey: apiKey)

        return _logger
    }()

    public func definition() -> ModuleDefinition {
        Name("ExpoNosyLogger")

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
