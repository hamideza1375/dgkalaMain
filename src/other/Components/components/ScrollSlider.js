import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Platform, View } from 'react-native'
import s from './style.module.scss';
import { Span } from '../Html';


var das = []

function ScrollSlider(p) {
  const { data, renderItem, h, style, ccStyle } = p
  const ref = useRef()
  const [scroll, setscroll] = useState(0)
  const [scroll2, setscroll2] = useState(true)

  const count = useRef({ count: 1 })
  const interval = useRef({ interval: null })

  const open = () => {
    if (scroll2) {
      { ref.current?.scrollToIndex({ index: count.current.count }); }
      count.current.count = count.current.count + 2
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



  return (
    <Span
      style={{ cursor: 'grab' }}
      class={s.selectNone}
      // <Span onMouseLeave={() => { if (Platform.OS === 'web') if (navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows') ref.current?.setNativeProps({ style: { overflow: 'hidden' } }); }}
      onMouseUp={() => { setscroll2(false); setTimeout(() => { das = [] }, 10); }}
      onMoveShouldSetResponder={() => { setscroll2(false); }}
      onTouchMove={() => { setscroll2(false); }} >
      <View
        onMoveShouldSetResponder={(e) => {
          setscroll2(!scroll2)
          if (Platform.OS === 'web') {
            if (navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows') {
              ref.current?.setNativeProps({ style: { overflowX: 'auto' } });
              das.push(e.nativeEvent.pageX)
              ref.current?.scrollToOffset({ animated: true, offset: (scroll) + ((das[0] - das[das.length - 1]) * 1) })
            }
          }
          setscroll2(false)

        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={Platform.OS !== 'web' ? false : !navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows' ? true : false}
          dir='ltr'
          ref={ref}
          horizontal
          {...p}
          renderItem={renderItem}
          contentContainerStyle={[{ flexGrow: 1, direction: 'rtl' }, ccStyle]}
          onLayout={(e) => { let int = setInterval(sum, 3000); function sum() { if (scroll2 && !(count.current.count >= data.length)) { open() } else clearInterval(int) } interval.current.interval = int }}
          // scrollEventThrottle={0}
          // alwaysBounceHorizontal={false}
          // alwaysBounceVertical={false}
          // contentInset={{ left: 0 }}
          onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
          style={[{ height: h ? h : 150, width: '99%', borderRadius: 5, flexWrap: 'wrap' }, style]}
        />
      </View>
    </Span>
  )
}

export default ScrollSlider

