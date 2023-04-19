import React from 'react'
import { Card2, P, Span } from '../Components/Html'

const card2 = (p) => {
  return (
    <Card2 br={5} h={300} w={200} sh={{r:8,o:1,c:'blue',of:{width:0,height:1}}} style={{borderColor:'red'}} src={require('../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
    coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
    coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
    />
  )
}

export default card2