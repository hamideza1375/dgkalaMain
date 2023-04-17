import React, { useEffect, useRef } from "react";
import { Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import A_icon from 'react-native-vector-icons/dist/AntDesign';
import M_icon from 'react-native-vector-icons/dist/MaterialIcons';

const Dropdown = ({bodyStyle,displayFlex,$input,textId,h, child, border = [.5, 'silver'], show, setshow, children, icon, a_icon, m_icon, color = '#aaa', showBgcolor = '#fff', style, iconFalse, top, onClick }) => {

  const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current?.setNativeProps({ style: {display:displayFlex?'flex':'none', transform: [{ scale: 0 }] } })
  }, [show])




  return (
    <View style={{zIndex:10}} >
      <Pressable
        onPressIn={() => { 
          onClick && onClick()
          setshow(!show); setTimeout(() => { setshow(!show) }, 1) }}

        onPress={() => {
          () => { setshow(!show); setTimeout(() => { setshow(!show) }, 2) };
          setTimeout(() => {
            ref?.current && ref.current?.setNativeProps({ style: { display:'flex',transform: [{ scale: 1 }] } })
          }, 5);
        }}

        style={[{ flexDirection: 'row', padding: 2, position: 'relative',paddingHorizontal:5, height:h }, style]} >
        {!iconFalse ? <Icon color={color} name={top ? 'caret-up' : 'caret-down'} style={[{ top: 3, position: 'relative', right: 1 }, { fontSize: 22.5 }]}></Icon> : <></> }

        {icon && <Icon color={color} name={icon ? icon : 'trash'} style={[{ fontSize: 22.5 }]}></Icon> ||
          a_icon && <A_icon color={color} name={a_icon ? a_icon : 'trash'} style={[{ fontSize: 22.5 }]}></A_icon> ||
          m_icon && <M_icon color={color} name={m_icon ? m_icon : 'trash'} style={[{ fontSize: 22.5 }]}></M_icon> ||
          child ? <View style={{ marginTop: 3 }}>{child}</View>
          :
        <></>
        }

      </Pressable>

      <Pressable
        ref={ref}
        onLayout={()=>{$input?.set(textId, ref);}}
        style={[{

          alignSelf: 'center', borderWidth: border[0], borderColor: border[1], borderRadius: 3,zIndex:11, padding: 3, position: 'absolute',
          display:'none',transform: [{ scale: 0 }], backgroundColor: showBgcolor, minWidth: 100
        },bodyStyle, top ? { bottom: 20 } : { top: 20 }]}>
        {children}
      </Pressable>
    </View>
  );
}

export default Dropdown


