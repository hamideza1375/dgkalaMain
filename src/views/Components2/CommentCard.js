import moment from 'moment-jalaali'
import React from 'react'
import { A_icon, Badge, Card, Column, Icon, M_icon, P, Press, Py, Row } from '../../other/Components/Html'


const CommentCard = () => {

  return (
    <Column key={'item'} w={'98%'} as='center' br={3} mv={8} sh={{ o: 1, r: 8, c: '#ddda' }} >
      <Card
        bgcolor='#fff' color='black' dr='rtl' border={[1, '#eeee']} headerRow={
          <Column fd='row-reverse' w='100%' >
            <Column ><P color='#777' >{moment().format('jYYYY/jM/jD')}</P></Column>
            <Column><P color='#777' > | </P></Column>
            <Column><P color='#777' > {'item'.fiveStar} ستاره </P></Column>
            <Column mt={-4} ml={2}>
              <Icon name='star' color='orange' size={25} />
            </Column>

            <Row mh={15} >
              <A_icon /* onClick={() => { p.navigation.navigate('EditComment', { id: 'item' }) }} */ name='edit' size={18} color='#777' style={{ marginHorizontal: 5 }} />
              <M_icon /* onClick={() => { deleteComment('item') }} */ name='delete-outline' size={18} color='#777' style={{ marginHorizontal: 5 }} />
            </Row>

            <Column ml='auto' >
              <Py color='#777' >{'item'}</Py>
            </Column>

          </Column>
        } body={<P>{'item'}</P>} footerRow={
          <Column fd='row-reverse' >
            <Press /* onClick={() => { disLike('item') }} */ bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
              <Badge bgcolor='gray' text={0} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
              <A_icon name='dislike2' size={19} style={{ marginLeft: -5 }} />
            </Press>
            <Press /* onClick={() => {  like('item')  }} */ bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
              <Badge bgcolor='gray' text={3} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
              <A_icon name='like2' size={19} style={{ marginLeft: -5 }} />
            </Press>
            <Press /* onClick={() => { p.navigation.navigate('CreateComment', { commentId: 'item', userphoneOrEmail: JSON.stringify(Object.values('item'.userphoneOrEmail).map((u, i) => (u + i))) }) }} */ bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={12} mt={2} >↩</P></Press>
          </Column>
        } />

      <Column w={'100%'} ai='flex-start'>
        {/* <AnswerComment answer={'item'} {...p} /> */}
      </Column>

    </Column>

  )
}

export default CommentCard