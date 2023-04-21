import React, { useState } from 'react';
import { Column, Table } from '../../other/Components/Html';

export default function ListUnAvailable(p) {
   p._admin.listUnAvailable()
  return (
    <Column f={1} style={{ width: '98%', alignSelf: 'center', marginTop: 15 }} >
      <ListUnAvailableTable {...p} />
    </Column>
  )
}


const ListUnAvailableTable = (p) => {
  const [listUnAvailabeTable,setlistUnAvailabeTable] = useState([])
  const changeAvailable =(id)=> p._admin.changeAvailable(id)
  return (
    <Table
      color={['#555', '#656565', 'white']}
      header={['موجودیت', 'عنوان']}
      body={['فعال', 'title']}
      btn1='#999'
      btn1onClick={() => listUnAvailabeTable[0]?._id && changeAvailable(listUnAvailabeTable[0]._id)}
      btn1Opacity
      object={p.listUnAvailabe}
      setobject={setlistUnAvailabeTable}
      h={50}
    />)
}
