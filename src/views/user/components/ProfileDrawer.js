import React from 'react'
import { Scroll, Column, Press, Py, Badge } from '../../../other/Components/Html'

const ProfileDrawer = (p) => {

  const pageName = (page) => {
    let color = ''
    if (p.route.name === page) color = '#0aed'
    else color = 'black'
    return color
  }

  return (
    <Scroll pt={2} ccStyle={{ flexGrow: 1 }} >

      <Column border={[1, '#0479']} mr={2} br={4} w='95%' >

        <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']} >
          <Press onClick={() => p.navigation.navigate('Profile')} ><Py color={pageName('Profile')} >حساب کاربری</Py></Press>
        </Column>

        {p.tokenValue.isAdmin ? <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('admin')} ><Py color={pageName('admin')} >پنل ادمین</Py></Press>
        </Column>
          :
          <></>
        }

        {p.tokenValue.sellerId ? <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('SellerPanel')} ><Py color={pageName('SellerPanel')} >پنل فروشندگان</Py></Press>
        </Column>
          :
          <></>
        }

        <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('ResetSpecification')} ><Py color={pageName('ResetSpecification')} >تغییر رمز عبور و مشخصات</Py></Press>
        </Column>
        {!p.tokenValue.isAdmin ? <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('SendTicket')} ><Py color={pageName('SendTicket')} >ارسال تیکت</Py></Press>
          <Press mt={10} fd='row' onClick={() => p.navigation.navigate('TicketBox')} ><Py color={pageName('TicketBox')} >صندوق تیکت های دریافتی</Py>{p.ticketSeen ? <Badge left={10} /> : <></>}</Press>
          <Press mt={10} onClick={() => p.navigation.navigate('SendProposal')} ><Py color={pageName('SendProposal')} >ارسال انتقادات و پیشنهادات</Py></Press>
        </Column>
          :
          <></>
        }
        <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('BeforePayment', {profile:'true'})} ><Py color={pageName('BeforePayment')} >نمایش سفارشات فعال</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('ShowLastOrder')} ><Py color={pageName('ShowLastOrder')} >نمایش خرید های قبل</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('SavedProducts')} ><Py color={pageName('SavedProducts')} >ذخیره ها</Py></Press>
        </Column>
        <Column as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
          <Press onClick={() => p.navigation.navigate('Logout')} ><Py color={pageName('Logout')} >خروج از حساب کاربری</Py></Press>
        </Column>
      </Column>
    </Scroll>
  )
}

export default ProfileDrawer