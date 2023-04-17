import React from 'react'
import { Column, Img, Press, Span } from '../Html'

const card2 = ({csrc=.9, row = false, cStyle, imgStyle, imageWidth = '100%', onClick, img, src, br = 4, brImg, style, border = [], coulumn1, coulumn2, coulumn3, coulumn4, coulumn5, coulumn6, h = '100%', w = '100%', c1, c2, c3, c4, c5, c6, bgcolor, ...p }) => {

  return (
    <Column fd={row ? 'row' : 'column'} style={style} h={h} w={w} as={'center'} br={br} border={border.length ? border : [1]} {...p} >

      {((img) || (src)) ?
        <Span h={'45%'} f={csrc} ai='center' >
          {src && <Press onClick={onClick} h='100%' w='100%' ai='center' ><Img id='card2Image' w={imageWidth} h='100%' style={[{ resizeMode: 'stretch', borderTopRightRadius: br, borderTopLeftRadius: br, borderRadius: brImg }, imgStyle]} src={src} /></Press>}
        </Span>
        :
        <></>
      }

      <Span f={1} h={((img) || (src)) ? '55%' : '100%'} bgcolor={bgcolor} br={br}>
        {coulumn1 && <Span style={{ cStyle }} f={c1 ? c1 : 1}>{coulumn1}</Span>}
        {coulumn2 && <Span style={{ cStyle }} f={c2 ? c2 : 1}>{coulumn2}</Span>}
        {coulumn3 && <Span style={{ cStyle }} f={c3 ? c3 : 1}>{coulumn3}</Span>}
        {coulumn4 && <Span style={{ cStyle }} f={c4 ? c4 : 1}>{coulumn4}</Span>}
        {coulumn5 && <Span style={{ cStyle }} f={c5 ? c5 : 1}>{coulumn5}</Span>}
        {coulumn6 && <Span style={{ cStyle }} f={c6 ? c6 : 1}>{coulumn6}</Span>}

      </Span>

    </Column>
  )
}

export default card2