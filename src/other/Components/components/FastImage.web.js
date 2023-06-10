import { forwardRef } from "react";
import { Image } from "react-native";



export default forwardRef(function Img(props, ref) {
  return (
    <Image ref={ref}  style={[{ height: props.h, width: props.w, flex: props.f, borderRadius: props.br }, props.style]} source={{uri: props.src.uri}}/>)
})

