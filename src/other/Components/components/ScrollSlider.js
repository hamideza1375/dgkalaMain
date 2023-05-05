import React, { startTransition, useCallback, useRef, useState } from 'react'
import { FlatList, Platform } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import s from './style.module.scss';
import { Loading, Column } from '../Html';


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
    <Column
      style={{ cursor: 'grab' }}
      class={s.selectNone}
      onMouseUp={() => { setscroll2(false); setTimeout(() => { das = [] }, 10); }}
      onMoveShouldSetResponder={() => { setscroll2(false); }}
      onTouchMove={() => { setscroll2(false); }} >
      <Column
        onMoveShouldSetResponder={(e) => {
          setscroll2(!scroll2)
          if (Platform.OS === 'web') {
            if (navigator?.userAgent?.match('Mobile') != 'Mobile') {
              // ref.current?.setNativeProps({ style: { overflowX: 'auto' } });
              das.push(e.nativeEvent.pageX)

              startTransition(() => {
                setTimeout(() => {

                  ref.current?.scrollToOffset({ offset: (scroll) + ((das[0] - das[das.length - 1]) * 2.2) })
                }, 0);
              })

            }
          }
          setscroll2(false)

        }}
      >
        {data.length ?
          <FlatList
          getItemLayout={(data, index) => (
            {length: (160 + 10), offset: (160 + 10) * index, index}
            // {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
          )}
            initialNumToRender={1}
            showsHorizontalScrollIndicator={false}
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
          :
          <Column w='100%' ><Loading /></Column>
        }
      </Column>
    </Column>
  )
}

export default ScrollSlider

