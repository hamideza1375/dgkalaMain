import React, { useEffect, useRef } from 'react';
import { View, TextInput, Platform } from 'react-native';
import _icon from 'react-native-vector-icons/dist/FontAwesome5';
import Micon from 'react-native-vector-icons/dist/MaterialIcons';



export const Textarea = React.forwardRef((props, ref) => {
  const { h = 100 } = props;
  return (<TextInput
    ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}
    onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    multiline {...props} style={[{ padding: 15, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#222', height: h }, props.className, props.style]} />);
});



export const Input = React.forwardRef((props, ref) => {
  const { dropdown, onFocus, $input, textId, fg, f, ta, dr = 'rtl', as, fs=13, p, pt, pb, pl, pr, pv, ph, h = 50, w, m, mt, mb, ml, mr, mv, mh, color = '#222', bgcolor = '#fff', border = [.3], pColor = '#999', } = props;

 
  return (
    <View
      style={[{
        padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginRight: mr, marginLeft: ml, marginHorizontal: mh, marginVertical: mv,
        borderWidth: border[0], borderColor: border[1], alignSelf: as, flexGrow: fg, flex: f, height: h, width: w,
        flexDirection: dr === 'rtl' ? 'row' : 'row-reverse', position: 'relative',
        borderRadius: 5,
        backgroundColor: bgcolor,
      }, props.style]}
      ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}>
      <View style={{ top: 19, right: 60, position: 'absolute' }} >
        {dropdown}
      </View>
      <TextInput
        onFocus={onFocus}
        ref={(e) => {
          $input?.set(textId, e);
        }
        }
        placeholderTextColor={pColor} onPress={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true} placeholder={props.p} {...props} style={[{ width: '84%', flexGrow: 1, textAlign: "right", fontSize: fs, fontFamily:'Yekan Bakh Regular', padding: 8, paddingTop:10, paddingRight: 10, height: '100%', color: props.color ? props.color : '#222', }, props.className, props.textStyle]} />
      {props.icon && <View onStartShouldSetResponder={props.iconPress} style={[{ width: '15%', maxWidth: 70, textAlign: 'center', borderColor: border[1], height: '100%', justifyContent: 'center', alignItems: 'center' }, props.textStyle, dr === 'rtl' ? { borderRightWidth: border[0] } : { borderLeftWidth: border[0] }]}><_icon style={props.iconPress && Platform.OS === 'web' && { cursor: 'pointer' }} name={props.icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#333"} /></View>}
      {props.m_icon && <View onStartShouldSetResponder={props.iconPress} style={[{ width: '15%', maxWidth: 70, textAlign: 'center', borderColor: border[1], height: '100%', justifyContent: 'center', alignItems: 'center' }, props.textStyle, dr === 'rtl' ? { borderRightWidth: border[0] } : { borderLeftWidth: border[0] }]}><Micon style={props.iconPress && Platform.OS === 'web' && { cursor: 'pointer' }} name={props.m_icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#333"} /></View>}
    </View>);
});


export const CheckBox = (props) => {
  const { alignSelf, m, mt, mb, ml, mr, mv, mh, border = [1], bgcolor = "#2c1", br } = props;
  return <_icon checked={props.show} onPress={() => props.setshow && props.setshow(!props.show)} name={"check"} size={18.5} color="#fff" {...props}
    style={[{ borderRadius:br,width: 20, height: 20, borderWidth: border[0], borderColor: border[1], textAlign: 'center', margin: m, alignSelf, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh, marginVertical: mv }, { backgroundColor: props.show === false ? '#fff' : bgcolor }, props.style]} />;
};

let a 

export const CheckBoxRadius = (p) => {
  const {id, refMap, item={}, index, setshow, show, alignSelf, m, mt, mb, ml, mr, mv, mh, border = [1], onPressIn, style, refObject , bgcolor = "#2c1"} = p;
  // const refMap = useRef(new Map())

  const ref = useRef();
  //! const show = useRef({show:false});
  //!or
  const showValue = useRef({...item});

  useEffect(() => {
    ref.current?.setNativeProps({ style: { backgroundColor: "#fff" } })
    showValue.current.show = false
    refObject && refObject(showValue.current)
  }, [show])


  useEffect(() => {
     if ( item?.filterValue === '' /* || index === 0 */ ) {
      ref.current?.setNativeProps({ style: { backgroundColor: bgcolor } })
      showValue.current.show = true
    }
    if (refMap?.current &&item?.filterValue === refMap?.current?.get(id)) {
      ref.current?.setNativeProps({ style: { backgroundColor: bgcolor } })
      showValue.current.show = true

      setshow(!show)
      setTimeout(() => {
        ref.current?.setNativeProps({ style: { backgroundColor: '#2c1' } })
        showValue.current.show = true
        refMap?.current?.set(id, showValue.current.filterValue)
        refObject && refObject(showValue.current)
      }, 200);

    }
  }, [])


  return (
    <View
      ref={ref} style={[{ backgroundColor: 'white', width: 20, height: 20, borderRadius: 50, borderWidth: border[0], borderColor: border[1], margin: m, alignSelf, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh, marginVertical: mv }, style]}>
      <_icon onPress={() => {
        if(onPressIn) {onPressIn()}
        setshow(!show)
        setTimeout(() => {
          ref.current?.setNativeProps({ style: { backgroundColor: '#2c1' } })
          showValue.current.show = true
          refMap?.current?.set(id, showValue.current.filterValue)
          refObject && refObject(showValue.current)
        }, 200);
      }}
        name={"check"} size={18} color="#fff" {...p}
        style={[{ borderRadius: 50, width: 20, height: 20, textAlign: 'center', },]} />
    </View>)
};
