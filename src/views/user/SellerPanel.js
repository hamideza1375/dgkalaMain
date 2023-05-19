import React, { useState } from 'react';
import _useEffect from '../../controllers/_initial';
import { Column, Table } from '../../other/Components/Html';

const SellerPanel = (p) => {
  const [setsellerItemsTable, setsetsellerItemsTable] = useState([])
  p._user.getAllProductForSeller()

  return (
    <Column f={1}>
      <Table
        color={['#fff', '#eee', 'black']}
        border={[1, '#ccc']}
        header={['واریز شده', 'فروش شده', 'تخفیف', 'عنوان']}
        body={['quits', 'sold', 'off', 'title']}
        btn3={'#e63'}
        btn3onClick={() => { }}
        titleClick={() => {setsellerItemsTable[0]?._id && p.navigation.navigate('SingleProduct', { id: setsellerItemsTable[0]._id }) }}
        object={p.sellerItems}
        setobject={setsetsellerItemsTable}
      />
    </Column>
  )
}

export default SellerPanel