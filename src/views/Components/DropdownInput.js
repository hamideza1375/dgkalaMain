import React from 'react'
import { Column, Dropdown, Icon, Input, Press } from '../../other/Components/Html'

const DropdownInput = ({dropdown, value, onChangeText, ...p}) => {
  return (
    <Press w='100%' h={50}  >
    <Column w={15} h={15} pos='absolute' z={1000} b={5} l={5} >
      <Icon name='caret-down' size={17} />
      <Column w={15} h={15} pos='absolute' z={1000} >
        <Dropdown value={dropdown} />
      </Column>
    </Column>
    <Input value={value} onChangeText={onChangeText} onClick={() => p.setshownDropdown(false)} id='inpt' />
  </Press>
  )
}

export default DropdownInput


{/* <DropdownInput value={p.code} onChangeText={p.setcode} dropdown={<Ps>p.code</Ps>} {...p} /> */}
