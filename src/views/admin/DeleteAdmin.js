import React from 'react';
import { Column, Form, P } from '../../other/Components/Html'

export default function DeleteAdmin(p) {
  const sendDeleteAdmin = () => p._admin.deleteAdmin()
  p._admin.getAllAdmin()


  return (
    <Column f={1} >
      <Form phore onClick={() => sendDeleteAdmin()} />
      {p.allAdmin.length ?
        <Column style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15, width: 220, height: 80, backgroundColor: 'silver', borderRadius: 4 }} >
          {p.allAdmin.map((adm, i) => (
            <Column key={i} >
              <P style={{ marginVertical: 5 }}>name: {adm.fullname}</P>
              <Column style={{ flexDirection: 'row-reverse' }} ><P style={{ marginVertical: 5 }}>phoneOrEmail: </P><P style={{ marginVertical: 5 }}  >{adm.phoneOrEmail}</P></Column>
            </Column>
          ))}
        </Column>:
      <></>
        }
    </Column>
  )
}