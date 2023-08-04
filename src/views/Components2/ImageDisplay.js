import React, { useEffect, useState } from 'react'
import _useEffect from '../../controllers/_initial'
import { Card2, Img, Press, Column } from '../../other/Components/Html'

const ImageDisplay = (p) => {
  let imageMap = []
  imageMap = [p.logoUrl, p.logoUrl, p.logoUrl, p.logoUrl]

  const [_item, set_item] = useState('')

  useEffect(() => {
    p.$?.id(imageMap[0])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
    p.$?.id(imageMap[1])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
    p.$?.id(imageMap[2])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
    p.$?.id(imageMap[3])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
    if (_item) {
      p.$?.id(_item)?.setNativeProps({ style: { borderWidth: 1, borderColor: 'aqua' } })
      p.$?.id('img').$({ src: `${localhost}/upload/slider/${_item}` })
    }
    else {
      p.$?.id(imageMap[0])?.setNativeProps({ style: { borderWidth: 1, borderColor: 'aqua' } })
      p.$?.id('img').$({ src: `${localhost}/upload/slider/${imageMap[0]}` })
    }
  }, [p.singleItem])

  _useEffect(() => {
    return () => {
      p.$?.id(imageMap[0])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
      p.$?.id(imageMap[1])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
      p.$?.id(imageMap[2])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
      p.$?.id(imageMap[3])?.setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })
    }
  }, [])


  return (
    <Column minw={250} w='100%' ai='center' jc='center'>
      <Card2 h={400} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white', borderRadius: 8 }}

        c1={4} coulumn1={
          <Column f={1} >
            <Column f={1} >
              {imageMap[0] && <Img id='img' f={1} style={{ resizeMode: 'stretch', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} src={imageMap[0]} />}
            </Column>
          </Column>
        }
        c2={1} coulumn2={
          <Column fg={1} style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}  >
            {imageMap.length && (imageMap).map((item, index) => (
              <Press f={1} key={index} id={item} onClick={() => {
                imageMap.forEach(img => (item !== img && p.$.id(img).setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })))
                p.$.id(item).setNativeProps({ style: { borderWidth: 1, borderColor: 'aqua' } });
                p.$.id('img').$({ src: item })
                set_item(item)
              }}   >
                {item ? <Img f={1} m={4} br={4} style={{ resizeMode: 'stretch' }} src={item} /> : <></>}
              </Press>
            ))}

          </Column>
        }
      >
      </Card2>
    </Column>
  )
}

export default ImageDisplay