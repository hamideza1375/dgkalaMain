import React, { useRef } from "react";
import { Pressable } from "react-native";
import { context } from "../../../context/_context";

const Dropdown = ({ top, value, root, children }) => {
  const ref = useRef({})
  const { dropdownBottom, setdropdownBottom, dropdownRight, setdropdownRight, setdropdownValue, setclientX, setclientY, clientY, clientX, shownDropdown, setshownDropdown, width, height } = context()
  return (
    <Pressable onLayout={(e) => {
      ref.current.width = e?.nativeEvent?.layout.width
      ref.current.height = e?.nativeEvent?.layout.height
    }} onPressOut={(e) => {
      setshownDropdown(false); setTimeout(() => { setshownDropdown(true) }, 100); if (!root) {
        setclientX(e.nativeEvent.pageX - 10);
        setclientY(!top ? e.nativeEvent.pageY : e.nativeEvent.pageY - e.nativeEvent.locationY - top);
        setdropdownValue(value);
      }
    }}
      style={root ? {
        display: shownDropdown ? "flex" : 'none', position: 'absolute', zIndex: 1000,
        left: ((ref.current.width + clientX + 10) >= (width)) ? clientX - ref.current.width : clientX,
        top: ((ref.current.height + clientY + 10) >= (height)) ? clientY - ref.current.height : clientY,
        borderWidth: 1, borderRadius: 3, padding: 5, backgroundColor: '#eee'
      } : { width: '100%', height: '100%' }} >
      {children}
    </Pressable>
  );
}

export default Dropdown