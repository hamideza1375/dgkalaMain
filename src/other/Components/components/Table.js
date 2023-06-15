import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import seconder from '../../utils/seconder';
import spacePrice from '../../utils/spacePrice';
import { truncate } from '../../utils/truncate';
import { Row, Span, P, Button, H6, FlatList, Loading, Press, Column } from '../Html';
import Pagination from './Pagination';





const Th = (props) => <View {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#888', borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]}>
  <H6 style={[{ textAlign: 'center', paddingVertical: 10, }, props.textStyle]}> {props.children}</H6></View>

const Tb = (props) => <Press onClick={props.onPress} onPressIn={props.onPressIn} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#aaa', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]}>
  <P style={[{ fontFamily: 'IRANSansWeb-light', textAlign: 'center', color: '#222', paddingVertical: 10, }, props.textStyle]}> {props.children}</P></Press>

const Tbtn = (props) => <View style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5, }, props.style]}><Button {...props} textStyle={[{ fontSize: 15, textAlign: 'center' }, props.textStyle]} style={[{ width: '99.9%', flex: 1 }, { paddingHorizontal: 0 }]}>{props.children}</Button></View>
let odd = [];

function Table({ pageLimit, titleClick, children, fontSize, mt = 0, border = [], object, setobject, h, w = '100%', body, header, color, btn1onClick, btn2onClick, btn3onClick, btn4onClick, btn5onClick, btn6onClick, btn7onClick, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn1Opacity, btn2Opacity, btn3Opacity, btn4Opacity, btn5Opacity, btn6Opacity, btn7Opacity
}) {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
      odd.push(i);
  }
  let bgColor = (key) => ([{ backgroundColor: odd.includes(key) ? color[0] : color[1], borderColor: border[1] ? border[1] : color[1] }]);
  let textStyle = { color: color[2], textShadowColor: color[2] };

  const [index, setindex] = useState(0)
  const [ass, setass] = useState(true)
  const [page, setpage] = useState(1)
  const [currentPage, setcurrentPage] = useState(1)
  const [current, setcurrent] = useState([])


  const offerTime = (item) => {
    let dt = 0
    if (item.offerTime?.exp > new Date().getTime()) {
      seconder(item.offerTime?.exp, ({ days, hours, minutes, seconds }) => (
        dt = days + '/' + hours + ':' + minutes
      ))
    }
    return dt
  }




  return (
    <View style={{ width: w, marginTop: mt, alignItems: 'flex-start', maxHeight: '100%' }}>
      {(!pageLimit) ?
        <>
          <Column fd='row-reverse' w='100%'>
            {header.map((f, i) => (<Th key={i} style={[bgColor(1)]} textStyle={[textStyle, { fontSize }]}>{f}</Th>))}
          </Column>

          {object.length ?
            <>
              <FlatList
                keyExtractor={(f) => f && f._id}
                data={object}
                contentContainerStyle={{ flexGrow: 1, width: '100%', paddingBottom: 1 }}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => (
                  <>
                    <View key={index} onLayout={() => {
                    }} ref={() => { setindex(index) }} style={{ flexDirection: 'row-reverse', width: '100%' }}>
                      {body.map((b, n) => (
                        btn1onClick && n === 0 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn1onClick(); }} style={[bgColor(index), btn1Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn1}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn1Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                          btn2onClick && n === 1 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn2onClick(); }} style={[bgColor(index), btn2Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn2}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn2Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                            btn3onClick && n === 2 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn3onClick(); }} style={[bgColor(index), btn3Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn3}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn3Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                              btn4onClick && n === 3 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn4onClick(); }} style={[bgColor(index), btn4Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn4}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn4Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                btn5onClick && n === 4 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn5onClick(); }} style={[bgColor(index), btn5Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn5}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn5Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                  btn6onClick && n === 5 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn6onClick(); }} style={[bgColor(index), btn6Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn6}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn6Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                    btn7onClick && n === 6 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn7onClick(); }} style={[bgColor(index), btn7Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn7}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn7Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                      <Tb key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={b === 'title' ? (() => { setobject([item, index]); titleClick && titleClick() }) : () => { }} style={[bgColor(index), { cursor: b === 'title' ? 'pointer' : '' }]} textStyle={[textStyle, { fontSize, width: '98%' }]}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || b === 'brand' && item.brand || b === 'phone' && item.phone || b === 'sold' && String(item.sold) || b === 'quits' && String(item.quits) || b}</Tb>
                      ))}
                    </View>

                  </>
                )}
              />
              <Span p={children ? 5 : 0} w='100%' bgcolor={odd.includes(index - 1) ? color[0] : color[1]} ai='center' border={[1, border[1]]} btw={0} >{children}</Span>
              {object[object.length - 1]?._id !== object[index]?._id && <ActivityIndicator style={{ alignSelf: 'center', transform: [{ scale: 1.2 }] }} />}
            </>
            :
            <Loading />
          }
        </>
        :
        object.length ?
          <>
            <Column fd='row-reverse' w='100%'>
              {header.map((f, i) => (<Th key={i} style={[bgColor(1)]} textStyle={[textStyle, { fontSize }]}>{f}</Th>))}
            </Column>
            {current.length ?
              <>
                <FlatList
                  keyExtractor={(f) => f && f._id}
                  data={current}
                  contentContainerStyle={{ flexGrow: 1, width: '100%', paddingBottom: 1 }}
                  style={{ width: '100%' }}
                  renderItem={({ item, index }) => (
                    <>
                      <View key={index} onLayout={() => {

                      }} ref={() => { setindex(index) }} style={{ flexDirection: 'row-reverse', width: '100%' }}>
                        {body.map((b, n) => (
                          btn1onClick && n === 0 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn1onClick(); }} style={[bgColor(index), btn1Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn1}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn1Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                            btn2onClick && n === 1 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn2onClick(); }} style={[bgColor(index), btn2Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn2}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn2Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                              btn3onClick && n === 2 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn3onClick(); }} style={[bgColor(index), btn3Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn3}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn3Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                btn4onClick && n === 3 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn4onClick(); }} style={[bgColor(index), btn4Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn4}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn4Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                  btn5onClick && n === 4 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn5onClick(); }} style={[bgColor(index), btn5Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn5}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn5Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                    btn6onClick && n === 5 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn6onClick(); }} style={[bgColor(index), btn6Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn6}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn6Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                      btn7onClick && n === 6 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={() => { btn7onClick(); }} style={[bgColor(index), btn7Opacity && { opacity: item.available ? 1 : .2 }]} textStyle={{ fontSize }} bgcolor={btn7}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || btn7Opacity ? (item.available ? '✔' : 'ناموجود') : b === 'off' ? (offerTime(item) ? '%' + item.offerValue + ' | ' : '') + offerTime(item) : b}</Tbtn> :
                                        <Tb key={n} onPressIn={() => { setobject && setobject([item, index]); }} onPress={b === 'title' ? (() => { setobject([item, index]); titleClick && titleClick() }) : () => { }} style={[bgColor(index), { cursor: b === 'title' ? 'pointer' : '' }]} textStyle={[textStyle, { fontSize, width: '98%' }]}>{b === 'price' && spacePrice(item.price) || b === 'title' && truncate(item.title, 30, false) || b === 'total' && spacePrice(item.total) || b === 'brand' && item.brand || b === 'phone' && item.phone || b === 'sold' && String(item.sold) || b === 'quits' && String(item.quits) || b}</Tb>
                        ))}
                      </View>

                    </>
                  )}
                />
                <Span p={children ? 5 : 0} w='100%' bgcolor={odd.includes(index - 1) ? color[0] : color[1]} ai='center' border={[1, border[1]]} btw={0} >{children}</Span>
                {current[current.length - 1]?._id !== current[index]?._id && <ActivityIndicator style={{ alignSelf: 'center', transform: [{ scale: 1.2 }] }} />}
              </>
              :
              <Loading />
            }
            <Pagination
              item={object}
              current={current}
              setcurrent={setcurrent}
              pageLimit={pageLimit}
              ass={ass} setass={setass}
              page={page} setpage={setpage}
              currentPage={currentPage}
              setcurrentPage={setcurrentPage} />
          </>
          :
          <Loading/>
      }
    </View>
  );
}


export default Table
