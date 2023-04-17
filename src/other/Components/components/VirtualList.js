// // import { NavigationContainer, useNavigation } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import React, { useEffect, useRef } from "react";
// // import { View, Platform } from "react-native";
// // import { Button, Div, Form, Icon, Init, P, SearchBar, Span } from "./Components/Html";
// // import _404 from "./other/404";
// // import { adminState } from "./state/adminState";
// // import { foodState, home } from "./state/foodState";
// // import { userState } from "./state/userState";
// // import { propTypes, states, contextStates } from "./utils/context/_context";
// // import ToastProvider, { Toast } from "./utils/toast";
// // import { Layout, header } from "./other/Layout";
// // import { rtl } from "./other/rtl"
// // import { LogBox } from 'react-native';

// // import Home from './screens/mobile/Home'
// // import ChildBobile from './screens/mobile/ChildBobile'
// // rtl()
// // LogBox.ignoreAllLogs();



// // const Tab = createNativeStackNavigator()
// // const Food = () => {
// //   const navigation = useNavigation()
// //   let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
// //   const allState = states()
// //   const toast = new Toast(allState)
// //   const p = { ...allState, toast }
// //   home(p)
// //   const _food = ({ navigation, route }) => new foodState({ ...p, navigation, route })
// //   const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
// //   const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
// //   const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props), })

// //   const _children = (Component, key) => ({ children: (props) => <Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })



// //   useEffect(() => {
// //     p.$input.set('a', 'a');
// //   }, [])

// //   const ref = useRef()

// //   const height = Platform.OS === 'web' ? '100vh' : '100%'
// //   return (
// //     <Span h={height} w='100%' onClick={()=>{p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display:'flex',transform: [{ scale: 0 }] } })}}>
// //       <contextStates.Provider value={p}>
// //         <Init ref={(e) => allState.set$(e)} id={'s'} />
// //         <ToastProvider {...p} />
// //         <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
// //           <Tab.Group>
// //             <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
// //             <Tab.Screen name="ChildBobile" options={{ title: 'home', header:()=>
// //             <SearchBar Register={p.width > 395 ?true:false}  icon={'filter'} iconPress={()=>{p.setshowFilterModal(true)}} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'}
// //             logoPress={()=>navigation.navigate('Home')}
// //             row={<Span fd='row' mt={19} >
// //               <P fs={10} mh={7} >موبایل تبلت</P>
// //               <P fs={10} mh={7} >هدفون هنزفیری</P>
// //               <P fs={10} mh={7} >لوازم جانبی</P>
// //               </Span>}
// //              src={require('./assets/images/logo.png')} /> }} {..._children(ChildBobile)} />
// //           </Tab.Group>
// //           <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
// //         </Tab.Navigator >
// //       </contextStates.Provider>
// //     </Span>
// //   )
// // }


// // // propTypes(Home)

// // const linking = {
// //   prefixes: ['localhost:3000://', 'http://localhost:3000'],
// //   config: {
// //     screens: {
// //       Home: '/Home',
// //       ChildBobile: '/ChildBobile',
// //       // ChildBobile: '/ChildBobile:id',
// //       NotFound: '*'
// //     },
// //   },
// // };


// // let App
// // if (Platform.OS !== 'web') {
// //   App = () => {
// //     return (
// //       <NavigationContainer>
// //         <Food />
// //       </NavigationContainer>
// //     )
// //   }
// // }
// // else {
// //   App = () => {
// //     return (
// //       <NavigationContainer linking={linking} >
// //         <View flex={1} style={{ minHeight: '100vh' }} dir='rtl' >
// //           <Food />
// //         </View>
// //       </NavigationContainer>
// //     )
// //   }
// // }

// // export default App;









// import React from 'react';
// import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
// import { List, Vlist } from './Components/Html';

// const array = [{ id: '1', title: 'node', price: '909',color:'red' }, { id: '2', title: 'react', price: '787', color:'green' },{ id: '2', title: 'react', price: '787', color:'pink' }];




// const App = () => {
//   return (
//     <Vlist
//       data={array}
//       renderItem={({ item }) => (
//         <View style={[{ flexDirection: 'row', alignSelf:'center', width:355, borderWidth:2 }, styles.item]}>
//           <Text style={[{ marginHorizontal: 9 ,borderWidth:2}, styles.title]}>{item.title}</Text>
//           <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.price}</Text>
//           <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.color}</Text>
//         </View>
//       )}
//     />
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     width: '50%',
//     alignSelf: 'center'
//   },
//   item: {
//     backgroundColor: '#bbb',
//     height: 150,
//     margin:20
//   },
//   title: {
//     fontSize: 22,
//   },
// });

// export default App;






// import React from 'react';
// import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

// const array = [{ id: '1', title: 'node', price: '909',color:'red' }, { id: '2', title: 'react', price: '787', color:'green' },{ id: '2', title: 'react', price: '787', color:'pink' }];




// const List = (p) => {
//   return (
//     <VirtualizedList
//     keyExtractor={item => item.id}
//     getItemCount={(data) => data.length}
//     getItem={(data, index) => (data[index])}
//     {...p}
//     />
//   );
// }


// const App = () => {
//   return (
//     <List
//       data={array}
//       renderItem={({ item }) => (
//         <View style={[{ flexDirection: 'row' }, styles.item]}>
//           <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.title}</Text>
//           <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.price}</Text>
//           <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.color}</Text>
//         </View>
//       )}
//     />
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     width: '50%',
//     alignSelf: 'center'
//   },
//   item: {
//     backgroundColor: '#bbb',
//     height: 150,
//     justifyContent: 'center',
//     marginVertical: 8,
//     marginHorizontal: 16,
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;