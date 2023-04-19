import React from 'react';
import { Input, Span } from '../Components/Html';



function _Input() {

  return (
    <Span style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Input
        ref={e => e && e.setNativeProps({ style: { color: 'red' } })}
        // fg
        // f
        // ta
        // dr='rtl'
        // as
        // fs
        // p
        // pt
        // pb
        // pl
        // pr
        // pv
        // ph
        // h={50}
        // w
        // m
        // mt
        // mb
        // ml
        // mr
        // mv
        // mh
        bgcolor={'#fff'}
        border={[.3,'red']}
        placeholder="fullname"
        pColor='#77f'
        icon={'youtube'}
        iconSize={20}
        color='silver'
        iconColor='#97a'
        style={{ backgroundColor: 'white', height: 40, width: 200 }} />
    </Span>
  )
}



export default _Input;