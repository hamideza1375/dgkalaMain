import { useRef, useState } from 'react';
import { Dimensions } from "react-native";
import PropTypes from 'prop-types';

export function initial() {
  const _width = Dimensions.get('window').width;
  const _height = Dimensions.get('window').height;
  const [_list, set_list] = useState([])
  const [splash, setSplash] = useState(true)
  const [height, setheight] = useState(_height)
  const [width, setwidth] = useState(_width)
  const [star1, setstar1] = useState(true)
  const [star2, setstar2] = useState(true)
  const [star3, setstar3] = useState(true)
  const [star4, setstar4] = useState(true)
  const [star5, setstar5] = useState(true)
  const [fiveStar, setfiveStar] = useState(5)
  const [plaque, setplaque] = useState('')
  const [unit, setunit] = useState('')
  const [address, setaddress] = useState('')
  const [postalCode, setpostalCode] = useState('')
  const [message, setmessage] = useState('')
  const [tokenValue, settokenValue] = useState({})
  const [captcha, setcaptcha] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [phoneOrEmail, setphoneOrEmail] = useState('')
  const [password, setpassword] = useState('')
  const [oldPassword, setoldPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState(60 * 1000 * 60 * 24 * 365)
  const [stateCity, setstateCity] = useState([])
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setimageUrl] = useState({})
  const [videoUrl, setvideoUrl] = useState({})
  const [meanStar, setmeanStar] = useState(0)
  const [info, setinfo] = useState('')
  const [code, setcode] = useState('')
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const [$, set$] = useState()
  const [$input] = useState(new Map())
  const refInput = useRef()
  const [clientX, setclientX] = useState(0)
  const [clientY, setclientY] = useState(0)
  const [dropdownValue, setdropdownValue] = useState('')
  const [shownDropdown, setshownDropdown] = useState(false)
  const [input1, setinput1] = useState('') // phone
  const [input2, setinput2] = useState('') // brand
  const [input3, setinput3] = useState('') // ram
  const [input4, setinput4] = useState('') // cpuCore
  const [input5, setinput5] = useState('') // camera
  const [input6, setinput6] = useState('') // storage
  const [input7, setinput7] = useState('') // waranty
  const [input8, setinput8] = useState([]) // color
  const [input9, setinput9] = useState('') // display
  const [input10, setinput10] = useState('') // operatingSystem
  const [input11, setinput11] = useState('') // battery
  const [input12, setinput12] = useState('') // network
  const [sliderImage1, setsliderImage1] = useState({})
  const [sliderImage2, setsliderImage2] = useState({})
  const [sliderImage3, setsliderImage3] = useState({})
  const [sliderImage4, setsliderImage4] = useState({})
  const [sliderImage5, setsliderImage5] = useState({})
  const [sliderImage6, setsliderImage6] = useState({})
  const [image1, setimage1] = useState({})
  const [image2, setimage2] = useState({})
  const [image3, setimage3] = useState({})
  const [image4, setimage4] = useState({})
  const [offerTime, setofferTime] = useState('')
  const [offerValue, setofferValue] = useState('')
  const [City, setCity] = useState('')
  const [state, setstate] = useState('')
  const [latlng, setlatlng] = useState({ lat: 0, lng: 0 })
  const [postPrice, setpostPrice] = useState(35000)
  const [changePage, setchangePage] = useState(false)

  const [changeProduct, setchangeProduct] = useState(false)

  const [socketIoSeen, setsocketIoSeen] = useState(false)
  const [productBasket, setproductBasket] = useState([])
  const refMap = useRef(new Map())
  const [logoUrl] = useState(require('../other/assets/images/logo.png'))
  const refDropdown = useRef()
  const [rootOpacity, setrootOpacity] = useState(1)

  const [homeNavigate, sethomeNavigate] = useState('')
  const [homeParams, sethomeParams] = useState('')
  const [getCodeGoBack, setgetCodeGoBack] = useState(false)
  const [getCodeView, setgetCodeView] = useState(true)

  const timerInterwal = useRef()
  const [goToUser, setgoToUser] = useState(true)
  const [homeScreen, sethomeScreen] = useState(false)


  this.all = {
    homeScreen, sethomeScreen,
    timerInterwal,
    goToUser, setgoToUser,
    // logoUrl: Platform.OS === 'web' ? '/logo.png' : require('../other/assets/images/logo.png'),
    getCodeView, setgetCodeView,
    getCodeGoBack, setgetCodeGoBack,
    homeNavigate, sethomeNavigate,
    homeParams, sethomeParams,
    rootOpacity, setrootOpacity,
    refDropdown,
    refMap,
    socketIoSeen, setsocketIoSeen,
    productBasket, setproductBasket,
    changeProduct, setchangeProduct,
    changePage, setchangePage,
    logoUrl: logoUrl,
    postPrice, setpostPrice,
    latlng, setlatlng,
    state, setstate, City, setCity,
    image1, setimage1,
    image2, setimage2,
    image3, setimage3,
    image4, setimage4,
    sliderImage1, setsliderImage1,
    sliderImage2, setsliderImage2,
    sliderImage3, setsliderImage3,
    sliderImage4, setsliderImage4,
    sliderImage5, setsliderImage5,
    sliderImage6, setsliderImage6,
    input2, setinput2,
    input3, setinput3,
    input4, setinput4,
    input5, setinput5,
    input6, setinput6,
    input7, setinput7,
    input8, setinput8,
    input9, setinput9,
    input10, setinput10,
    input11, setinput11,
    input12, setinput12,
    offerTime, setofferTime,
    offerValue, setofferValue,
    stateCity, setstateCity,
    clientX, setclientX,
    clientY, setclientY,
    dropdownValue, setdropdownValue,
    shownDropdown, setshownDropdown,
    splash, setSplash,
    star5, setstar5,
    star4, setstar4,
    star3, setstar3,
    star2, setstar2,
    star1, setstar1,
    fiveStar, setfiveStar,
    width, setwidth,
    height, setheight,
    input1, setinput1,
    _list, set_list,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    password, setpassword,
    oldPassword, setoldPassword,
    phone, setphone,
    phoneOrEmail, setphoneOrEmail,
    email, setemail,
    fullname, setfullname,
    tokenValue, settokenValue,
    unit, setunit,
    plaque, setplaque,
    address, setaddress,
    postalCode, setpostalCode,
    message, setmessage,
    captcha, setcaptcha,
    refInput,
    $input,
    $, set$,
    showActivity, setshowActivity,
    rand, setRand,
    code, setcode,
    info, setinfo,
    meanStar, setmeanStar,
    imageUrl, setimageUrl,
    videoUrl, setvideoUrl,
    price, setprice,
    title, settitle,
  }

}




