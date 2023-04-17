import React from 'react'
import { Scroll, Column, Press, Py, Badge } from '../../../other/Components/Html'

const PanelAdminDrawer = (p) => {

  const pageName = (page) => {
    let color = ''
    if (p.route.name.match(page)) color = '#0aed'
    else color = 'black'
    return color
  }

  return (
      <Scroll pt={1} ccStyle={{ flexGrow: 1 }} >
        <Column mr={2} br={4} w={'95%'} border={[1, '#0479']}>
        <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press mt={10} onClick={() => p.navigation.navigate('PanelAdmin')} ><Py color={pageName('PanelAdmin')} >پنل ادمین</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press mt={10} onClick={() => p.navigation.navigate('Address')} ><Py color={pageName('Address')} >فیش سفارشات</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('AllPayment')} ><Py color={pageName('AllPayment')} > خرید های موفق و غیر موفق</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('QuitsForSeller')} ><Py color={pageName('QuitsForSeller')} >پرداخت به فروشندگان</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press fd='row' onClick={() => p.navigation.navigate('AdminTicketBox')} ><Py color={pageName('AdminTicketBox')} >صندوق تیکت ها</Py>{p.ticketSeen?<Badge left={5} top={.5} />:<></>}</Press>
            <Press mt={10} fd='row' onClick={() => p.navigation.navigate('SocketIo')} ><Py color={pageName('SocketIo')} >صندوق پرسش و پاسخ همزمان</Py>{p.socketIoSeen?<Badge left={5} top={.5} />:<></>}</Press>
            <Press mt={10} onClick={() => p.navigation.navigate('GetProposal')} ><Py color={pageName('GetProposal')} >صندوق انتقادات و پیشنهادات</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => { p.navigation.navigate('TableCategory') }} ><Py color={pageName('TableCategory')} >محصولات</Py></Press>
            <Press onClick={() => p.navigation.navigate('ListUnAvailable')} mt={10} ><Py color={pageName('ListUnAvailable')} >محصولات ناموجود</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('AddAdmin')} ><Py color={pageName('AddAdmin')} >اضافه کردن ادمین</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('DeleteAdmin')} ><Py color={pageName('DeleteAdmin')} >حذف ادمین</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('ChangeMainAdmin')} ><Py color={pageName('ChangeMainAdmin')} >تغییر ادمین اصلی</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('Notifee')} ><Py color={pageName('Notifee')} >ارسال نوتیفیکیشن</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('CreateSlider')} ><Py color={pageName('CreateSlider')} >ساخت اسلایدر</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('SendPostPrice')} ><Py color={pageName('SendPostPrice')} >تایین قیمت پست</Py></Press>
          </Column>
          <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('Profile')} ><Py color={pageName('Profile')} >حساب کاربری</Py></Press>
          </Column>
        </Column>
      </Scroll>
  )
}

export default PanelAdminDrawer