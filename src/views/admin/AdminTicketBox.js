import moment from 'moment-jalaali'
import React from 'react'
import { Badge, Column, FlatList, M_icon, P } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const AdminTicketBox = (p) => {
  p._admin.adminTicketBox()
  const deleteTicket = (ticketId) => p._user.deleteTicket(ticketId)

  return (
    <Column f={1} >
      <FlatList
        data={p.adminTicketBox}
        renderItem={({ item, index }) => (
          <Column mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} >
            <Column ai='flex-end' pl={8} >
              <P fs={11} color='#aab' >{moment(item.date).format('jYYYY/jM/jD')}</P>
            </Column>
            <Column >
              <P onClick={() => { p.navigation.navigate('AdminGetTicket', { id: item._id }) }} ta='right' fs={12} >{item.title}</P>
              <P onClick={() => { p.navigation.navigate('AdminGetTicket', { id: item._id }) }} ta='right' fs={10} color={'#777'} >{truncate(item.message, 30, false)}</P>
              <M_icon onClick={() => { deleteTicket(item._id) }} name='delete' size={30} color='#e52222' style={{ position: 'absolute', left: 1, top: 10 }} />
              {!item.adminSeen && <Badge bgcolor={'#0e2'} left={-3} />}
            </Column>
          </Column>
        )}
      />
    </Column>
  )
}

export default AdminTicketBox