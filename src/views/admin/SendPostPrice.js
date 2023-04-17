import React from 'react'
import _useEffect from '../../controllers/_initial'
import { Column, Form } from '../../other/Components/Html'
import { getPostPrice } from '../../services/adminService'

const SendPostPrice = (p) => {

  _useEffect(() => {
    getPostPrice().then(({ data }) => { p.setprice(data.value); })
    return () => p.setprice('')
  }, [])

  return (
      <Column f={1} >
        <Form pr {...p} onClick={() => { p._admin.sendPostPrice() }} />
      </Column>
  )
}

export default SendPostPrice