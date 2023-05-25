import React, { useRef } from "react";
import { Pressable } from "react-native";
import { context } from "../../../context/_context";

const Dropdown = ({ top, value, root, children }) => {
  const ref = useRef()
  const { dropdownBottom, setdropdownBottom, dropdownRight, setdropdownRight, setdropdownValue, setclientX, setclientY, clientY, clientX, shownDropdown, setshownDropdown, width, height } = context()
  return (
    <Pressable onLayout={(e) => {
    if(e)  ref.current = e.persist()
    }} onPressOut={(e) => {
      setshownDropdown(false); setTimeout(() => { setshownDropdown(true) }, 100); if (!root) {
        setclientX(((ref.current?.nativeEvent?.layout?.width + e.nativeEvent.pageX + 20) >= (width)) ? 1: (e.nativeEvent.pageX));
        setclientY(!top?
          ((ref.current?.nativeEvent?.layout?.height + e.nativeEvent.pageY + 20) >= (height)) ? 1: (e.nativeEvent.pageY)
          :
          (e.nativeEvent.pageY - e.nativeEvent.locationY - top)
          );
        setdropdownValue(value);
      }
    }}
      style={root ? ([{
        display: shownDropdown ? "flex" : 'none', position: 'absolute', zIndex: 1000,
        borderWidth: 1, borderRadius: 3, padding: 5, backgroundColor: '#eee'
      }, clientX !== 1 ?{left: clientX}: {right:5},
      clientY !== 1 ?{top: clientY}: {bottom:5}]): { width: '100%', height: '100%' }} >
      {children}
    </Pressable>
  );
}

export default Dropdown