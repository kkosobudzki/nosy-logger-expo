import {
  withInfoPlist,
  withAndroidManifest,
  AndroidConfig,
  ConfigPlugin,
} from "expo/config-plugins";

const withApiKey: ConfigPlugin<{ apiKey: string }> = (config, { apiKey }) => {
  config = withInfoPlist(config, (config) => {
    config.modResults["NOSY_LOGGER_API_KEY"] = apiKey;
    return config;
  });

  config = withAndroidManifest(config, (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults,
    );

    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "NOSY_LOGGER_API_KEY",
      apiKey,
    );

    return config;
  });

  return config;
};

export default withApiKey;
