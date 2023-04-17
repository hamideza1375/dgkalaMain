import React, { useState } from 'react'
import { Card2, Column, Modal, P, Press, Row, Scroll, Span } from '../../../../other/Components/Html'

const Specifications = (p) => {

  const [showModal, setshowModal] = useState(false)

  return (
    <Span minw={280} w='100%' ai='center' jc='center' >
      <Card2 h={320} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span mt={5} fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>تعداد هسته ی پردازشگر: </P>
              <P fs={10.5} color='#333'>{p.singleItem.cpuCore} هسته</P>
            </Span>
          </Span>
        }
        coulumn2={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>رم: </P>
              <P fs={10.5} color='#333'>{p.singleItem.ram} گیگابایت</P>
            </Span>
          </Span>
        }
        coulumn3={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>حافظه ی داخلی: </P>
              <P fs={10.5} color='#333'>{p.singleItem.memory} گیگابایت</P>
            </Span>
          </Span>
        }
        coulumn4={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>دوربین: </P>
              <P fs={10.5} color='#333' >{p.singleItem.camera} گیگابایت</P>
            </Span>
          </Span>
        }
        coulumn5={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>صفحه نمایش: </P>
              <P fs={10.5} color='#333' >{p.singleItem.display}</P>
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
      </Card2>

        <Modal show={showModal} setshow={setshowModal} style={{ width: '90%', height: 400, paddingTop: 33 }} >
          <P fs={11} style={{ lineHeight: 30 }} color='#333' >{p.singleItem.info}</P>
        </Modal>
    </Span>
  )
}

{/* <Span w='100%'>
          {p.allsingleItem.map((item,index) => (
            <Row key={index} ai='center' mv={5} >
            <P>{item.key}: </P>
            <P fs={10.5} color='#333' >{item.value}</P>
            </Row>
            ))
          }
        </Span> */}

export default Specifications





