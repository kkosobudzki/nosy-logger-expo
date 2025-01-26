import { ConfigPlugin } from "expo/config-plugins";
declare const withApiKey: ConfigPlugin<{
    apiKey: string;
}>;
export default withApiKey;
