import React from 'react';
import { Column, Form } from '../../other/Components/Html';

export default function SendProposal(p) {
  return (
    <Column f={1}>
      <Form mAutoFocus m c {...p} onClick={() => p._user.sendProposal()} />
    </Column>
  )
};

