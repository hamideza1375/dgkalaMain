import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Axios from 'axios'
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

import { adminController } from "./adminController";
import { clientController } from "./clientController";
import { userController } from "./userController";
import { Layout } from "../other/Layout/Layout";
import { Loading } from '../other/Components/Html';
import { idValidator } from '../other/utils/idValidator';
import { useNetInfo } from "@react-native-community/netinfo";


var _show = false,
  serverOff = false
export const _initController = (p) => {
  const [show, setshow] = useState(false)
  const netInfo = useNetInfo()

  const [change, setchange] = useState(false)
  const [change2, setchange2] = useState(false)
  var toastNetworkError = () => { p.toast.error('خطا ی شبکه', 'اتصال اینترنتتان را برسی کنید') }

  useEffect(() => {
    var toastOK = (data) => { typeof data !== 'string' ? p.toast.success('موفق آمیز', '√', 2500) : p.toast.success('موفق آمیز', data, 3500); setTimeout(() => { p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }, 1000); }
    var toast500 = () => { p.toast.error('خطا ی سرور', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toastNetworkError = () => { p.toast.error('خطا ی شبکه', 'اتصال اینترنتتان را برسی کنید') }
    var toastServerError = () => { p.toast.warning('سرور در حال تعمیر', 'لطفا چند دقیقه دیگر امتحان کنید') }

    setTimeout(() => { setchange(true) }, 100);

    if (change) {
      if (netInfo.isConnected !== false) {
        Axios.interceptors.response.use(function (response) {
          p.setshowActivity(false)
          if (_show == false) { _show = true; setshow(true) }
          if (response.config.method !== 'get' && response.data?.message && (response.status === 200 || response.status === 201 || response.status === 'ok' || response.status === 'OK')) toastOK(response.data.message)
          return response
        }, function (error) {
          if (_show == false && error['request']?.status !== 0) { _show = true; setshow(true) }
          // if (error['request']?.statusText === '' && error['request']?.status === 0 && error['request']?.response === '' && error['isAxiosError'] === true) {
            if (error['request']?.status === 0) {
              if (!serverOff) {
              p.setSplash(true)
              toastServerError()
              serverOff = true
              setTimeout(() => {
                serverOff = false
              }, 2000);
            }
            _show = false; setshow(false)
            p.setshowActivity(false)
          }
          else if (error?.response?.status) {
            p.setshowActivity(false)
            if (error.response.status > 400 && error.response.status <= 500) { toast500(); p.setshowActivity(false) };
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



  useEffect(() => { p.$input.set('a', 'a') }, [])
  // useEffect(() => { setTimeout(() => {{p.setSplash(false); p.setshowActivity(false)} }, 200) }, [show])
  useEffect(() => {
    show === true && setTimeout(() => { if (show === true) { p.setSplash(false); p.setshowActivity(false) } }, 200)
    show === false && p.setSplash(true);
  }, [show])
  Dimensions.addEventListener('change', ({ window: { width, height } }) => { p.setwidth(width); p.setheight(height) })

  useEffect(() => {
    setTimeout(() => { setchange2(true) }, 200);
    if ( change2)
      if (netInfo.isConnected !== true) {
        p.setSplash(true);
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


export function allChildren({ client, user, admin }) {
  const _client = ({ navigation, route }) => new clientController({ ...client, navigation, route })
  const _user = ({ navigation, route }) => new userController({ ...user, navigation, route })
  const _admin = ({ navigation, route }) => new adminController({ ...admin, navigation, route })
  const clientReducer = (props) => ({ _client: _client(props) })
  const userReducer = (props) => ({ _user: _user(props) })
  const adminReducer = (props) => ({ _admin: _admin(props) })
  this.clientChildren = (Component, key) => ({
    children: (props) => {
      useEffect(() => { AsyncStorage.getItem("token").then((token) => { if ((props.route.name === 'SetAddressForm' || props.route.name === 'SetAddressInTehran' || props.route.name === 'BeforePayment') && !token) return props.navigation.navigate('Login') }) }, [])
      _useEffect(() => { client.setshownDropdown(false); }, [])
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      useEffect(() => { if (props.route.name === 'Home' &&  props.route.params.key !== 'home') return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...client}>{client.showActivity && <Loading setshowActivity={client.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...client} {...clientReducer(props)} /></Layout>
    }
  })
  this.userChildren = (Component, key) => ({
    children: (props) => {
      _useEffect(() => { user.setshownDropdown(false); }, [])
      useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const _user = token ? jwtDecode(token) : {}
          user.settokenValue(_user);
          if (props.route.params?.active === 'no' && (_user?.fullname)) return props.navigation.replace('Home')
          if (!props.route.params?.active && (!_user?.fullname)) return props.navigation.replace('Home')
        })
      }, [])
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...user}>{user.showActivity && <Loading setshowActivity={user.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...user} {...userReducer(props)} /></Layout>
    }
  })
  this.adminChildren = (Component, key) => ({
    children: (props) => {
      _useEffect(() => { admin.setshownDropdown(false); }, [])
      useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const user = token ? jwtDecode(token) : {}
          if (!token) return props.navigation.replace('Login')
          admin.settokenValue(user);
          if (!user?.isAdmin) return props.navigation.replace('Home')
        })
      }, [])
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...admin}>{admin.showActivity && <Loading setshowActivity={admin.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...admin} {...adminReducer(props)} /></Layout>
    }
  })

}

export default function _useEffect(call, state) { useFocusEffect(useCallback(() => call(), state)) }
