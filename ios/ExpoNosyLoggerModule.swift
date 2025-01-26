import ExpoModulesCore
import NosyLogger

public class ExpoNosyLoggerModule: Module {

    enum ValidationError: Error {
        case apiKeyNotSet
    }

    private let logger: NosyLogger? = {
        if let apiKey = Bundle.main.object(forInfoDictionaryKey: "NOSY_LOGGER_API_KEY") as? String {
            let _logger = NosyLogger()
            _logger.start(apiKey: apiKey)

            return _logger
        }

        return nil
    }()

    public func definition() -> ModuleDefinition {
        Name("ExpoNosyLogger")

        Function("debug") { (message: String) -> Void in
            if let safe = logger {
                safe.debug(message)
            } else {
                throw ValidationError.apiKeyNotSet
            }
        }

        Function("info") { (message: String) -> Void in
            if let safe = logger {
                safe.info(message)
            } else {
                throw ValidationError.apiKeyNotSet
            }
        }

        Function("warning") { (message: String) -> Void in
            if let safe = logger {
                safe.warning(message)
            } else {
                throw ValidationError.apiKeyNotSet
            }
        }

        Function("error") { (message: String) -> Void in
            if let safe = logger {
                safe.error(message)
            } else {
                throw ValidationError.apiKeyNotSet
            }
        }
    }
}
