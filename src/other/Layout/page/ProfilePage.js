import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../Components/Html'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'
import _useEffect from '../../../controllers/_initial'


const ProfilePage = (p) => {

  const [show, setshow] = useState(true)

  useEffect(() => {
   if(p.width <= 1024 ) setshow(false)
   else setshow(true)
  }, [p.route.name])


  return (
    <>
      <SearchBar
        drawer={<ProfileDrawer {...p} />}
        title='پنل کاربری'
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} >
        {p.children}
      </SearchBar>
    </>

  )
}

export default ProfilePage