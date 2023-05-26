import React, { useRef } from "react";
import { Animated, KeyboardAvoidingView, Text } from "react-native";
import { Input } from "./FormComponent";
import Swiper from '../components/Swiper'
import { Py } from "../Html";

let int
export default function ({setscrollEnabled, textId, $input, initialHeight, iconSize, w, plackTextTop, autoFocus = false, multiline = false, m_icon, iconPress, secureTextEntry, icon, textContentType, autoComplete = 'off', keyboardType = 'default', p, p2, newObj, iconLeft, iconRight, setBlur, getBlur, state, setState, styles, yub }) {


  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt = fadeAnim.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })





  return (
    <KeyboardAvoidingView onStartShouldSetResponder={()=>setscrollEnabled(true)} onStartShouldSetResponderCapture={()=>setscrollEnabled(true)} behavior={"height"} style={[{ height: 70, minHeight: 70, marginVertical: 10, marginHorizontal: 10, flexGrow: 1, maxWidth: w, }, w === '100%' && { minWidth: '92%' }, (multiline && !initialHeight) && { height: 140, minHeight: 140, marginTop: 12 }]}>
      <Animated.View onStartShouldSetResponder={()=>setscrollEnabled(true)} onStartShouldSetResponderCapture={()=>setscrollEnabled(true)} style={[styles.viewInput, { minHeight: 90 }, (multiline && !initialHeight) && { height: 120, minHeight: 120 }, { marginBottom: 5 }]} >
        <Swiper
          cansel={(iconLeft || iconRight) ? false : true}
          style={[(multiline && !initialHeight) && { height: 115, minHeight: 115 }]}
          styleRightIcon={{ top: 37 }}
          styleLeftIcon={{ top: 37 }}
          iconLeft={iconLeft}
          iconRight={iconRight}
        >
          {plackTextTop && <Py fw='100' style={[styles.textinput, { marginTop: 5 }, (multiline && !initialHeight) && { marginVertical: 5 }]} >{p}</Py>}
          <Animated.View style={[styles.animatedBorder, getBlur && !yub && { borderWidth: 1.2, borderColor: iterPlt, transform: [{ translateX: fadeAnim }] }, (multiline && !initialHeight) && { height: '101%', minHeight: '101%', marginTop: -3 }]} >
            <Input
            onStartShouldSetResponder={()=>setscrollEnabled(true)} onStartShouldSetResponderCapture={()=>setscrollEnabled(true)}
              $input={$input}
              textId={textId}
              textContentType={textContentType}
              autoComplete={autoComplete}
              keyboardType={keyboardType}
              icon={icon}
              iconSize={iconSize}
              m_icon={m_icon}
              placeholder={p2 ? p2 : p}
              defaultValue={String(state)}
              onChangeText={(text) => {int && clearInterval(int) ;int = setTimeout(() => {setState(text)}, 500);}}
              onBlur={() => { setBlur(true); !yub && fadeOut() }}
              style={[styles.input, (multiline && !initialHeight) && { height: 115, minHeight: 115 }]}
              iconPress={iconPress}
              secureTextEntry={secureTextEntry}
              autoFocus={autoFocus}
              multiline={multiline}
            />
          </Animated.View>
          {getBlur && !yub && <Py style={[styles.textinput, { color: 'red', fontSize: 10, fontWeight: '100' }]} >
            {newObj}
          </Py>
          }
        </Swiper>
      </Animated.View>
    </KeyboardAvoidingView>

  )
}


