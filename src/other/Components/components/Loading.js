import React, { useCallback, useState, useRef } from "react";
import { ActivityIndicator, View, Text, Animated, Easing, Platform } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import {P} from '../Html';


let qq
const Loading = ({ style, text, h, setshowActivity, time = 7100, scale, androidScale, left, right, top, bottom, pos, ...p }) => {
  const [showLoad, setshowLoad] = useState(true)

  useFocusEffect(useCallback(() => {
      qq = setTimeout(() => {
        setshowLoad(false)
      }, time);
    return () => { qq && clearInterval(qq); setshowActivity && setshowActivity(false) }
  }, []))

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const open = () => {
    Animated.timing(fadeAnim, {
      toValue: 45,
      duration: 7000,
      useNativeDriver: false,
      easing: Easing.bounce
    }).start();
  };

  const hidden = fadeAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg', '2000deg']
  })

  useFocusEffect(useCallback(() => {
    open()
  }, []))


  return (
    <View height={h} style={[{ minWidth: '99%', maxWidth: '99%', justifyContent: 'center', alignItems: 'center', top: top ? top : 40, left, right, bottom, position: pos, zIndex: 1000, }, style]} >
      <View style={{ marginBottom: 'auto', }} >
        {showLoad ?
          <>
            {
              // Platform.OS === 'android' ?
              //   <View style={{ width: 47, height: 47, borderRadius: 50, borderWidth: 1, borderColor: '#25f', transform: [{ scale: androidScale ? androidScale : 1 }] }} >

              //     <Animated.View style={{ width: 44, height: 44, borderRadius: 50, position: 'relative', transform: [{ rotate: hidden }] }} >
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 1, top: 10 }} ></View>
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 3, top: 7 }} ></View>
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 6, top: 4 }} ></View>
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 9, top: 2 }} ></View>
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 13, top: 0 }} ></View>
              //       <View style={{ width: 6, height: 6, backgroundColor: '#07d', borderRadius: 50, position: 'absolute', left: 18, top: -1 }} ></View>
              //     </Animated.View>


              //   </View>
              //   :
              < ActivityIndicator {...p} style={{ transform: [{ scale: scale ? scale : 2 }] }} />
            }
          </>

          :
          <View style={{ alignItems: 'center', width: '100%' }}>
            <Icon name="frown-open" size={55} style={[{ marginBottom: 10 }]} />
            <P children={text ? text : 'متأستفانه چیزی پیدا نشد'} />
          </View>
        }
      </View>
    </View>
  )
}
export default Loading;
