import React, { useRef } from 'react'
import { StyleSheet, Animated, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';


const B_icon = ({ as, p, pt, pb, pl, pr, pv, ph, m, mt, mb, ml, mr, mv, mh, color, bgcolor = "#02f", scale = 1,w=75,h=75, icon, a_icon,m_icon, border = [7,"#01c"], style, iconSize, iconPress, onPress, onClick }) => {
  

  const bgClr = bgcolor ?
    (bgcolor == 'red') && '#e22a' ||
    (bgcolor == 'blue') && '#01ca' ||
    (bgcolor == 'green') && '#171a' ||
    (bgcolor == 'yellow') && '#f9c000aa' ||
    (bgcolor == 'silver') && '#666a' ||
    (!border[1]) && bgcolor ||
    (border[1]) && bgcolor ||
    'rgba(240,240,240,.6)'
    :
    'rgba(150,200,240,.5)'


  const fadeAnim = useRef(new Animated.Value(10)).current;


  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 10,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const iterPlt = fadeAnim.interpolate({
    inputRange: [10, 100],
    outputRange: ["transparent", bgClr]
  })

  return (
    <Animated.View
      style={[styles.animation,{width:w,height:h,alignSelf:as, padding:p, paddingTop:pt, paddingBottom:pb, paddingLeft:pl, paddingRight:pr, paddingVertical:pv, paddingHorizontal:ph, margin:m, marginTop:mt, marginBottom:mb, marginLeft:ml, marginRight:mr, marginVertical:mv, marginHorizontal:mh} ,
      { transform: [{ scale}], backgroundColor: iterPlt }, style]}>
      <Pressable
        style={[styles.pressable,{width:w,height:h, borderWidth:border[0]}, !onClick && {cursor:null},{
          borderColor:
            (bgcolor == 'red') && '#e22' ||
            (bgcolor == 'blue') && '#01c' ||
            (bgcolor == 'green') && '#171' ||
            (bgcolor == 'yellow') && '#f9c000' ||
            (bgcolor == 'silver') && '#666' ||
            bgcolor ||
            border[1],
          backgroundColor:
            (bgcolor == 'red') && '#f22' ||
            (bgcolor == 'blue') && '#22f' ||
            (bgcolor == 'green') && '#080' ||
            (bgcolor == 'yellow') && '#fc0' ||
            (bgcolor == 'silver') && '#777' ||
            bgcolor

        }]}
        onPressIn={fadeOut}
        onPress={onClick}
      >
        {
          
          icon && <Icon name={icon} color={color ? color : 'white'} size={iconSize ? iconSize : 28} iconPress={iconPress} /> ||
          a_icon && <Icon2 name={a_icon} color={color ? color : 'white'} size={iconSize ? iconSize : 28} iconPress={iconPress} /> ||
          m_icon ?  <Icon3 name={m_icon} color={color ? color : 'white'} size={iconSize ? iconSize : 28} iconPress={iconPress} /> : <></>
        }
      </Pressable>
    </Animated.View>
  )
}

export default B_icon






const styles = StyleSheet.create({
  animation: {
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',

  },
  pressable: {
    width: 65,
    height: 65,
    borderRadius: 99,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})