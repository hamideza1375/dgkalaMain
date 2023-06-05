import { useNavigation } from '@react-navigation/native';
import { Platform, SafeAreaView, Pressable, View } from 'react-native';
import TopTab from '../Components/tabNavigation/TopTab';
import { ContainerTab, Icon } from '../Components/Html';
import HomePage from './page/HomePage';
import ProductsPage from './page/ProductsPage';
import ProductsTablePage from './page/ProductsTablePage';
import ProfilePage from './page/ProfilePage';
import PanelAdminPage from './page/PanelAdminPage';
import SellerPage from './page/SellersPage';
import SellerPanelPage from './page/SellerPanelPage';
import AddressPage from './page/AddressPage';
import ProductsOffersPage from './page/ProductsOffersPage';
import ProductsPopularsPage from './page/ProductsPopularsPage';

export const Layout = (p) => {


  const topUser = [{ name: 'Register', title: 'ثبت نام' }, { name: 'Login', title: 'ورود' }]

  return (
    <View style={{ flex: 1, paddingHorizontal: Platform.OS === 'ios' ? (p.width > p.height ? 40 : 0) : 0, paddingBottom: Platform.OS === 'ios' ? 10 : 0 }} >
      <SafeAreaView style={{ backgroundColor: "#d293" }} />
      <View style={{ flex: 1, overflow: 'hidden' }}>
        {
          p.route.params?.active === 'no' && (<TopTab name={p.route.name} group={topUser} >{p.children}</TopTab>)
          ||
          p.route.name === 'Home' &&
          <HomePage {...p} />
          ||
          p.route.name === 'Products' &&
          <ProductsPage {...p} />
          ||
          p.route.name === 'ProductsOffers' &&
          <ProductsOffersPage {...p} />
          ||
          p.route.name === 'ProductsPopulars' &&
          <ProductsPopularsPage {...p} />
          ||
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
      {navigation.canGoBack() ? <Icon name='arrow-left' style={{ fontSize: 22, marginTop: 0, paddingVertical: 2.5, marginRight: 9, flexGrow: 1, color: '#222', fontWeight: '100' }} /> : <></>}
    </Pressable>
  );
};
  //   if(navigation.getCurrentRoute() && navigation.getCurrentRoute().params && navigation.getCurrentRoute().params.key && (navigation.getCurrentRoute().params.key !== 'user')) _user = {}
// getCurrentRoute


