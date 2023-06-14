import React, { useEffect, useMemo, useState } from 'react'
import { Animated as _Animated, StyleSheet as _StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Platform, FlatList as _FlatList, VirtualizedList, Pressable, ImageBackground, Dimensions } from 'react-native';
import _icon from 'react-native-vector-icons/dist/FontAwesome5';
import Aicon from 'react-native-vector-icons/dist/AntDesign';
import Micon from 'react-native-vector-icons/dist/MaterialIcons';
import s from './styles/html.module.scss'
export { default as B_icon } from './components/B_icon'
export { default as Badge } from './components/Badge'
export { default as Button } from './components/Button'
export { default as Card } from './components/Card'
export { default as Card2 } from './components/Card2'
export { default as Dropdown } from './components/Dropdown'
export { default as Dropdown2 } from './components/Dropdown2'
export { default as Drawer2 } from './components/Drawer2'
export { default as Form } from './components/Form'
export { default as List } from './components/List'
import _Loading from './components/Loading'
export const Loading = _Loading;
export { default as Modal } from './components/Modal'
import _Pagination from './components/Pagination'
export const Pagination = _Pagination;
export { default as Swiper } from './components/Swiper'
export { default as Switch } from './components/Switch'
export { default as Table } from './components/Table'
export { default as Slider } from './components/Slider'
export { default as ScrollSlider } from './components/ScrollSlider'
export { default as SearchBar } from './components/SearchBar'
export { default as DaysChartMean } from './chart/DaysChartMean'
export { default as DaysChartTotal } from './chart/DaysChartTotal'
export { default as YearsChartMean } from './chart/YearsChartMean'
export { default as YearsChartTotal } from './chart/YearsChartTotal'
export { default as UserLengthChart } from './chart/UserLengthChart'
export { default as ProgressChart } from './chart/ProgressChart'
export { Textarea, Input, CheckBox, CheckBoxRadius } from './formComponent/FormComponent'
// import { Input as _Input } from './formComponent/FormComponent'

// import FastImage from './components/FastImage'
import setStyleRef from './classToStyle/setClassToStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _useEffect from '../../controllers/_initial';
import { useRoute } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';





export const ComponentForScroll = React.forwardRef((props, ref) => {
  const { el, jc, ai, flatlist = false, land, port, col1, col2, col3, col4, col5, col6, sh = {}, scale = 1, rotate = 0, br, fd, Component, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], bb, bt, fg, f, ta, as, fm, fs, bbc, btc, blc, brc, btw, bbw, blw, brw, btr, bbr, blr, brr, minw, maxw, minh, maxh, wb, ovflw, ovfl, ovflx, ovfly, lh, d, opc, pos, z, t, b, r, l, fw, tdl, tds, tdc, shc, sho, shr, shoff, tshc, tsho, tshr, tshoff } = props;
  const [innerHTML, setinnerHTML] = React.useState(null);
  const [uri, seturi] = React.useState(null)
  let stl, stl2,
    col = {},
    orientation = {},
    _col = {},
    _orientation = {}
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height



  if (width <= 320) _col = props._col1
  else if (width > 320 && width <= 480) _col = props._col2
  else if (width > 480 && width <= 768) _col = props._col3
  else if (width > 768 && width <= 1024) _col = props._col4
  else if (width > 1024 && width <= 1440) _col = props._col5
  else if (width > 1440) _col = props._col6

  _orientation = width > height ? props._land : props._port
  if (Platform.OS === 'web') stl = [props.style]
  else stl = [props.nativeClass, props.initalClass, props.class, props.style, props.nativeStyle, _col, _orientation]
  if (Platform.OS === 'ios') stl2 = [props.iosStyle]
  else if (Platform.OS === 'android') stl2 = [props.androidStyle]
  else if (Platform.OS === 'web') stl2 = [props.webStyle]


  if (width <= 320) col = col1
  else if (width > 320 && width <= 480) col = col2
  else if (width > 480 && width <= 768) col = col3
  else if (width > 768 && width <= 1024) col = col4
  else if (width > 1024 && width <= 1440) col = col5
  else if (width > 1440) col = col6


  orientation = width > height ? land : port
  return <Component
    {...props}
    onClick={() => { }}
    src={null}
    source={uri ? uri : props.source}
    contentContainerStyle={[{ justifyContent: jc, alignItems: ai }, props.ccStyle, props.contentContainerStyle, Platform.OS !== 'web' && props.containClass]}
    imageStyle={[props.imageStyle, Platform.OS !== 'web' && props.containClass]}
    style={[

      Platform.select({
        web: {
          flexWrap: fw, elevation: el,
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          transform: [{ scale }, { rotate: rotate + 'deg' }],
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w,
        },
        native: {
          flexWrap: fw, elevation: el,
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          transform: [{ scale }, { rotate: rotate + 'deg' }],
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w,
        }
      })

      ,
      stl, stl2, col, orientation
    ]}

    ref={(e) => { setStyleRef(props, e, ref, setinnerHTML, flatlist, seturi); }}
  >{innerHTML ? ((typeof innerHTML === 'string') ? <Text onPress={props.onClick}>{innerHTML}</Text> : innerHTML) : (typeof props.children === 'string') ? <Text onPress={props.onClick}>{props.children}</Text> : props.children}</Component>;
});










