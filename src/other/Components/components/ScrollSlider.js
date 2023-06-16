import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FlatList, Platform } from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native';
import s from './style.module.scss';
import { Loading, Column } from '../Html';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';


var das = [], old = 0, time = 2000

function ScrollSlider(p) {
  const { cacheId, data, renderItem, h, style, ccStyle } = p
  const ref = useRef()
  const [scroll2, setscroll2] = useState(true)
  const [cacheData, setcacheData] = useState([])

  const count = useRef({ count: 1 })
  const interval = useRef({ interval: null })

  const open = () => {
    if (scroll2) {
      try { ref.current?.scrollToIndex({ index: count.current.count }); }
      catch (err) { }
      count.current.count = count.current.count + 2
      old = count.current.count
    }
  };

  const open2 = () => {
    if (parseInt(count.current.count) >= old + 1 || parseInt(count.current.count) <= old - 1) {
      old = (parseInt(count.current.count))
      try { ref.current?.scrollToIndex({ index: parseInt(count.current.count) }); }
      catch (err) { }
    }
  };


  if (count.current.count + 1 >= data.length) { clearInterval(interval.current.interval) }
  if (!scroll2) { clearInterval(interval.current.interval) }


  useFocusEffect(useCallback(() => {

    if (Platform.OS === 'web')
      window.addEventListener('resize', (event) => {
        setscroll2(false);
        clearInterval(interval.current.interval)
      });

    return () => {
      setscroll2(false);
      clearInterval(interval.current.interval)
    }
  }, []))


  const netInfo = useNetInfo()

  useEffect(() => {
    if (cacheId) {
      (async () => {
        const preCache = await AsyncStorage.getItem(cacheId)
        if ((netInfo.isConnected && data.length) && ((!preCache) || (((preCache && JSON.parse(preCache)) && (JSON.parse(preCache)?.length !== data.length)))) || ((JSON.parse(preCache)?.length === data.length) && ((JSON.parse(preCache)[0].info && JSON.parse(preCache)[0].info !== data[0].info) || (JSON.parse(preCache)[0].title && JSON.parse(preCache)[0].title !== data[0].title)))) {
          await AsyncStorage.setItem(cacheId, JSON.stringify(data))
        }
      })();
      (async () => {
        const cacheData = await AsyncStorage.getItem(cacheId)
        if (cacheData) JSON.parse(cacheData) && (JSON.parse(cacheData)?.length !== 1) && (setcacheData(JSON.parse(cacheData)))
      })()
    }
  }, [data])


  return (
    <Column
      style={{ cursor: 'grab' }}
      class={s.selectNone}
      onMouseUp={(e) => { setscroll2(false); setTimeout(() => { das = [] }, 195); }}
      onMoveShouldSetResponder={() => { if (data.length > 5) setscroll2(false); else setTimeout(() => { setscroll2(false) }, 2500); }}
      onTouchMove={() => { if (data.length > 5) setscroll2(false); else setTimeout(() => { setscroll2(false) }, 2500); }} >
      <Column
        onMoveShouldSetResponder={(e) => {
          if (data.length > 5) setscroll2(false); else setTimeout(() => { setscroll2(false) }, 2500);
          if (Platform.OS === 'web')
            if (navigator?.userAgent?.match('Mobile') != 'Mobile') {
              das.push(e.nativeEvent.pageX)
              if (das[0] > das[1]) if ((count.current.count < data.length - 1)) count.current.count = count.current.count + .2
              if (das[0] < das[1]) if (count.current.count >= 1) count.current.count = count.current.count - .2
              setTimeout(() => {
                open2()
              }, 100);
            }
        }}

      >
        {(data.length || (cacheData.length > 1)) ?
          <FlatList
            getItemLayout={(data, index) => ({ length: (160 + 10), offset: (160 + 10) * index, index })}
            initialNumToRender={4}
            showsHorizontalScrollIndicator={false}
            dir='ltr'
            ref={ref}
            horizontal
            {...p}
            renderItem={renderItem}
            contentContainerStyle={[{ flexGrow: 1, direction: 'rtl' }, ccStyle]}
            onLayout={(e) => { let int = setInterval(sum, time); function sum() { if (scroll2 && !(count.current.count >= data.length)) { if (time < 3) time += 500; open() } else clearInterval(int) } interval.current.interval = int }}
            // scrollEventThrottle={0}
            // alwaysBounceHorizontal={false}
            // alwaysBounceVertical={false}
            // contentInset={{ left: 0 }}
            // onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
            style={[{ height: h ? h : 150, width: '99%', borderRadius: 5, flexWrap: 'wrap' }, style]}
            data={data.length ? data : cacheData}
          />
          :
          <Column w='100%' ><Loading /></Column>
        }
      </Column>
    </Column>
  )
}

export default ScrollSlider

