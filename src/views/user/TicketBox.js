import moment from 'moment-jalaali'
import React from 'react'
import { Badge, Column, FlatList, M_icon, P, Py } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const TicketBox = (p) => {
  p._user.ticketBox()
  const deleteTicket = (ticketId) => p._user.deleteTicket(ticketId)

  return (
    <Column f={1} >
      <FlatList
        data={p.userTicketBox}
        renderItem={({ item, index }) => (
          <Column mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} >
            <Column ai='flex-end' pl={8} >
              <P fs={11} color='#aab' >{moment(item.date).format('jYYYY/jM/jD')}</P>
            </Column>
            <Column >
              <Py mt={-5} onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={11} >{item.title}</Py>
              <P onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={10} color={'#777'} >{truncate(item.message, 40, false)}</P>
              <M_icon onClick={() => { deleteTicket(item._id) }} name='delete' size={30} color='#e52222' style={{ position: 'absolute', left: 1, top: 2, zIndex: 10, padding:2, paddingBottom: 4, }} />
              {!item.userSeen && <Badge bgcolor={'#0e2'} left={-3} />}
            </Column>
          </Column>
        )}
      />
    </Column>
  )
}

export default TicketBox