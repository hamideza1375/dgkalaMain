import React from 'react'
import { Platform } from 'react-native'
import { Div, Img, P, ScrollSlider, Span } from '../../../../other/Components/Html'
import LinearGradient from '../../../../other/Components/other/LinearGradient'
import spacePrice from '../../../../other/utils/spacePrice'
import s from '../../client.module.scss'
import CardItem from '../CardItem'
import { localhost } from '../../../../other/utils/axios/axios'

const SliderSimilars = (p) => {

  p._client.getSimilars()

  return (
    <>
      <Span h={330}>

      <Img class={s.o_img} style={{ position: 'absolute', top: 20, left: 2, zIndex: -1, width: 88, height: 88 }} src={{uri:`${localhost}/images/glass2.png`}} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 25, left: 50, zIndex: -1, width: 88, height: 88 }} src={{uri:`${localhost}/images/glass1.png`}} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 235, right: 55, zIndex: -1, width: 88, height: 88 }} src={{uri:`${localhost}/images/glass1.png`}} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 231, zIndex: -1, width: 88, height: 88 }} src={{uri:`${localhost}/images/glass2.png`}} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 240, left: 15, zIndex: -1, width: 88, height: 88 }} src={{uri:`${localhost}/images/glass12.png`}} />
  

        <Span fd='row' ai='center' mt={8}>
          <P mr={15} fs={15} color='#444' >محصولات مشابه</P>
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginHorizontal: 25 }} ></LinearGradient>
        </Span>
        <Div class={s.p_offerGlass2} t={0}></Div>
          <Div class={s.p_offerGlass} t={0}></Div>

          <ScrollSlider
            style={[{ height: 300, minHeight: 300 }, Platform.OS !== 'web' ? { paddingRight: 290, height: 220 } : { paddingRight: 10, height: 220 }]}
            ccStyle={{ justifyContent:'center', height: 300, minHeight: 300}}
            data={p.similar}
            renderItem={({ item, index }) => (
              <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
              <CardItem item={item} spacePrice={spacePrice} w={170} onClick={() => { 
                p.navigation.navigate('SingleProduct', { id: item._id }) 
                p.setsingleItemChange(!p.singleItemChange)
                }}/>
            </Span>
            )}
          />
      </Span>
    </>
  )
}

export default SliderSimilars