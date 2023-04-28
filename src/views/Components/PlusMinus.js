import React from 'react'
import { Column, Icon, P } from '../../other/Components/Html'

const PlusMinus = () => {
  return (
    <Column jc='center' >
      <Column style={{ height: 20, width: 20 }} >
        <Icon name='plus' color='#0ad' size={20} /* onClick={() => { plus() }} */ />
      </Column>

      <Column style={{ height: 20, width: 20 }} >
        <P mt={3} ta='center' >0</P>
      </Column>


      <Column style={{ height: 20, width: 20 }} >
        <Icon name='minus' color='#e11' size={20} /* onClick={() => { minus() }} */ />
      </Column>
    </Column>)
}

export default PlusMinus