import React from "react";
import { Switch as _Switch } from "react-native";
const Switch = ({ setIsEnabled, isEnabled, ...props }) => {
  return (
    <_Switch
      dir='ltr'
      trackColor={{ false: "#767577", true: "#55ddff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => setIsEnabled(!isEnabled)}
      value={isEnabled}
      {...props}
    />
  );
}
export default Switch;