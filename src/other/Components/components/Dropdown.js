import React, { useRef } from "react";
import { Pressable } from "react-native";
import { context } from "../../../context/_context";

const Dropdown = ({ top, value, root, children }) => {
  const ref = useRef()
  
  const { dropdownBottom, setdropdownBottom, dropdownRight, setdropdownRight, setdropdownValue, setclientX, setclientY, clientY, clientX, shownDropdown, setshownDropdown, width, height } = context()

  return (
    <Pressable ref={ref} onLayout={(e) => { if (e.nativeEvent.layout.width + e.nativeEvent.layout.x + 10 >= width) { ref.current?.setNativeProps({ style: { right: 0, left: null } }); setdropdownRight(true) } else { ref.current?.setNativeProps({ style: { right: null } }); setdropdownRight(false) }; if (e.nativeEvent.layout.height + e.nativeEvent.layout.y + 10 >= height) { ref.current?.setNativeProps({ style: { bottom: 0, top: null } }); setdropdownBottom(true) } else { ref.current?.setNativeProps({ style: { bottom: null } }); setdropdownBottom(false) } }} onPressOut={(e) => { setshownDropdown(false); setTimeout(() => {setshownDropdown(true)}, 100); if (!root) { setclientX(e.nativeEvent.pageX - 10); setclientY(!top ? e.nativeEvent.pageY : e.nativeEvent.pageY - e.nativeEvent.locationY); setdropdownValue(value); } }} style={root ? { display: shownDropdown ? "flex" : 'none', position: 'absolute', zIndex: 1000, top: dropdownBottom ? null : clientY, left: dropdownRight ? null : clientX, borderWidth: 1, borderRadius: 3, padding: 5, backgroundColor: '#eee' } : { width: '100%', height: '100%' }} >
      {children}
    </Pressable>
  );
}

export default Dropdown


