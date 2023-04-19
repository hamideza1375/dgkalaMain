import React, { useState } from 'react';
import { A_icon, Br, Div, Dropdown, Icon, M_icon, Span } from '../Components/Html'

function _Dropdown() {

  const [show, setshow] = useState(true)

  return (
    <Div style={{ width: 500, height: 500, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}
      onClick={() => { setshow(setshow(!show)); }}
    >

      <Span mb={30} >
        <Dropdown
          // a_icon='paperclip'
          // m_icon='paperclip'
          // icon='paperclip'
          child={<Span mr={3} mt={1} >child</Span>}
          // iconFalse
          top
          color='#000'
          border={[11, 'red']}
          showBgcolor="#07a"
          show={show}
          setshow={setshow}
        // style={{  }}

        >
          <Div style={{ flexDirection: 'row', justifyContent: 'space-around', }} >
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <A_icon name={'camera'} color="#ddd" size={25} style={{ padding: 7 }} />
          </Div>
          <Div style={{ flexDirection: 'row', justifyContent: 'space-around', }} >
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <A_icon name={'camera'} color="#ddd" size={25} style={{ padding: 7 }} />
          </Div>
        </Dropdown>
      </Span>


      <Span>
        <Dropdown
          icon='paperclip'
          showBgcolor="#888"
          show={show}
          setshow={setshow}
        >
          <Div style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
            <Icon name={'camera'} color="#ddd" size={25} style={{ padding: 7 }} />
          </Div>
        </Dropdown>
      </Span>

    </Div>
  )
}



export default _Dropdown;