export const ComponentImage = React.forwardRef((props, ref) => {
  const { el, jc, ai, flatlist = false, land, port, col1, col2, col3, col4, col5, col6, sh = {}, scale = 1, rotate = 0, br, fd, Component, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], bb, bt, fg, f, ta, as, fm, fs, bbc, btc, blc, brc, btw, bbw, blw, brw, btr, bbr, blr, brr, minw, maxw, minh, maxh, wb, ovflw, ovfl, ovflx, ovfly, lh, d, opc, pos, z, t, b, r, l, fw, tdl, tds, tdc, shc, sho, shr, shoff, tshc, tsho, tshr, tshoff } = props;
  const [innerHTML, setinnerHTML] = React.useState(null);
  const [uri, seturi] = React.useState(null)
  let stl, stl2,
    col = {},
    orientation = {},
    _col = {},
    _orientation = {}
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height



  if (width <= 320) _col = props._col1
  else if (width > 320 && width <= 480) _col = props._col2
  else if (width > 480 && width <= 768) _col = props._col3
  else if (width > 768 && width <= 1024) _col = props._col4
  else if (width > 1024 && width <= 1440) _col = props._col5
  else if (width > 1440) _col = props._col6

  _orientation = width > height ? props._land : props._port
  if (Platform.OS === 'web') stl = [props.style]
  else stl = [props.nativeClass, props.initalClass, props.class, props.style, props.nativeStyle, _col, _orientation]
  if (Platform.OS === 'ios') stl2 = [props.iosStyle]
  else if (Platform.OS === 'android') stl2 = [props.androidStyle]
  else if (Platform.OS === 'web') stl2 = [props.webStyle]


  if (width <= 320) col = col1
  else if (width > 320 && width <= 480) col = col2
  else if (width > 480 && width <= 768) col = col3
  else if (width > 768 && width <= 1024) col = col4
  else if (width > 1024 && width <= 1440) col = col5
  else if (width > 1440) col = col6


  orientation = width > height ? land : port
  return <Component
    {...props}
    onClick={() => { }}
    src={null}
    source={uri ? uri : props.source}
    contentContainerStyle={[props.ccStyle, props.contentContainerStyle, Platform.OS !== 'web' && props.containClass]}
    imageStyle={[props.imageStyle, Platform.OS !== 'web' && props.containClass]}
    style={[
      Platform.select({
        web: {
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, justifyContent: jc, alignItems: ai
        },
        native: {
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, justifyContent: jc, alignItems: ai
        }
      })
      ,
      stl, stl2, col, orientation
    ]}

    ref={(e) => { setStyleRef(props, e, ref, setinnerHTML, flatlist, seturi); }}
  >{innerHTML ? ((typeof innerHTML === 'string') ? <Text onPress={props.onClick}>{innerHTML}</Text> : innerHTML) : (typeof props.children === 'string') ? <Text onPress={props.onClick}>{props.children}</Text> : props.children}</Component>;
});







