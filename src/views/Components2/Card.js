import React, { useState } from 'react'
import { Card2, Column, Modal, P, Press, Row, Scroll, Span } from '../../other/Components/Html'

const Card = () => {
  return (
    <Card2 h={320} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white' }}
    coulumn1={
      <Span mt={5} fg={1} jc='center'>
        <Span mr={12} fd='row' ai='center'>
          <P>تعداد هسته ی پردازشگر:  </P>
          <P fs={10.5} color='#333'>11111 هسته</P>
        </Span>
      </Span>
    }
    coulumn2={
      <Span fg={1} jc='center'>
        <Span mr={12} fd='row' ai='center'>
          <P>رم:  </P>
          <P fs={10.5} color='#333'>22222 گیگابایت</P>
        </Span>
      </Span>
    }
    coulumn3={
      <Span fg={1} jc='center'>
        <Span mr={12} fd='row' ai='center'>
          <P>حافظه ی داخلی:  </P>
          <P fs={10.5} color='#333'>33333 گیگابایت</P>
        </Span>
      </Span>
    }
    coulumn4={
      <Span fg={1} jc='center'>
        <Span mr={12} fd='row' ai='center'>
          <P>دوربین:  </P>
          <P fs={10.5} color='#333' >44444 گیگابایت</P>
        </Span>
      </Span>
    }
    coulumn5={
      <Span fg={1} jc='center'>
        <Span mr={12} fd='row' ai='center'>
          <P>صفحه نمایش:  </P>
          <P fs={10.5} color='#333' >55555</P>
        </Span>
      </Span>
    }

    c6={.5} coulumn6={
      <Span f={.8} jc='center'>
        <Press onClick={() => { setshowModal(true) }} ml={12} as='flex-end'>
          <P fs={10.5} color='#333'>نمایش مشخصات کامل کلیک کنید »</P>
        </Press>
      </Span>
    }
  >
  </Card2>  )
}

export default Card