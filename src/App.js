import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, LogBox, I18nManager, StatusBar, useWindowDimensions } from "react-native";

import Home from './views/client/Home'
import Products from './views/client/Products'
import ProductsOffers from "./views/client/ProductsOffers";
import ProductsPopulars from "./views/client/ProductsPopulars";
import SingleProduct from './views/client/SingleProduct'
import ProductBasket from './views/client/BeforePayment'
import SetAddressForm from "./views/client/SetAddressForm";
import Map from "./views/client/Map";
import SetAddressInTehran from "./views/client/SetAddressInTehran";
import CreateComment from "./views/client/CreateComment";
import EditComment from "./views/client/EditComment";
import SocketIo from "./views/socketIo/socketIo";

import Register from "./views/user/Register";
import GetCode from "./views/user/GetCode";
import Login from "./views/user/Login";
import Profile from "./views/user/Profile";
import ForgetPass from "./views/user/ForgetPass";
import ResetPass from "./views/user/ResetPass";
import ResetSpecification from "./views/user/ResetSpecification";
import Logout from "./views/user/Logout";
import SendProposal from "./views/user/SendProposal";
import SendTicket from "./views/user/SendTicket";
import GetTicket from "./views/user/GetTicket";
import TicketBox from "./views/user/TicketBox";
import ShowLastOrder from "./views/user/ShowLastOrder";
import SavedProducts from "./views/user/SavedProducts";
import ActiveOrder from './views/user/ActiveOrder'
import Rules from "./views/user/Rules";
import FramePayment from "./views/user/FramePayment";
import SellerPanel from "./views/user/SellerPanel";

import AddAdmin from "./views/admin/AddAdmin";
import Notifee from "./views/admin/Notifee";
import ChangeMainAdmin from "./views/admin/ChangeMainAdmin";
import DeleteAdmin from "./views/admin/DeleteAdmin";
import Address from "./views/admin/Address";
import QuitsForSeller from "./views/admin/QuitsForSeller";
import AllPayment from "./views/admin/AllPayment";
import ListUnAvailable from "./views/admin/ListUnAvailable";
import GetProposal from "./views/admin/GetProposal";
import Table from "./views/admin/CategoryTable";
import ProductsTable from "./views/admin/ProductsTable";
import EditCategory from "./views/admin/EditCategory";
import EditProduct from "./views/admin/EditProduct";
import SetOffer from "./views/admin/SetOffer";
import CreateCategory from "./views/admin/CreateCategory";
import CreateProduct from "./views/admin/CreateProduct";
import ShowLatLngOnMap from "./views/admin/ShowLatLngOnMap";
import SendPostPrice from "./views/admin/SendPostPrice";
import PanelAdmin from "./views/admin/PanelAdmin";
import Sellers from "./views/admin/Sellers";
import AddSeller from "./views/admin/AddSeller";
import CreateSlider from "./views/admin/CreateSlider";
import AdminTicketBox from "./views/admin/AdminTicketBox";
import AdminSocketIo from "./views/socketIo/AdminSocketIo";


import { Button, Dropdown, Img, Init, Column, Press, P, Icon, M_icon } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import ToastProvider, { Toast } from "./other/utils/toast";
import { header } from "./other/Layout/Layout";
import { rtl } from "./other/utils/rtl"
import reload from "./other/utils/reload";

import { allChildren, _initController } from "./controllers/_initial";
import { userController } from "./controllers/userController";
import { adminController } from "./controllers/adminController";
import { clientController } from "./controllers/clientController";

import { states, contextStates } from "./context/_context";
import { initialPropType } from "./context/_initialState";
import spacePrice from "./other/utils/spacePrice";
import { ErrorBoundary } from "react-error-boundary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


rtl()
LogBox.ignoreAllLogs();