export const Component = React.forwardRef((props, ref) => {
  const { el, jc, ai, flatlist = false, land, port, col1, col2, col3, col4, col5, col6, sh = {}, scale = 1, rotate = 0, br, fd, Component, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], bb, bt, fg, f, ta, as, fm, fs, bbc, btc, blc, brc, btw, bbw, blw, brw, btr, bbr, blr, brr, minw, maxw, minh, maxh, wb, ovflw, ovfl, ovflx, ovfly, lh, d, opc, pos, z, t, b, r, l, fw, tdl, tds, tdc, shc, sho, shr, shoff, tshc, tsho, tshr, tshoff } = props;
  const [innerHTML, setinnerHTML] = React.useState(null);
  const [uri, seturi] = React.useState(null)
  let stl, stl2,
    col = {},
    orientation = {},
    _col = {},
    _orientation = {}
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height



  if (width <= 320) _col = props._col1
  else if (width > 320 && width <= 480) _col = props._col2
  else if (width > 480 && width <= 768) _col = props._col3
  else if (width > 768 && width <= 1024) _col = props._col4
  else if (width > 1024 && width <= 1440) _col = props._col5
  else if (width > 1440) _col = props._col6

  _orientation = width > height ? props._land : props._port
  if (Platform.OS === 'web') stl = [props.style]
  else stl = [props.nativeClass, props.initalClass, props.class, props.style, props.nativeStyle, _col, _orientation]
  if (Platform.OS === 'ios') stl2 = [props.iosStyle]
  else if (Platform.OS === 'android') stl2 = [props.androidStyle]
  else if (Platform.OS === 'web') stl2 = [props.webStyle]


  if (width <= 320) col = col1
  else if (width > 320 && width <= 480) col = col2
  else if (width > 480 && width <= 768) col = col3
  else if (width > 768 && width <= 1024) col = col4
  else if (width > 1024 && width <= 1440) col = col5
  else if (width > 1440) col = col6


  orientation = width > height ? land : port
  return <Component
    {...props}
    onClick={() => { }}
    src={null}
    source={uri ? uri : props.source}
    contentContainerStyle={[props.ccStyle, props.contentContainerStyle, Platform.OS !== 'web' && props.containClass]}
    imageStyle={[props.imageStyle, Platform.OS !== 'web' && props.containClass]}
    style={[
      Platform.select({
        web: {
          flexWrap: fw, elevation: el,
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          transform: [{ scale }, { rotate: rotate + 'deg' }],
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, justifyContent: jc, alignItems: ai
        },
        native: {
          flexWrap: fw, elevation: el,
          shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of,
          transform: [{ scale }, { rotate: rotate + 'deg' }],
          borderTopWidth: btw, borderRadius: br,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          flexGrow: fg, flex: f, flexDirection: fd,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, justifyContent: jc, alignItems: ai
        }
      })
      ,
      stl, stl2, col, orientation
    ]}

    ref={(e) => { setStyleRef(props, e, ref, setinnerHTML, flatlist, seturi); }}
  >{innerHTML ? ((typeof innerHTML === 'string') ? <Text onPress={props.onClick}>{innerHTML}</Text> : innerHTML) : (typeof props.children === 'string') ? <Text onPress={props.onClick}>{props.children}</Text> : props.children}</Component>;
});

