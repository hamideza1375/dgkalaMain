import { Vibration } from "react-native";

export default function vibrate(milSecound=15){
  return Vibration.vibrate(milSecound)
}