export const initialPropType = (component) => {
  component.propTypes = {
    changePage: PropTypes.bool,
    postPrice: PropTypes.number,
    latlng: PropTypes.object,
    state: PropTypes.string,
    City: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
    image4: PropTypes.object,
    sliderImage1: PropTypes.object,
    sliderImage2: PropTypes.object,
    sliderImage3: PropTypes.object,
    sliderImage4: PropTypes.object,
    sliderImage5: PropTypes.object,
    sliderImage6: PropTypes.object,
    input1: PropTypes.string, // phone
    input2: PropTypes.string, // brand
    input3: PropTypes.string, // ram
    input4: PropTypes.string, // cpuCore
    input5: PropTypes.string, // camera
    input6: PropTypes.string, // storage
    input7: PropTypes.string, // waranty
    input8: PropTypes.array, // color
    input9: PropTypes.string, // display
    input10: PropTypes.string, // operatingSystem
    input11: PropTypes.string, // battery
    input12: PropTypes.string, // network
    stateCity: PropTypes.array,
    dropdownBottom: PropTypes.bool,
    dropdownRight: PropTypes.bool,
    clientX: PropTypes.number,
    clientY: PropTypes.number,
    dropdownValue: PropTypes.any,
    shownDropdown: PropTypes.bool,
    splash: PropTypes.bool,
    star5: PropTypes.bool,
    star4: PropTypes.bool,
    star3: PropTypes.bool,
    star2: PropTypes.bool,
    star1: PropTypes.bool,
    fiveStar: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    _list: PropTypes.array,
    remember: PropTypes.number,
    confirmPassword: PropTypes.string,
    password: PropTypes.string,
    oldPassword: PropTypes.string,
    phone: PropTypes.string,
    phoneOrEmail: PropTypes.string,
    email: PropTypes.string,
    fullname: PropTypes.string,
    tokenValue: PropTypes.object,
    unit: PropTypes.string,
    plaque: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    message: PropTypes.string,
    captcha: PropTypes.string,
    refInput: PropTypes.any,
    showActivity: PropTypes.bool,
    rand: PropTypes.number,
    code: PropTypes.string,
    info: PropTypes.string,
    meanStar: PropTypes.number,
    imageUrl: PropTypes.object,
    videoUrl: PropTypes.object,
    title: PropTypes.string,
    // price: PropTypes.string,
    // offerTime: PropTypes.string,
    // offerValue: PropTypes.string,
    // logoUrl: PropTypes.string,
  }
}