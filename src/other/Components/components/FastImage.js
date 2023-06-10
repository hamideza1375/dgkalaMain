import { forwardRef } from "react";
import FastImage from "react-native-fast-image";



export default forwardRef(function Img(props, ref) {
  return (
    <FastImage
    ref={ref} 
      style={[{ height: props.h, width: props.w, flex: props.f, borderRadius: props.br }, props.style]}
      source={{ uri: props.src.uri, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.stretch}
    />)
})