export const _text = React.forwardRef((props, ref) => {
  const { land, port, col1, col2, col3, col4, col5, col6, e, tsh = {}, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = 'black', bgcolor, border = [], fg, f, ta, as, fm, fs = 13, bbc, btc, blc, brc, btw, bbw, blw, brw, btr, bbr, blr, brr, minw, maxw, minh, maxh, wb, ovflw, ovfl, ovflx, ovfly, lh, d, opc, pos, z, t, b, r, l, fw, ff = 'IRANSansWeb', tdl, tds, tdc, shc, sho, shr, shoff, tshc, tsho, tshr, tshoff, scale = null, rotate = null } = props;
  const [innerHTML, setinnerHTML] = React.useState(null);
  let stl,
    _col = {},
    _orientation = {},
    col = {},
    orientation = {}
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height



  if (width <= 320) _col = props._col1
  else if (width > 320 && width <= 480) _col = props._col2
  else if (width > 480 && width <= 768) _col = props._col3
  else if (width > 768 && width <= 1024) _col = props._col4
  else if (width > 1024 && width <= 1440) _col = props._col5
  else if (width > 1440) _col = props._col6


  _orientation = width > height ? props._land : props._port
  if (Platform.OS === 'web') stl = [props.webStyle, props.style]
  else stl = [props.nativeStyle, props.nativeClass, props.initalClass, props.class, props.style, _col, _orientation]


  if (width <= 320) col = col1
  else if (width > 320 && width <= 480) col = col2
  else if (width > 480 && width <= 768) col = col3
  else if (width > 768 && width <= 1024) col = col4
  else if (width > 1024 && width <= 1440) col = col5
  else if (width > 1440) col = col6

  orientation = width > height ? land : port
  return <Text
    {...props}
    style={[

      Platform.select({
        web: {
          overflow: 'hidden',
          textShadowRadius: tsh.r, textShadowColor: tsh.c, textShadowOffset: tsh.of,
          borderBottomColor: bbc, borderTopColor: btc,
          borderLeftColor: blc, borderRightColor: brc, borderTopWidth: btw,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          textAlign: ta, flexGrow: fg, flex: f,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, fontFamily: ff, fontSize: fs, fontWeight: fw, color,
        },
        android: {
          overflow: 'hidden',
          textShadowRadius: tsh.r, textShadowColor: tsh.c, textShadowOffset: tsh.of,
          borderBottomColor: bbc, borderTopColor: btc,
          borderLeftColor: blc, borderRightColor: brc, borderTopWidth: btw,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          textAlign: ta === 'left' ? 'right' : (ta === 'right' ? 'left' : ta), flexGrow: fg, flex: f,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pl, paddingLeft: pr, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, fontFamily: ff, fontSize: fs, fontWeight: fw, color,
        },
        ios: {
          overflow: 'hidden',
          textShadowRadius: tsh.r, textShadowColor: tsh.c, textShadowOffset: tsh.of,
          borderBottomColor: bbc, borderTopColor: btc,
          borderLeftColor: blc, borderRightColor: brc, borderTopWidth: btw,
          borderBottomWidth: bbw, borderLeftWidth: blw, borderRightWidth: brw,
          minWidth: minw, maxWidth: maxw, minHeight: minh, maxHeight: maxh,
          opacity: opc,
          position: pos, zIndex: z, top: t, bottom: b, right: r, left: l,
          textAlign: ta === 'left' ? 'right' : (ta === 'right' ? 'left' : ta), flexGrow: fg, flex: f,
          alignSelf: as, padding: p, paddingBottom: pb, paddingTop: pt,
          paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
          marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb,
          marginLeft: ml, marginRight: mr, marginHorizontal: mh,
          backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
          height: h, width: w, fontFamily: ff, fontSize: fs, fontWeight: fw, color,
        }
      })

      ,
      stl, col, orientation
    ]}
    onPress={props.onClick} ref={(e) => {
      setStyleRef(props, e, ref, setinnerHTML, false);
    }}>{innerHTML ? innerHTML : props.children}</Text>;
});

export const Init = React.forwardRef((props, ref) => {
  return <_text ref={ref} style={{ width: 0, height: 0, padding: 0, margin: 0 }} />
})



// export const Input = (props) => <Component {...props} Component={_Input} />


export const Container = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={s.Container} {...props} Component={View} />

export const ContainerFix = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={Platform.OS === 'web' ? s.ContainerWeb : s.Container} {...props} Component={View} />

export const Container2 = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={Platform.OS === 'web' ? s.ContainerWeb2 : s.Container} {...props} Component={View} />

export const ContainerNavigation = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={Platform.OS === 'web' ? s.ContainerNavigation : s.Container} {...props} Component={View} />

export const ContainerTab = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={s.Container} {...props} Component={View} />

