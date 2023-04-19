import React from 'react'
import { P, Press, ScrollSlider } from '../Components/Html'
const _ScrollSlider = (p) => {
  return (
    <>
      <ScrollSlider {...p}
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },{id:6}, {id:7}]}
        // style={{}}
        // ccStyle={{}}
        renderItem={({ item }) => (
          <>
            <Press w={150} h={130} ><P bgcolor='red' w={'95%'} h={'100%'}>{item.id}</P></Press>
          </>
        )}
      />

    </>

  )
}

export default _ScrollSlider