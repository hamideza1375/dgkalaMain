import React from 'react'
import { B_icon, Div, Span } from '../Components/Html'

const _Slider = (p) => {
  return (
    <Div>
      <Span style={{ flexDirection: 'row' }}>
        <B_icon
          w={100}
          h={100}
          as='center'
          p={1}
          pt={1}
          pb={1}
          pl={1}
          pr={1}
          pv={1}
          ph={1}
          m={10}
          // mt={1}
          // mb={1}
          // ml={1}
          // mr={1}
          // mv={1}
          // mh={1}
          color='green'
          bgcolor='blue'
          border={[10]}
          scale={1}
          iconSize={40}
          a_icon='youtube'
          // m_icon='youtube'
          // icon='youtube'
          // style={{ margin: 10 }}
          onClick={() => alert('click')}
        />

        <B_icon size={.6} color="silver" bgcolor="red" icon='youtube' />
      </Span>
    </Div>)
}

export default _Slider