export const Div = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={s.div} {...props} Component={View} />

export const Row = (props) => <Component onStartShouldSetResponder={props.onClick} initalClass={s.row} {...props} Component={View} />

export const Column = (props) => <Component onStartShouldSetResponder={props.onClick} {...props} Component={View} />


export const Span = (props) => <Component onStartShouldSetResponder={props.onClick} {...props} Component={View} />

export const Press = (props) => <Component onPress={props.onClick} {...props} style={[props.onClick ? { cursor: 'pointer' } : { cursor: '' }, props.style]} Component={Pressable} />

export const PressView = (props) =>
  Platform.OS === 'web' ?
    <Component onPress={props.onClick} {...props} style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} Component={Pressable} />
    :
    <Component onTouchEnd={props.onClick} {...props} Component={View} />


export const PressView2 = (props) =>
  <Component onPress={props.onClick} {...props} style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} Component={Pressable} >
    <View style={{ width: '100%', height: '100%' }} >
      {props.children}
    </View>
  </Component>


export const PressScrollView = (props) =>
  <Component onPress={props.onClick} {...props} style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} Component={Pressable} >
    <ScrollView style={{ width: '100%', height: '100%' }} >
      {props.children}
    </ScrollView>
  </Component>



export const ImgBackground = (props) => <Component source={props.src} {...props} Component={ImageBackground} />

export const Img = (props) => <ComponentImage style={[props.style]} source={!props.src.uri ? props.src : { ...props.src, ...{ cache: 'force-cache' } }} {...props} Component={Image} />

// export const FastImg = React.forwardRef((props, ref) => <FastImage ref={ref} {...props} />)

export const Scroll = (props) => <ComponentForScroll onStartShouldSetResponder={props.onClick} {...props} style={[{ flexWrap: 'nowrap' }, props.style]} Component={ScrollView} />

export const ScrollHorizontal = (props) => <ComponentForScroll onStartShouldSetResponder={props.onClick} {...props} style={[{ flexWrap: 'wrap' }, props.style]} horizontal={true} Component={ScrollView} />

export const FlatList = ({ cacheId, pageLimit, loading = true, column1, column2, column3, column4, column5, column6, renderItem, numColumns, data, keyExtractor, ...props }) => {

  const width = Dimensions.get('window').width
  const [index, setindex] = useState(0)

  let column
  if (width <= 320) column = column1
  else if (width > 320 && width <= 480) column = column2
  else if (width > 480 && width <= 768) column = column3
  else if (width > 768 && width <= 1024) column = column4
  else if (width > 1024 && width <= 1440) column = column5
  else if (width > 1440) column = column6


  const [ass, setass] = useState(true)
  const [page, setpage] = useState(1)
  const [currentPage, setcurrentPage] = useState(1)
  const [current, setcurrent] = useState([])
  const [cacheData, setcacheData] = useState([])
  const netInfo = useNetInfo()

  useEffect(() => {
    if (cacheId) {
      (async () => {
        const preCache = await AsyncStorage.getItem(cacheId)
        if ((netInfo.isConnected && data.length) && ((!preCache) || (((preCache && JSON.parse(preCache)) && (JSON.parse(preCache)?.length !== data.length))) || ((JSON.parse(preCache)?.length === data.length) && ((JSON.parse(preCache)[0].info && JSON.parse(preCache)[0].info !== data[0].info) || (JSON.parse(preCache)[0].title && JSON.parse(preCache)[0].title !== data[0].title)))) ) {
          await AsyncStorage.setItem(cacheId, JSON.stringify(data))
        }
      })();
      (async () => {
        const cacheData = await AsyncStorage.getItem(cacheId)
        if (cacheData) {
          const dataParse = JSON.parse(cacheData)
          dataParse.length && setcacheData(dataParse)
        }
      })()
    }
  }, [data])



  if (!pageLimit) {
    return (
      (data?.length || cacheData.length)
        ?
        <>
          <ComponentForScroll
            {...props}
            style={[{ flexWrap: 'nowrap' }, props.style]}
            data={data.length ? data : cacheData}
            renderItem={({ item, index }) =>
              <>
                <View style={{ position: 'absolute', height: 0, width: 0 }} ref={() => setindex(index)} ></View>

                {renderItem({ item, index })}
              </>
            }
            flatlist={true}
            keyExtractor={keyExtractor ? keyExtractor : (item, index) => item._id}
            numColumns={numColumns ? numColumns : column}
            key={numColumns ? numColumns : column}
            Component={_FlatList}
            ListFooterComponent={() => data[data.length - 1]?._id !== data[index]?._id ? <_Loading scale={1.5} time={99999} /> : <></>}
          />
        </>
        :
        loading ? <_Loading /> : <View />
    )
  }
  else {

    return (
      (data?.length || cacheData.length)
        ?
        <>
          <Component
            style={[{ flexWrap: 'nowrap', paddingBottom: 50 }, props.style]}
            {...props}
            data={current}
            renderItem={({ item, index }) =>
              <View style={{ position: 'absolute', height: 0, width: 0 }} ref={() => setindex(index)} ></View>
              &&
            renderItem({ item, index })}
            flatlist={true}
            keyExtractor={keyExtractor ? keyExtractor : (item, index) => item._id}
            numColumns={numColumns ? numColumns : column}
            key={numColumns ? numColumns : column}
            Component={_FlatList}
            ListFooterComponent={() => current[current.length - 1]?._id !== current[index]?._id ? <_Loading scale={1.5} time={99999} /> : <></>}
          />

          <Column w='100%' pos='absolute' b={2} ai='center' >
            <_Pagination
              item={data.length ? data : cacheData}
              current={current}
              setcurrent={setcurrent}
              pageLimit={pageLimit}
              ass={ass} setass={setass}
              page={page} setpage={setpage}
              currentPage={currentPage}
              setcurrentPage={setcurrentPage} />
          </Column>
        </>
        :
        loading ? <_Loading /> : <View />
    )
  }
}

