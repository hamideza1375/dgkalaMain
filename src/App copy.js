import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, LogBox } from "react-native";


import Home from './views/client/Home'
import ChildItems from './views/client/ChildItems'
import ChildOffers from "./views/client/ChildOffers";
import ChildPopulars from "./views/client/ChildPopulars";
import SingleItem from './views/client/SingleItem'
import BeforePayment from './views/client/BeforePayment'
import SetAddressForm from "./views/client/SetAddressForm";
import Map from "./views/client/Map";
import SetAddressInTehran from "./views/client/SetAddressInTehran";
import CreateComment from "./views/client/CreateComment";
import EditComment from "./views/client/EditComment";
import SocketIo from "./socketIo/socketIo";

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
import SavedItems from "./views/user/SavedItems";
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
import TableCategory from "./views/admin/TableCategory";
import TableChildItems from "./views/admin/TableChildItems";
import EditCategory from "./views/admin/EditCategory";
import EditChildItem from "./views/admin/EditChildItem";
import SetOffer from "./views/admin/SetOffer";
import CreateCategory from "./views/admin/CreateCategory";
import CreateChildItem from "./views/admin/CreateChildItem";
import ShowLatLngOnMap from "./views/admin/ShowLatLngOnMap";
import SendPostPrice from "./views/admin/SendPostPrice";
import PanelAdmin from "./views/admin/PanelAdmin";
import Sellers from "./views/admin/Sellers";
import AddSeller from "./views/admin/AddSeller";
import CreateSlider from "./views/admin/CreateSlider";
import AdminTicketBox from "./views/admin/AdminTicketBox";

import { Button, Dropdown, Img, Init, Column } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import ToastProvider, { Toast } from "./other/utils/toast";
import { header } from "./other/Layout/Layout";
import { rtl } from "./other/utils/rtl"
import online from "./other/utils/online";
import reload from "./other/utils/reload";

import { allChildren, _initController } from "./controllers/_initial";
import { userController } from "./controllers/userController";
import { adminController } from "./controllers/adminController";
import { clientController } from "./controllers/clientController";

import { states, contextStates } from "./context/_context";
import { initialPropType } from "./context/_initialState";

rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Mobile = () => {
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState.client)
  const p = { ...allState.client, ...allState.user, ...allState.admin, toast }
  const { clientChildren, userChildren, adminChildren } = new allChildren({ client: { ...allState.client, toast }, user: { ...allState.user, toast }, admin: { ...allState.admin, toast } })
  const height = Platform.OS === 'web' ? '100vh' : '100%'
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

  try {
    return (
      <>
        <ToastProvider {...allState.init} />
        {allState.init.splash ?
          <>
            <Img src={allState.init.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
            {!online()?<Button outline mb={1} onClick={() => { reload() }} >بارگذاری مجدد</Button>:<></>}
          </>
          :
          <Column h={height} w='100%' minw={280} onClick={() => { allState.init.shownDropdown && allState.init.setshownDropdown(false); allState.init.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
            <contextStates.Provider value={{ ...allState.init, toast }}>
              <Dropdown root {...allState.init}><Column>{allState.init.dropdownValue}</Column></Dropdown>
              <Init ref={(e) => allState.init.set$(e)} id={'s'} />
              <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
                <Tab.Group>
                  <Tab.Screen initialParams={{ key: 'client' }} name="Home" options={{ title: 'دیجی کالا', headerShown: false }} {...clientChildren(Home, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildItems" options={{ title: 'محصولات', headerShown: false }} {...clientChildren(ChildItems, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildOffers" options={{ title: 'تخفیف ها', headerShown: false }} {...clientChildren(ChildOffers, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildPopulars" options={{ title: 'محبوب ها', headerShown: false }} {...clientChildren(ChildPopulars, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SingleItem" options={({ route }) => ({ title: route.params.title, headerShown: false })} {...clientChildren(SingleItem, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="BeforePayment" options={{ title: `هزینه ی ارسال به سراسر ایران فقط ${allState.init.postPrice} تومان`, headerStyle: { backgroundColor: '#ddd' }, headerTitleStyle: { color: 'black', fontFamily: 'B Baran Regular', fontWeight: 'bold' } }} {...clientChildren(BeforePayment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="Map" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(Map)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SetAddressForm" options={{ title: 'فرم خرید', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(SetAddressForm)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SetAddressInTehran" options={{ title: 'فرم خرید', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(SetAddressInTehran)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="CreateComment" options={{ title: 'ارسال نظر' }} {...clientChildren(CreateComment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="EditComment" options={{ title: 'ویرایش نظر' }} {...clientChildren(EditComment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SocketIo" options={{ title: 'پرسش سوالات', headerShown: true }} {...clientChildren(SocketIo)} />
                </Tab.Group>

                <Tab.Group screenOptions={{ headerShown:false }}>
                  <Tab.Screen initialParams={{ key: 'user', active: 'no' }} name="Register" options={{headerShown:true, title: 'ثبت نام' }} {...userChildren(Register)} />
                  <Tab.Screen initialParams={{ key: 'user', active: 'no' }} name="Login" options={{headerShown:true, title: 'ورود' }} {...userChildren(Login)} />
                  <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="ForgetPass" options={{headerShown:true, title: 'فراموشی رمز عبور', headerTitleStyle: { color: 'black', fontFamily: 'IRANSansWeb', fontSize: 15 }, headerTitleAlign: 'center' }} {...userChildren(ForgetPass)} />
                  <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="ResetPass" options={{headerShown:true, title: 'عوض کردن رمز عبور', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetPass)} />
                  <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="Rules" options={{headerShown:true, title: 'قوانین', }} {...userChildren(Rules)} />
                  <Tab.Screen initialParams={{ key: 'user', active: 'yess' }} name="GetCode" options={{ title: 'کد ورود' }} {...userChildren(GetCode)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="Logout" options={{ title: 'خروج' }} {...userChildren(Logout)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="Profile" options={{ title: 'پنل کاربری', headerShown: false }} {...userChildren(Profile)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SellerPanel" options={{ title: 'پنل فروشندگان', headerShown: false }} {...userChildren(SellerPanel)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ResetSpecification" options={{ title: 'تغییر مشخصات', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetSpecification)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SendProposal" options={{ headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال انتقادات و پیشنهادات' }} {...userChildren(SendProposal)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SendTicket" options={{ title: 'ارسال تیکت' }} {...userChildren(SendTicket)} />
                  <Tab.Screen initialParams={{ key: 'user', view:'true' }} name="GetTicket" options={{ title: 'تیکت', headerShown:true }} {...userChildren(GetTicket)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="TicketBox" options={{ title: 'صندوق تیکت ها' }} {...userChildren(TicketBox)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ShowLastOrder" options={{ title: 'نمایش آخرین سفارش' }} {...userChildren(ShowLastOrder)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SavedItems" options={{ title: 'ذخیره ها' }} {...userChildren(SavedItems)} />
                  <Tab.Screen initialParams={{ key: 'user', view:'true' }} name="FramePayment" options={{ title: 'پرداخت', headerShown:true }} {...userChildren(FramePayment)} />
                </Tab.Group>

                <Tab.Group screenOptions={{ headerShown:false }}>
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableCategory" options={{ title: 'پنل ادمین' }} {...adminChildren(TableCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableChildItems" options={({ route }) => ({ title: 'محصولات' })} {...adminChildren(TableChildItems)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="EditCategory" options={({ route }) => ({ title: `ویرایش`, headerShown:true })} {...adminChildren(EditCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="EditChildItem" options={({ route }) => ({ title: 'ویرایش محصول', headerShown:true })} {...adminChildren(EditChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="SetOffer" options={({ route }) => ({ title: 'تنظیم تخفیف', headerShown:true })} {...adminChildren(SetOffer)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="CreateCategory" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه', headerShown:true })} {...adminChildren(CreateCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="CreateChildItem" options={({ route }) => ({ title: `ساخت محصول جدید`, headerShown:true })} {...adminChildren(CreateChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {...adminChildren(AddAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {...adminChildren(Notifee)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeMainAdmin" options={{ title: 'تعویض ادمین اصلی' }} {...adminChildren(ChangeMainAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {...adminChildren(DeleteAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AllPayment" options={{ title: 'خرید های موفق و غیر موفق' }} {...adminChildren(AllPayment)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'نمایش خرید کاربران' }} {...adminChildren(Address)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="QuitsForSeller" options={{ title: 'پرداخت به فروشندگان' }} {...adminChildren(QuitsForSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ListUnAvailable" options={{ title: 'لیست غذا های ناموجود' }} {...adminChildren(ListUnAvailable)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'صندوق انتقادلت و پیشنهادات' }} {...adminChildren(GetProposal)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'پنل ادمین' }} {...adminChildren(PanelAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="Sellers" options={{ title: 'فروشندگان' }} {...adminChildren(Sellers)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="AddSeller" options={{ title: 'افزودن فروشنده ی جدید', headerShown:true }} {...adminChildren(AddSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateSlider" options={{ title: 'ساخت اسلایدر' }} {...adminChildren(CreateSlider)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AdminTicketBox" options={{ title: 'صندوق تیکت ها' }} {...adminChildren(AdminTicketBox)} />
                  <Tab.Screen initialParams={{ key: 'admin', set:'true' }} name="ShowLatLngOnMap" options={{ title: 'نمایش آدرس روی نقشه', headerShown:true }} {...adminChildren(ShowLatLngOnMap)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="SendPostPrice" options={{ title: 'تایین قیمت پست' }} {...adminChildren(SendPostPrice)} />
                </Tab.Group>

                <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {...clientChildren(_404)} />
              </Tab.Navigator >
            </contextStates.Provider>
          </Column>
        }
      </>
    )

  } catch (error) {
    console.log(error);
  }
}


initialPropType(Home)
initialPropType(ChildItems)
initialPropType(ChildOffers)
initialPropType(ChildPopulars)
initialPropType(SingleItem)
initialPropType(BeforePayment)
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
initialPropType(SavedItems)
initialPropType(FramePayment)

initialPropType(TableCategory)
initialPropType(TableChildItems)
initialPropType(EditCategory)
initialPropType(EditChildItem)
initialPropType(SetOffer)
initialPropType(CreateCategory)
initialPropType(CreateChildItem)
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


const linking = {
  // prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/home',
      ChildItems: '/childitems/:id',
      ChildOffers: '/childoffers',
      ChildPopulars: '/childpopulars',
      SingleItem: '/singleitem/:id',
      BeforePayment: '/beforepayment',
      SetAddressForm: '/setaddressform',
      Map: '/map',
      SocketIo: '/socketio',
      SetAddressInTehran: '/setaddressintehran',
      CreateComment: '/createcomment',
      EditComment: '/editcomment',

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
      SavedItems: '/saveditems',
      Rules: '/rules',
      FramePayment: '/framepayment',

      AdminTicketBox: '/adminTicketBox',
      AddSeller: '/addSeller',
      CreateSlider: '/createslider',
      Sellers: '/sellers',
      PanelAdmin: '/paneladmin',
      AddAdmin: '/addadmin',
      Notifee: '/notifee',
      ChangeMainAdmin: '/changemainadmin',
      DeleteAdmin: '/deleteadmin',
      AllPayment: '/allpayment',
      ListUnAvailable: '/listunavailable',
      GetProposal: '/getproposal',
      Address: '/address',
      QuitsForSeller: '/quitsforseller',
      TableCategory: '/tablecategory',
      CreateCategory: '/createcategory',
      TableChildItems: '/tablechildItems',
      EditCategory: '/editcategory',
      EditChildItem: '/editchilditem',
      SetOffer: '/setoffer',
      CreateChildItem: '/createchilditem/:id',
      ShowLatLngOnMap: '/showlatlngonmap',
      SendPostPrice: '/sendpostprice',
      NotFound: '*'
    },
  },
};



let App
if (Platform.OS !== 'web') {
  App = () => {
    return (
      <NavigationContainer>
        <Mobile />
      </NavigationContainer>
    )
  }
}
else {
  App = () => {
    return (
      <NavigationContainer linking={linking} >
        <Column flex={1} style={{ minHeight: '100vh' }} dir='rtl' >
          <Mobile />
        </Column>
      </NavigationContainer>
    )
  }
}

export default App;



