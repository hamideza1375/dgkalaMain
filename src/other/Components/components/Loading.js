import React, { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';


let qq
const Loading = ({ style, text, h, setshowActivity, time = 4000, scale, androidScale, left, right, top, bottom, pos, ...p }) => {
  const [showLoad, setshowLoad] = useState(true)

  useFocusEffect(useCallback(() => {
    qq = setTimeout(() => {
      setshowLoad(false)
    }, time);
    return () => { qq && clearInterval(qq); setshowActivity && setshowActivity(false) }
  }, []))


  return (
    <View height={h} style={[{ minWidth: '99%', maxWidth: '99%', justifyContent: 'center', alignItems: 'center', top: top ? top : 40, left, right, bottom, position: pos, zIndex: 1000, }, style]} >
      <View style={{ marginBottom: 'auto', }} >
        {showLoad ?
          < ActivityIndicator {...p} style={{ transform: [{ scale: scale ? scale : 2 }] }} />
          :
          <View />
        }
      </View>
    </View>
  )
}
export default Loading;
