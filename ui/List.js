import React, { useState } from 'react';
import { Div, List, P, Span } from '../Components/Html';


function App() {
  const [hidden, sethidden] = useState(true)

  return (
    <Div style={{ flex: 1, direction: 'rtl', borderWidth: 2, }} >

      <List
        h={35}
        sh={{ r: 5, o: .5 }}
        br={5}
        // m_icon='arrow-left'
        style={{ shadowRadius: 7, shadowOpacity: 2, shadowColor: '#555', }}
        color='black'
        bgcolor='green'
        hidden={hidden} sethidden={sethidden}
        fontSize={25}
        iconSize={35}
        icon='download'
        icon2='youtube'
        iconPress={() => { alert(1) }}
        icon2Press={() => { alert(2) }}
        header="توضیحات"
        // body="سلام"
        bodyRow={
          <Span >
            <P>salam</P>
            <P>salam</P>
            <P>salam</P>
          </Span>
        }
      />

      <List
        h={35}
        sh={{ r: 5, o: .5 }}
        br={5}
        // m_icon='arrow-left'
        hidden={hidden} sethidden={sethidden}
        fontSize={25}
        iconSize={35}
        icon='download'
        icon2='youtube'
        iconPress={() => { alert(1) }}
        icon2Press={() => { alert(2) }}
        header="توضیحات"
        body="سلام"
      />
      <List
        h={35}
        sh={{ r: 5, o: .5 }}
        br={5}
        // m_icon='arrow-left'
        hidden={hidden} sethidden={sethidden}
        fontSize={25}
        iconSize={35}
        icon='download'
        icon2='youtube'
        iconPress={() => { alert(1) }}
        icon2Press={() => { alert(2) }}
        header="توضیحات"
        body="سلام"
      />
      <List
        h={35}
        sh={{ r: 5, o: .5 }}
        br={5}
        // m_icon='arrow-left'
        hidden={hidden} sethidden={sethidden}
        fontSize={25}
        iconSize={35}
        icon='download'
        icon2='youtube'
        iconPress={() => { alert(1) }}
        icon2Press={() => { alert(2) }}
        header="توضیحات"
        body="سلام"
      />

      <List
        h={35}
        sh={{ r: 5, o: .5 }}
        br={5}
        // m_icon='arrow-left'
        hidden={hidden} sethidden={sethidden}
        fontSize={25}
        iconSize={35}
        icon='download'
        icon2='youtube'
        iconPress={() => { alert(1) }}
        icon2Press={() => { alert(2) }}
        header="توضیحات"
        body="سلام"
      />


    </Div>
  )
}

export default App;