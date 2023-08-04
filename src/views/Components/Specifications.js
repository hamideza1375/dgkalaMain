import React, { useState } from 'react'
import { Card2, Column, Modal, P, Press, Py, Row, Scroll, Span } from '../../other/Components/Html'

const Specifications = (p) => {

  const [showModal, setshowModal] = useState(false)

  return (
    <Span minw={280} w='100%' ai='center' jc='center' >
      <Card2 h={320} w='100%' style={{ padding:12,paddingBottom:0,borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span mt={5} fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <Py>تعداد هسته ی پردازشگر: </Py>
              <Py fs={10.5} color='#333'>{p.singleItem.cpuCore} هسته</Py>
            </Span>
          </Span>
        }
        coulumn2={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <Py>رم: </Py>
              <Py fs={10.5} color='#333'>{p.singleItem.ram} گیگابایت</Py>
            </Span>
          </Span>
        }
        coulumn3={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <Py>حافظه ی داخلی: </Py>
              <Py fs={10.5} color='#333'>{p.singleItem.memory} گیگابایت</Py>
            </Span>
          </Span>
        }
        coulumn4={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <Py>دوربین: </Py>
              <Py fs={10.5} color='#333' >{p.singleItem.camera} گیگابایت</Py>
            </Span>
          </Span>
        }
        coulumn5={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <Py>صفحه نمایش: </Py>
              <Py fs={10.5} color='#333' >{p.singleItem.display}</Py>
            </Span>
          </Span>
        }

        c6={.4} coulumn6={
          <Span mt={-20} f={.8} jc='center'>
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





