import { Platform } from "react-native";

let reload = () => { }

if (Platform.OS === 'web') reload = () => window.location.assign('/')
else {
  const { DevSettings } = require("react-native");

  reload = () => DevSettings.reload()
}

export default reload