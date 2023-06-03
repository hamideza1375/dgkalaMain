import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../Components/Html'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'
import _useEffect from '../../../controllers/_initial'
import BottomTab from '../../Components/tabNavigation/BottomTab'


const ProfilePage = (p) => {

  const [show, setshow] = useState(true)

  useEffect(() => {
    if (p.width <= 1024) setshow(false)
    else setshow(true)
  }, [p.route.name])

  // if (p.route.name === 'Profile')

  //   return (
  //     <SearchBar
  //       drawer={<ProfileDrawer {...p} />}
  //       title='پنل کاربری'
  //       showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} iconSrc={'home'}
  //       iconPress={() => { setshow(!show) }} >
  //       <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'User'} title={'پروفایل'} group={p.bottom} bgcolor='#f5f5f5' color='#cccc' activeColor='#99f' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #aaa', borderTopWidth: 1, borderColor: 'silver' }} >
  //         {p.children}
  //       </BottomTab>
  //     </SearchBar>

  //   )
  // else
    return (
      <SearchBar
        drawer={<ProfileDrawer {...p} />}
        title='پنل کاربری'
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} iconSrc={'home'}
        iconPress={() => { setshow(!show) }} >
        {p.children}
      </SearchBar>
    )
}

export default ProfilePage