const Tab = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Mobile = () => {

  useEffect(() => { setTimeout(() => { if ((Platform.OS !== 'web') && (!I18nManager.isRTL)) { reload() } }, 3000) }, [])

  let icon = Platform.OS === 'ios' ? { headerLeft: header } : { headerLeft: header }
  const allState = states()
  const toast = new Toast(allState.client)
  const { clientChildren, userChildren, adminChildren } = new allChildren({ client: { ...allState.client, toast }, user: { ...allState.user, toast }, admin: { ...allState.admin, toast } })
  _initController({ ...allState.init, toast })

  const _admin = new adminController({ ...allState.admin, toast })
  _admin.getPostPrice()
  const _user = new userController({ ...allState.user, toast })
  _user.sendTicketNotifeeAndSeen()
  const _client = new clientController({ ...allState.client, toast })
  _client.getSlider()
  _client.getSendStatus()
  _client.getNotifee()
  _client.seenAndSendNotificationForSocketIo()
  _client.removeAsyncStorage()
  const [show, setshow] = useState(false)
  const netInfo = useNetInfo()

  useEffect(() => {
    setTimeout(() => {
      netInfo.isConnected && setshow(true)
    }, 500);
  }, [netInfo])


  return (
    <>
      {allState.init.splash ?
        <Column pos='absolute' t={0} l={0} r={0} b={0} z={111111} h={'100%'} w={'100%'} bgcolor='#fff' pb={Platform.OS === 'ios' ? 10 : 1} f={1} maxh={allState.init.height} >
          <Img src={allState.init.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
          <ToastProvider {...allState.init} />
          {netInfo.isConnected && show ? <Button outline onClick={() => { reload() }} >بارگذاری مجدد</Button> : <></>}
        </Column>
        :
        <></>
      }
      <contextStates.Provider value={{ ...allState.init, toast }}>
        <StatusBar backgroundColor='#d29' barStyle={"light-content"} />
        <Column f={1} w='100%' minw={280} onClick={() => { allState.init.shownDropdown && allState.init.setshownDropdown(false); allState.init.$input?.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
          <Dropdown root {...allState.init}><Press onClick={() => { }} >{allState.init.dropdownValue}</Press></Dropdown>
          <Init ref={(e) => allState.init.set$(e)} id={'s'} />
          <ToastProvider {...allState.init} />
          <BottomTab.Navigator screenOptions={({ route }) => ({ tabBarInactiveTintColor: 'white', tabBarActiveTintColor: '#a05', tabBarActiveBackgroundColor: '#e833a8ee', tabBarInactiveBackgroundColor: '#e833a8ee', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon, tabBarStyle: { display: 'flex', /* position:'absolute', top:1 */ }, tabBarBadgeStyle:{backgroundColor:'#0e5'} })}>
            
            <Tab.Screen name="Client" options={{ title: 'دیجی کالا', headerShown: false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size - 5} />) }} >{() =>
              <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen initialParams={{ key: 'home' }}   name="Home" options={{ title: 'دیجی کالا', headerShown: false }} {...clientChildren(Home, '1')} />
                <Tab.Screen initialParams={{ key: 'client' }} name="Products" options={{ title: 'محصولات', headerShown: false }} {...clientChildren(Products, '1')} />
                <Tab.Screen initialParams={{ key: 'client' }} name="ProductsOffers" options={{ title: 'تخفیف ها', headerShown: false }} {...clientChildren(ProductsOffers, '1')} />
                <Tab.Screen initialParams={{ key: 'client' }} name="ProductsPopulars" options={{ title: 'محبوب ها', headerShown: false }} {...clientChildren(ProductsPopulars, '1')} />
                <Tab.Screen initialParams={{ key: 'client' }} name="SingleProduct" options={({ route }) => ({ title: route.params.title, headerShown: false })} {...clientChildren(SingleProduct, '1')} />
                <Tab.Screen initialParams={{ key: 'client' }} name="CreateComment" options={{ title: 'ارسال نظر' }} {...clientChildren(CreateComment)} />
                <Tab.Screen initialParams={{ key: 'client' }} name="EditComment" options={{ title: 'ویرایش نظر' }} {...clientChildren(EditComment)} />
              </Tab.Navigator>}
            </Tab.Screen>

            <Tab.Screen name="BeforePayment" options={{ tabBarBadge: (allState.init.productBasket && Object.values(allState.init.productBasket).length) ? true : null, headerShown: false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<Icon name="shopping-cart" color={color} size={size - 5} />) }} >{() =>
              <Tab.Navigator screenOptions={{ headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon, tabBarStyle: { display: 'none' } }} >
                <Tab.Screen initialParams={{ key: 'client' }} name="ProductBasket" options={{ headerLeft: () => { }, title: `هزینه ی ارسال به سراسر ایران فقط ${spacePrice(allState.init.postPrice)} تومان`, headerStyle: { backgroundColor: '#ee66aa', }, headerTitleStyle: { color: 'white', fontFamily: Platform.OS === 'ios' ? 'B Baran' : 'B Baran Regular', fontSize: 17, }, headerTitleAlign: 'center' }} {...clientChildren(ProductBasket)} />
                <Tab.Screen initialParams={{ key: 'client' }} name="SetAddressForm" options={{ title: 'فرم خرید', headerShown: true }} {...clientChildren(SetAddressForm)} />
                <Tab.Screen initialParams={{ key: 'client' }} name="Map" options={{ title: 'نقشه', headerShown: true }} {...clientChildren(Map)} />
                <Tab.Screen initialParams={{ key: 'client' }} name="SetAddressInTehran" options={{ title: 'فرم خرید', headerShown: true }} {...clientChildren(SetAddressInTehran)} />
              </Tab.Navigator>}
            </Tab.Screen>

            <Tab.Screen name="User" options={{ headerShown: false, tabBarInactiveTintColor: '#acfa', tabBarActiveTintColor: '#9bf', tabBarActiveBackgroundColor: '#fafafa', tabBarInactiveBackgroundColor: '#fafafa', tabBarLabel: '', tabBarIcon: ({ color, size }) => (<Icon name="user-alt" color={color} size={size - 5} />) }}>{() =>
              <Tab.Navigator initialRouteName={allState.init.tokenValue.fullname ? "Profile" : "Login"} screenOptions={() => { return { headerShown: false, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon, tabBarStyle: { display: 'none' } } }} >
                <Tab.Screen initialParams={{ key: 'user' }} name="Profile" options={{ title: 'پنل کاربری', headerShown: false }} {...userChildren(Profile)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'no' }} name="Register" options={{ headerShown: true, title: 'ثبت نام' }} {...userChildren(Register)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'no' }} name="Login" options={{ headerShown: true, title: 'ورود' }} {...userChildren(Login)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="ForgetPass" options={{ headerShown: true, title: 'فراموشی رمز عبور', headerTitleStyle: { color: 'black', fontFamily: 'IRANSansWeb', fontSize: 15 }, headerTitleAlign: 'center' }} {...userChildren(ForgetPass)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="ResetPass" options={{ headerShown: false, title: 'عوض کردن رمز عبور', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetPass)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="Rules" options={{ headerShown: true, title: 'قوانین', }} {...userChildren(Rules)} />
                <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="GetCode" options={{ title: 'کد ورود' }} {...userChildren(GetCode)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="Logout" options={{ title: 'خروج' }} {...userChildren(Logout)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="SellerPanel" options={{ title: 'پنل فروشندگان', headerShown: false }} {...userChildren(SellerPanel)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="ResetSpecification" options={{ title: 'تغییر مشخصات', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetSpecification)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="SendProposal" options={{ headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال انتقادات و پیشنهادات' }} {...userChildren(SendProposal)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="SendTicket" options={{ title: 'ارسال تیکت' }} {...userChildren(SendTicket)} />
                <Tab.Screen initialParams={{ key: 'user', view: 'true' }} name="GetTicket" options={{ title: 'تیکت', headerShown: true }} {...userChildren(GetTicket)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="TicketBox" options={{ title: 'صندوق تیکت ها' }} {...userChildren(TicketBox)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="ShowLastOrder" options={{ title: 'نمایش آخرین سفارش' }} {...userChildren(ShowLastOrder)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="SavedProducts" options={{ title: 'ذخیره ها' }} {...userChildren(SavedProducts)} />
                <Tab.Screen initialParams={{ key: 'user' }} name="ActiveOrder" {...clientChildren(ActiveOrder)} />
                <Tab.Screen initialParams={{ key: 'user', view: 'true' }} name="FramePayment" options={{ title: 'پرداخت', headerShown: true }} {...userChildren(FramePayment)} />
              </Tab.Navigator>
            }</Tab.Screen>

            {!allState.init.tokenValue.isAdmin ?
              <Tab.Screen name="SocketIo" options={{ tabBarBadge: allState.init.socketIoSeen ? true : null, tabBarVisible: true, headerShown: false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<Icon name="comments" color={color} size={size - 5} />) }} >{() =>
                <Tab.Navigator initialRouteName={allState.init.tokenValue.fullname ? "Profile" : "Login"} >
                  <Tab.Screen initialParams={{ key: 'client' }} name="Socket" options={{ title: 'پرسش سوالات', headerTitleAlign: 'center' }} {...clientChildren(SocketIo)} />
                </Tab.Navigator>
              }</Tab.Screen>
              :
              <Tab.Screen name="Admin" options={{ headerShown: false, tabBarInactiveTintColor: '#acfa', tabBarActiveTintColor: '#9bf', tabBarActiveBackgroundColor: '#fafafa', tabBarInactiveBackgroundColor: '#fafafa', tabBarLabel: '', tabBarIcon: ({ color, size }) => (<M_icon name="admin-panel-settings" color={color} size={size} />) }}>{() =>
                <Tab.Navigator screenOptions={{ headerShown: false, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon, tabBarStyle: { display: 'none' } }} >
                  <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'پنل ادمین' }} {...adminChildren(PanelAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CategoryTable" options={{ title: 'پنل ادمین' }} {...adminChildren(Table)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ProductsTable" options={{ title: 'محصولات' }} {...adminChildren(ProductsTable)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="EditCategory" options={{ title: `ویرایش`, headerShown: true }} {...adminChildren(EditCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="EditProduct" options={{ title: 'ویرایش محصول', headerShown: true }} {...adminChildren(EditProduct)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="SetOffer" options={{ title: 'تنظیم تخفیف', headerShown: true }} {...adminChildren(SetOffer)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="CreateCategory" options={{ title: 'ساخت دسته ی اغذیه', headerShown: true }} {...adminChildren(CreateCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="CreateProduct" options={{ title: `ساخت محصول جدید`, headerShown: true }} {...adminChildren(CreateProduct)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {...adminChildren(AddAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {...adminChildren(Notifee)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeMainAdmin" options={{ title: 'تعویض ادمین اصلی' }} {...adminChildren(ChangeMainAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {...adminChildren(DeleteAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AllPayment" options={{ title: 'خرید های موفق و غیر موفق' }} {...adminChildren(AllPayment)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'نمایش خرید کاربران' }} {...adminChildren(Address)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="QuitsForSeller" options={{ title: 'پرداخت به فروشندگان' }} {...adminChildren(QuitsForSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ListUnAvailable" options={{ title: 'لیست غذا های ناموجود' }} {...adminChildren(ListUnAvailable)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'صندوق انتقادلت و پیشنهادات' }} {...adminChildren(GetProposal)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="Sellers" options={{ title: 'فروشندگان' }} {...adminChildren(Sellers)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="AddSeller" options={{ title: 'افزودن فروشنده ی جدید', headerShown: true }} {...adminChildren(AddSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateSlider" options={{ title: 'ساخت اسلایدر' }} {...adminChildren(CreateSlider)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AdminTicketBox" options={{ title: 'صندوق تیکت ها' }} {...adminChildren(AdminTicketBox)} />
                  <Tab.Screen initialParams={{ key: 'admin', set: 'true' }} name="ShowLatLngOnMap" options={{ title: 'نمایش آدرس روی نقشه', headerShown: true }} {...adminChildren(ShowLatLngOnMap)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="SendPostPrice" options={{ title: 'تایین قیمت پست' }} {...adminChildren(SendPostPrice)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AdminSocketIo" options={{ title: 'پرسش سوالات', headerShown: true }} {...clientChildren(AdminSocketIo)} />
                </Tab.Navigator>
              }</Tab.Screen>}

            <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null }} {...clientChildren(_404)} />
          </BottomTab.Navigator >
        </Column>
      </contextStates.Provider>
    </>
  )
}

// tabBarVisible: false

initialPropType(Home)
initialPropType(Products)
initialPropType(ProductsOffers)
initialPropType(ProductsPopulars)
initialPropType(SingleProduct)
initialPropType(ProductBasket)
initialPropType(Map)
initialPropType(SetAddressForm)
initialPropType(SetAddressInTehran)
initialPropType(CreateComment)
initialPropType(EditComment)
initialPropType(SocketIo)

initialPropType(Register)
initialPropType(Login)
initialPropType(ForgetPass)
initialPropType(ResetPass)
initialPropType(Rules)
initialPropType(GetCode)
initialPropType(Logout)
initialPropType(Profile)
initialPropType(SellerPanel)
initialPropType(ResetSpecification)
initialPropType(SendProposal)
initialPropType(SendTicket)
initialPropType(GetTicket)
initialPropType(TicketBox)
initialPropType(ShowLastOrder)
initialPropType(SavedProducts)
initialPropType(ActiveOrder)
initialPropType(FramePayment)

initialPropType(Table)
initialPropType(ProductsTable)
initialPropType(EditCategory)
initialPropType(EditProduct)
initialPropType(SetOffer)
initialPropType(CreateCategory)
initialPropType(CreateProduct)
initialPropType(AddAdmin)
initialPropType(Notifee)
initialPropType(ChangeMainAdmin)
initialPropType(DeleteAdmin)
initialPropType(AllPayment)
initialPropType(Address)
initialPropType(QuitsForSeller)
initialPropType(ListUnAvailable)
initialPropType(GetProposal)
initialPropType(PanelAdmin)
initialPropType(Sellers)
initialPropType(AddSeller)
initialPropType(CreateSlider)
initialPropType(AdminTicketBox)
initialPropType(ShowLatLngOnMap)
initialPropType(SendPostPrice)
initialPropType(AdminSocketIo)


const linking = {
  // prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {

      Client: {
        screens: {
          Home: '/:key',
          ProductsOffers: '/productsoffers',
          ProductsPopulars: '/productspopulars',
          Products: '/products/:id',
          SingleProduct: '/singleproduct/:id',
          CreateComment: '/createcomment',
          EditComment: '/editcomment',
        }
      },

      BeforePayment: {
        screens: {
          ProductBasket: '/productbasket',
          SetAddressForm: '/setaddressform',
          Map: '/map',
          SetAddressInTehran: '/setaddressintehran',
        }
      },

      SocketIo: {
        screens: {
          Socket: '/socket',
        }
      },

      User: {
        screens: {
          Register: '/register',
          GetCode: '/getCode',
          Login: '/login',
          ForgetPass: '/forgetpass',
          ResetPass: '/resetpass',
          ResetSpecification: '/resetspecification',
          Logout: '/logout',
          SendProposal: '/sendproposal',
          Profile: '/profile',
          SellerPanel: '/sellerpanel',
          SendTicket: '/sendticket',
          GetTicket: '/getticket',
          TicketBox: '/ticketbox',
          ShowLastOrder: '/showlastorder',
          SavedProducts: '/savedproducts',
          ActiveOrder: '/activeorder',
          Rules: '/rules',
          FramePayment: '/framepayment',
        }
      },

      Admin: {
        screens: {
          PanelAdmin: '/paneladmin',
          AdminTicketBox: '/adminTicketBox',
          AddSeller: '/addSeller',
          CreateSlider: '/createslider',
          Sellers: '/sellers',
          AddAdmin: '/addadmin',
          Notifee: '/notifee',
          ChangeMainAdmin: '/changemainadmin',
          DeleteAdmin: '/deleteadmin',
          AllPayment: '/allpayment',
          ListUnAvailable: '/listunavailable',
          GetProposal: '/getproposal',
          Address: '/address',
          QuitsForSeller: '/quitsforseller',
          CategoryTable: '/categorytable',
          CreateCategory: '/createcategory',
          ProductsTable: '/productstable',
          EditCategory: '/editcategory',
          EditProduct: '/editproduct',
          SetOffer: '/setoffer',
          CreateProduct: '/createproduct/:id',
          ShowLatLngOnMap: '/showlatlngonmap',
          SendPostPrice: '/sendpostprice',
          AdminSocketIo: '/adminsocketio',
        }
      },

      NotFound: '*'
    },
  },
};


let deferredInstall
let _App
if (Platform.OS !== 'web') {
  _App = () => {
    // const scheme = useColorScheme();
    return (
      <NavigationContainer /* theme={scheme === 'dark' ? DarkTheme : DefaultTheme} */>
        <Mobile />
      </NavigationContainer>
    )
  }
}
else {
  _App = () => {

    const { height } = useWindowDimensions();

    useEffect(() => {
      window.addEventListener('beforeinstallprompt', (ev) => {
        ev.preventDefault();
        deferredInstall = ev;
      })
    }, [])
    const installStatus = async () => {
      let cancelInstalled = await AsyncStorage.getItem('cancelInstalled')
      if (cancelInstalled < 1 && deferredInstall) {
        deferredInstall.prompt();
        deferredInstall.userChoice.then(async (choice) => {
          if (choice.outcome == 'accepted') { console.log('installed'); }
          else { await AsyncStorage.setItem('cancelInstalled', String(Number(cancelInstalled) + 1)); }
        });
      }
    }
    // const scheme = useColorScheme();
    return (
      <NavigationContainer /* theme={scheme === 'dark' ? DarkTheme : DefaultTheme} */ linking={linking} >
        <Column onStartShouldSetResponderCapture={installStatus} style={{ width: '100%', height }} >
          <Mobile />
        </Column>
      </NavigationContainer>
    )
  }
}



let App = () => {

  const netInfo = useNetInfo()

  return (
    <ErrorBoundary fallback={
      <Column style={{ width: '70%', marginTop: 20, padding: 12, display: 'flex', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }} >
        <P style={{ fontFamily: 'IRANSansWeb', fontWeight: 'bold' }} >اتفاق غیر منتظره ای رخ داد</P>
        <Press onClick={reload} style={{ marginTop: 15, width: 95, height: 37, borderWidth: 1, borderRadius: 4, borderColor: '#08e', justifyContent: 'center', alignItems: 'center' }} >
          <P style={{ fontFamily: 'IRANSansWeb', color: '#08e', fontSize: 12 }} >بارگذاری مجدد</P>
        </Press>
        {netInfo.isConnected === false ? <P fs={13} mt={12} color='red' style={{ fontFamily: 'IRANSansWeb' }} >اتصال اینترنتتان را چک کنید</P> : <></>}
      </Column>} >
      <_App />
    </ErrorBoundary>
  )
}

export default App;
