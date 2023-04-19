import React, { useState } from 'react';
import { Table } from '../Components/Html'

function App() {
  const [current] = useState([
    {title:'aaa',price:"111",info:'111i', available:1},
    {title:'bbbb',price:"222",info:'222i', available:0},
    {title:'cccc',price:"333",info:'333i', available:1},
    {title:'ddd',price:"444",info:'444i', available:1}
  ])
  const [$food, set$food] = useState([])

  return (
    <Table
      color={['#555', '#656565', 'white']}
      border={[1, '#353535']}
      header={['موجودیت', 'ویرایش', 'حذف', ' قیمت', 'عنوان']}
      body={['title', 'ویرایش', ' حذف', 'price', 'title']}
      btn1={'red'}
      btn1onClick={() => { alert($food[0].title) }}
      btn2={'green'}
      btn2onClick={() => { alert(current[$food[1]].title) }}
      btn3={'blue'}
      btn3onClick={() => { alert('blue') }}
      // h={55}
      // fontSize={9}
      btn1Opacity
      object={current}
      setobject={set$food}
    />
  )
}

export default App;