export const FlatListHorizontal = (props) => <ComponentForScroll flatlist={true} {...props} style={[{ flexWrap: 'wrap' }, props.style]} horizontal={true} Component={_FlatList} />

export const Vlist = (props) => <VirtualizedList keyExtractor={item => item._id} getItemCount={(data) => data.length} getItem={(data, index) => (data[index])} {...props} />

export const H1 = (props) => <_text ta='right' {...props} initalClass={s.h1} />

export const H2 = (props) => <_text ta='right' {...props} initalClass={s.h2} />

export const H3 = (props) => <_text ta='right' {...props} initalClass={s.h3} />

export const H4 = (props) => <_text ta='right' {...props} initalClass={s.h4} />

export const H5 = (props) => <_text ta='right' {...props} initalClass={s.h5} />

export const H6 = (props) => <_text ta='right' {...props} initalClass={s.h6} />

export const P = (props) => <_text ta='right' {...props} initalClass={s.p} />

export const Ps = (props) => <_text ta='right' {...props} initalClass={s.p} />

export const Pl = (props) => <_text ta='right' {...props} initalClass={s.p} ff='IRANSansWeb-Light' />

export const Pfa = (props) => <_text ta='right' fs={16} {...props} style={[Platform.select({ ios: { fontFamily: 'B Baran' }, default: { fontFamily: 'B Baran Regular' } }), props.style]} />

export const Py = (props) => <_text ta='right' fw='bold' {...props} ff='Yekan Bakh Regular' />

export const I = (props) => <_text ta='right' {...props} initalClass={s.i} />

export const Br = (props) => <_text {...props} initalClass={s.br} />

export const Hr = (props) => <_text {...props} initalClass={s.hr} />

export const Icon = (props) => <_icon style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} onPress={props.onClick} {...props} />

export const A_icon = (props) => <Aicon style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} onPress={props.onClick} {...props} />

export const M_icon = (props) => <Micon style={[props.onClick && Platform.OS === 'web' && { cursor: 'pointer' }, props.style]} onPress={props.onClick} {...props} />

export const Animated = _Animated

export const StyleSheet = _StyleSheet