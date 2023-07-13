import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Axios from 'axios'
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Platform } from 'react-native'

import { adminController } from "./adminController";
import { clientController } from "./clientController";
import { userController } from "./userController";
import { Layout } from "../other/Layout/Layout";
import { Column, Img, Loading } from '../other/Components/Html';
import { idValidator } from '../other/utils/idValidator';
import { useNetInfo } from "@react-native-community/netinfo";
import ToastProvider from '../other/utils/toast';

let num = 0, a = 0

var _show = false,
  serverOff = false,
  serverOff2 = false,
  goToUser = true
export const _initController = (p) => {
  const navigation = useNavigation()
  const [show, setshow] = useState(false)
  const netInfo = useNetInfo()

  const [change, setchange] = useState(false)
  const [change2, setchange2] = useState(false)
  var toastNetworkError = () => { p.toast.error('خطا ی شبکه', 'اتصال اینترنتتان را برسی کنید') }

  useLayoutEffect(() => {
    var toastOK = (data) => { typeof data !== 'string' ? p.toast.success('موفق آمیز', '√', 2500) : p.toast.success('موفق آمیز', data, 3500); setTimeout(() => { p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }, 1000); }
    var toast500 = () => { p.toast.error('خطا ی سرور', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast401 = (error) => { p.toast.warning('عدم دسترسی', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toastServerError = () => { p.toast.warning('سرور در حال تعمیر', 'لطفا چند دقیقه دیگر امتحان کنید') }

    setTimeout(() => { setchange(true) }, 100);

    if (change) {
      if (netInfo.isConnected !== false) {
        setTimeout(() => { serverOff2 = true }, 7000);
        Axios.interceptors.response.use(function (response) {
          p.setshowActivity(false)
          if (_show == false) { _show = true; setshow(true) }
          if (response.config.method !== 'get' && response.data?.message && (response.status === 200 || response.status === 201 || response.status === 'ok' || response.status === 'OK')) toastOK(response.data.message)
          return response
        }, function (error) {
          if (_show == false && error['request']?.status !== 0) { _show = true; setshow(true) }
          if (error['request']?.status === 0) {
            if (!serverOff2) {
              // p.setSplash(true)
              toastServerError()
              serverOff2 = true
              _show = false; setshow(false)
            }
            p.setshowActivity(false)
          }
          else if (error?.response?.status) {
            p.setshowActivity(false)
            if (error.response.status === 401) { if (p.goToUser && goToUser) { goToUser = false; p.setgoToUser(false); setTimeout(() => { goToUser = true; p.setgoToUser(true) }, 1500); navigation.navigate('User', { screen: 'Logout' }); toast401(error.response.data) } }
            else if (error.response.status > 400 && error.response.status <= 500) { toast500(); p.setshowActivity(false) };
            if (error.response.status === 400 && error.response.data) { toast400(error.response.data) };
          } return Promise.reject(error);
        });

        (async () => {
          const token = await AsyncStorage.getItem("token");
          if (token) {
            const user = jwtDecode(token)
            if (user.exp < Date.now() / 1000) {
              await AsyncStorage.removeItem("token");
            }
            else {
              const user = jwtDecode(token);
              p.settokenValue(user);
              if (token) Axios.defaults.headers.common["Authorization"] = token;
            }
          }
        })()

      }

    }

  }, [change])


  useEffect(() => { (!p.splash && netInfo.isConnected) && p.setchangeRefresh(!p.changeRefresh) }, [netInfo])



  useLayoutEffect(() => { p.$input.set('a', 'a') }, [])
  useLayoutEffect(() => {
    /* show === true && */ setTimeout(() => { if (show === true) { p.setSplash(false); p.setshowActivity(false) } }, 200)
    // show === false && p.setSplash(true);
  }, [show])

  // useEffect(() => {
  //   Dimensions.addEventListener('change', ({ window: { width, height } }) => { p.setwidth(width); p.setheight(height) })
  // }, [])



  useLayoutEffect(() => {
    setTimeout(() => { setchange2(true) }, 200);
    if (change2)
      if (netInfo.isConnected !== true) {
        // p.setSplash(true);
        if (!serverOff) {
          toastNetworkError()
          serverOff = true
          setTimeout(() => {
            serverOff = false
          }, 2000);
        }
      }
      else {
        p.setSplash(false);
      }
  }, [netInfo, change2])


}



const SplashScreen = (state) => {
  return (
    <Column pos='absolute' t={0} l={0} r={0} b={0} z={111111} h={'100%'} w={'100%'} bgcolor='#fff' pb={Platform.OS === 'ios' ? 10 : 1} f={1} maxh={state.height} >
      <Img src={state.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
      <ToastProvider {...state} />
    </Column>
  )
}

export function allChildren({ client, user, admin }) {
  const [show, setshow] = useState(false)
  const netInfo = useNetInfo()

  useLayoutEffect(() => {
    setTimeout(() => {
      netInfo.isConnected && setshow(true)
    }, 150);
  }, [netInfo])

  // const b = () => {
  //   console.log(location.href);
  //   if ((location.href === (location.origin + '/home')) || (location.href === (location.origin)) || (location.href === (location.origin + '/'))) { num++; setTimeout(() => { num = 0 }, 1000) };
  //   if (num === 2) { client.toast.show('', 'برای خروج دوبار کلیک کنید', 1000); setTimeout(() => { num = 0 }, 1000); }
  //   if (num >= 2) { setTimeout(() => {history.go(-(history.length - 1)) ; history.back()}, 100); return }
  //   if ((location.href === location.origin) || (location.href === location.origin + '/')) { history.go(-(history.length - 1)) ; history.back() }
  //   else return
  // }

  const b = () => {
    if ((location.href === (location.origin + '/home')) || (location.href === (location.origin)) || (location.href === (location.origin + '/'))) { num++; setTimeout(() => { num = 0 }, 1000) };
    if (num === 1) { if(a > 0) {client.toast.show('', 'برای خروج دوبار کلیک کنید', 1000); setTimeout(() => { num = 0 }, 1000);} else return }
    else if (num >= 2) { { history.go(-(history.length - 1)); history.back() } return }
    else if ((location.href === location.origin) || (location.href === location.origin + '/')) { history.go(-(history.length - 1)); history.back() }
    else return
    return
  }

  _useEffect(() => { if (Platform.OS === 'web') { if (location.href === location.origin + '/' || location.href === location.origin + '/home') history.pushState({}, '/home'/* location.href */) } }, [])
  _useEffect(() => { if (Platform.OS === 'web') window.addEventListener('popstate', b); return () => { if (Platform.OS === 'web') { num = 0; /* window.removeEventListener('popstate', b); */ } } }, [])

  const _client = ({ navigation, route }) => new clientController({ ...client, navigation, route })
  const _user = ({ navigation, route }) => new userController({ ...user, navigation, route })
  const _admin = ({ navigation, route }) => new adminController({ ...admin, navigation, route })
  const clientReducer = (props) => ({ _client: _client(props) })
  const userReducer = (props) => ({ _user: _user(props) })
  const adminReducer = (props) => ({ _admin: _admin(props) })
  this.clientChildren = (Component, key) => ({
    children: (props) => {
      _useEffect(() => {
        if (props.route.name === 'Home') setTimeout(() => { a++; }, 300);
        else a = 0
        return () => a = 0
      }, [])
      _useEffect(() => { AsyncStorage.getItem("token").then((token) => { if ((props.route.name === 'SetAddressForm' || props.route.name === 'SetAddressInTehran' || props.route.name === 'ProductBasket') && (!token)) props.navigation.navigate('User', { screen: 'Login', params: { payment: 'true' } }); }) }, [])
      _useEffect(() => { client.setshownDropdown(false); }, [])
      useLayoutEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      useLayoutEffect(() => { if (props.route.name === 'Home' && props.route.params.key !== 'home') return props.navigation.navigate('NotFound') })
      if (show) return <Layout _key={key} {...props} {...client}>{client.showActivity && <Loading setshowActivity={client.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...client} {...clientReducer(props)} /></Layout>
      else return <SplashScreen {...client} />
    }
  })
  this.userChildren = (Component, key) => ({
    children: (props) => {
      _useEffect(() => { user.setshownDropdown(false); }, [])
      _useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const _user = token ? jwtDecode(token) : {}
          user.settokenValue(_user);
          if (props.route.params?.active === 'no' && (_user?.fullname)) return props.navigation.navigate('Profile')
          if (!props.route.params?.active && (!_user?.fullname)) return props.navigation.navigate('Login')
        })
      }, [])
      useLayoutEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      if (show) return <Layout _key={key} {...props} {...user}>{user.showActivity && <Loading setshowActivity={user.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...user} {...userReducer(props)} /></Layout>
      else return <SplashScreen {...user} />
    }
  })
  this.adminChildren = (Component, key) => ({
    children: (props) => {
      _useEffect(() => { admin.setshownDropdown(false); }, [])
      _useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const user = token ? jwtDecode(token) : {}
          if (!token) return props.navigation.navigate('User', { screen: 'Login' })
          admin.settokenValue(user);
          if (!user?.isAdmin) return props.navigation.navigate('Client', { screen: 'Home' })
        })
      }, [])
      useLayoutEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      if (show) return <Layout _key={key} {...props} {...admin}>{admin.showActivity && <Loading setshowActivity={admin.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...admin} {...adminReducer(props)} /></Layout>
      else return <SplashScreen {...admin} />
    }
  })

}

export default function _useEffect(call, state) { useFocusEffect(useCallback(() => call(), state)) }
