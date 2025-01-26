package dev.nosytools.rnlogger.expo

import dev.nosytools.logger.Logger
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoNosyLoggerModule : Module() {

    private val context
        get() = requireNotNull(appContext.reactContext)

    private val apiKey by lazy {
        val applicationInfo =
                context.packageManager.getApplicationInfo(
                        context.packageName.toString(),
                        PackageManager.GET_META_DATA
                )

        return applicationInfo.metaData.getString("NOSY_LOGGER_API_KEY")
    }

    private val logger by lazy { Logger(context).run { init(apiKey) } }

    override fun definition() = ModuleDefinition {
        Name("ExpoNosyLogger")

        Function("init") { apiKey: String -> logger.init(apiKey) }

        Function("debug") { message: String -> logger.debug(message) }

        Function("info") { message: String -> logger.info(message) }

        Function("warning") { message: String -> logger.warning(message) }

        Function("error") { message: String -> logger.error(message) }
    }
}
