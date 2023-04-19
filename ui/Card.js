import React from 'react';
import { Card, Span } from '../Components/Html'

function _Card() {
  return (
    <Span>
      <Card
        alert={true}
        bgcolor={'red'}
        color={'silver'}
        border={[4, 'red']}
        dr='ltr'
        imageStyle={{width:100}}
        header={'salam salam'}
        // headerRow={<Span>nduicjcu</Span>}
        footerRow={<Span ><P>nduicjcu</P></Span>}
        body={'salam salam'}
        footer={'salam  salam'}
        img={require('../assets/images/a1.jpg')}
        style={{ width: '60%', height:150 }}
      />
    </Span>
  )
}

export default _Card;