import React from 'react'
import { Img, Column } from '../../../../other/Components/Html'

const Banner = () => {
  return (
    <Column>
      <Column fd='row'  >
        <Column f={1} h={150} mh={4} br={5} sh={{o:1,r:6,c:'#aa9a'}} >
          <Img br={5}  style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../../../other/assets/images/banner1.png')} />
        </Column>
        <Column f={1} h={150} mh={4} br={5} sh={{o:1,r:6,c:'#b77a'}} >
          <Img style={{resizeMode: 'stretch'}} br={5} f={1} src={require('../../../../other/assets/images/banner2.png')} />
        </Column>
      </Column>
    </Column>
  )
}

export default Banner