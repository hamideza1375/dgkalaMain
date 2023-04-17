import React, { memo } from 'react'
import { Platform } from 'react-native'
import { Img, P, Press, Py, ScrollSlider, Column } from '../../../../other/Components/Html'
import LinearGradient from '../../../../other/Components/other/LinearGradient'
import spacePrice from '../../../../other/utils/spacePrice'
import s from '../../client.module.scss'
import CardItem from '../CardItem'

const SliderPopulars = (p) => {
  
  return (
    <>
      <Column h={330} >

        <Img class={s.o_img} style={{ position: 'absolute', top: 255, left: 35, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass23.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 20, left: 2, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 25, left: 50, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 230, right: 55, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 235, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 240, left: 15, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass12.png')} />

        <Column fd='row' ai='center' mt={7}>
          <P mr={15} fs={15} color='#444' >محبوب ترین ها</P>
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginHorizontal: 25 }} ></LinearGradient>
        </Column>
        <Column class={s.p_offerGlass2} t={0}></Column>
        <Column class={s.p_offerGlass} t={0}></Column>
        <ScrollSlider
          style={[{ height: 300, minHeight: 300 }, Platform.OS !== 'web' ? { paddingRight: 290, height: 220 } : { paddingRight: 10, height: 220 }]}
          ccStyle={{ height: 300, minHeight: 300, justifyContent: 'center' }}
          data={p.populars}
          renderItem={({ item, index }) => (
            <Column /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
              <CardItem item={item} spacePrice={spacePrice} w={170} onClick={() => { p.navigation.navigate('SingleItem', { id: item._id }) }} />
            </Column>
          )}
        />
        <Press fd='row' onClick={() => p.navigation.navigate('ChildPopulars') } pos='absolute' b={10} l={10} z={2}><Py color='#fff' >نمایش بیشتر </Py><P mt={1} mr={2} color='#fff' >↩</P></Press>
      </Column>
    </>
  )
}

export default memo(SliderPopulars)