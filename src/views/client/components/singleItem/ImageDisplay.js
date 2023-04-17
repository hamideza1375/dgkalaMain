import React from 'react'
import _useEffect from '../../../../controllers/_initial'
import { Card2, Img, Press, Scroll, Span } from '../../../../other/Components/Html'
import { localhost } from '../../../../other/utils/axios/axios'

const ImageDisplay = (p) => {
  let imageMap = []
   imageMap = [p.singleItem.imageUrl1, p.singleItem.imageUrl2, p.singleItem.imageUrl3, p.singleItem.imageUrl4]

  _useEffect(() => {
    p.$.id(imageMap[0])?.setNativeProps({ style: { borderWidth: 1, borderColor: 'aqua' } })
  }, [p.singleItem])
  
  _useEffect(() => {
    return()=>{
    p.$.id(imageMap[1])?.setNativeProps({ style: { borderWidth: 0 } })
    p.$.id(imageMap[2])?.setNativeProps({ style: { borderWidth: 0 } })
    p.$.id(imageMap[3])?.setNativeProps({ style: { borderWidth: 0 } })
    }
  }, [])


  return (
    <Span minw={250} w='100%' ai='center' jc='center'>
      <Card2 h={400} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white', borderRadius: 8 }}

        c1={4} coulumn1={
          <Span f={1} >
            <Span f={1} >
              {p.singleItem.imageUrl1 && <Img id='img' f={1} style={{ resizeMode: 'stretch', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} src={{uri:`${localhost}/upload/childItem/${p.singleItem.imageUrl1}`}} />}
            </Span>
          </Span>
        }
        c2={1} coulumn2={
          <Scroll fg={1} ccStyle={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}  >
            {imageMap.length && (imageMap).map((item, index) => (
              <Press f={1} key={index} id={item} onClick={() => {
                imageMap.forEach(img => (item !== img && p.$.id(img).setNativeProps({ style: { borderWidth: 0, borderColor: 'white' } })))
                p.$.id(item).setNativeProps({ style: { borderWidth: 1, borderColor: 'aqua' } });
                p.$.id('img').$({ src: {uri:`${localhost}/upload/childItem/${item}`} })

              }}   >
               {item? <Img f={1} m={4} br={4} style={{ resizeMode: 'stretch' }} src={{uri:`${localhost}/upload/childItem/${item}`}} /> : <></> }
              </Press>
            ))}

          </Scroll>
        }
      >
      </Card2>
    </Span>
  )
}

export default ImageDisplay