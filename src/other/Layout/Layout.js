import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react'
import { Platform, SafeAreaView, Pressable, View } from 'react-native';
import TopTab from '../Components/tabNavigation/TopTab';
import { ContainerTab, Icon } from '../Components/Html';
import HomePage from './page/HomePage';
import ProductsPage from './page/ProductsPage';
import SingleProductPage from './page/SingleProductPage';
import ProductsTablePage from './page/ProductsTablePage';
import ProfilePage from './page/ProfilePage';
import PanelAdminPage from './page/PanelAdminPage';
import SellerPage from './page/SellersPage';
import SellerPanelPage from './page/SellerPanelPage';
import AddressPage from './page/AddressPage';
import BeforePaymentPage from './page/BeforePaymentPage';
import SocketIoPage from './page/SocketIoPage';
import ProductsOffersPage from './page/ProductsOffersPage';
import ProductsPopularsPage from './page/ProductsPopularsPage';

export const Layout = (p) => {

  useFocusEffect(useCallback(() => {
    if (p._key === '1') { p.sethomeNavigate(); p.sethomeParams() }
    return () => {
      if (p._key === '1') { p.sethomeNavigate(p.route.name); p.sethomeParams(p.route.params) }
    }
  }, []))

  const topUser = [{ name: 'Register', title: 'ثبت نام' }, { name: 'Login', title: 'ورود' }]

  let bottom
  bottom = p.tokenValue.fullname ?
    [
      { mainTitle: 'Home', title: ((p._key === '1') ? (p.route.name) : ('Home')), icon: 'home', navigate: p.homeNavigate, params: p.homeParams },
      { title: 'Profile', icon: 'user-alt' },
      { title: 'BeforePayment', icon: 'shopping-cart' },
      { title: 'SocketIo', icon: 'comments' },
    ]
    :
    bottom = [
      { mainTitle: 'Home', title: ((p._key === '1') ? (p.route.name) : ('Home')), icon: 'home', navigate: p.homeNavigate, params: p.homeParams },
      { title: 'Login', icon: 'user-alt' },
      { title: 'BeforePayment', icon: 'shopping-cart', navigate: 'Login', params: { payment: true } },
      { title: 'SocketIo', icon: 'comments' },
    ]

  return (
    <View style={{ flex: 1, paddingHorizontal: Platform.OS === 'ios' ? (p.width > p.height ? 40 : 0) : 0, paddingBottom: Platform.OS === 'ios' ? 10 : 0 }} >
      <SafeAreaView style={{ backgroundColor: "#d293" }} />
      <View style={{ flex: 1, overflow: 'hidden' }}>
        {
          p.route.params?.active === 'no' && (<TopTab name={p.route.name} group={topUser} >{p.children}</TopTab>)
          ||
          p.route.name === 'Home' &&
          <HomePage {...p} bottom={bottom} />
          ||
          p.route.name === 'Products' &&
          <ProductsPage {...p} bottom={bottom} />
          ||
          p.route.name === 'ProductsOffers' &&
          <ProductsOffersPage {...p} bottom={bottom} />
          ||
          p.route.name === 'ProductsPopulars' &&
          <ProductsPopularsPage {...p} bottom={bottom} />
          ||
          p.route.name === 'SingleProduct' &&
          <SingleProductPage {...p} bottom={bottom} />
          ||
          p.route.name === 'BeforePayment' &&
          <BeforePaymentPage {...p} bottom={bottom} />
          ||
          // p.route.name === 'SocketIo' &&
          // <SocketIoPage {...p} bottom={bottom} />
          // ||
          p.route.name === 'ProductsTable' &&
          <ProductsTablePage {...p} />
          ||
          (p.route.params?.key === 'admin') && (!p.route.params?.set) && (p.route.name !== 'Address') && (p.route.name !== 'Sellers') &&
          <PanelAdminPage {...p} />
          ||
          (p.route.params?.key === 'user') && (!p.route.params?.view) && (p.route.name !== 'SellerPanel') && (!p.route.params?.active) &&
          <ProfilePage {...p} />
          ||
          p.route.name === 'Sellers' &&
          <SellerPage {...p} />
          ||
          p.route.name === 'SellerPanel' &&
          <SellerPanelPage {...p} />
          ||
          p.route.name === 'Address' &&
          <AddressPage {...p} />
          ||
          <ContainerTab >{p.children}</ContainerTab>
        }
      </View>
    </View>
  )
}
//! navigation.getState().routes[0].name

export const header = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} >
      <Icon name='arrow-right' style={{ fontSize: 29, marginTop: -5, paddingVertical: 2.5, flexGrow: 1, color: '#222', fontWeight: '1000' }} />
    </Pressable>
  );
};
  //   if(navigation.getCurrentRoute() && navigation.getCurrentRoute().params && navigation.getCurrentRoute().params.key && (navigation.getCurrentRoute().params.key !== 'user')) _user = {}
// getCurrentRoute


