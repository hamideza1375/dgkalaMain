import React, { useState, useEffect, useCallback, useRef } from 'react'
import { KeyboardAvoidingView, Pressable, View, TextInput, Image, StyleSheet, ScrollView, Platform, FlatList } from 'react-native'
import { Input, Button, CheckBox, CheckBoxRadius, List, Column, Row, Py, Br, P, Scroll } from '../Html'
import yub from '../../utils/yub'
import { localhost } from '../../utils/axios/axios'
import A_icon from 'react-native-vector-icons/dist/AntDesign';
import M_icon from 'react-native-vector-icons/dist/MaterialIcons';
const newObj = new Proxy({}, yub);
import { useFocusEffect } from '@react-navigation/native';
import Frm from '../formComponent/Frm'
import InputImage from '../formComponent/InputImage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { context } from '../../../context/_context';

let loginInterval = null

const Form = ({
  webStyle = {}, nativeStyle = {}, timer = false, btn = true,
  contentContainerStyle, mAutoFocus, mt, bgcolor = '#f0f0f0',
  postal, $plaque, $unit, $address,
  city, f, e, op, p, cp, m, ch, c, t, pr, im, i, edit, s, ph, $code, v, style,
  plackTextTop = true,
  pb = 25, pt = 10,
  register,
  autoComplete = true,
  onClick,
  navigation,
  phore,
  checkText,
  children,
  host,
  sizeY = 1,
  top = 10,
  flexDirection,
  $codeAutoFocus,

  fIconLeft, fIconRight, eIconLeft, eIconRight, pIconLeft, pIconRight, cpIconLeft, cpIconRight,
  tIconLeft, tIconRight, prIconLeft, prIconRight, iIconLeft, iIconRight, imIconLeft, imIconRight, phIconLeft, phIconRight,
  phoreIconLeft, phoreIconRight, codeIconLeft, codeIconRight, vIconLeft, vIconRight,
  slider = false, fourImage, offer,
  in1, in2, in3, in4, in5, in6, in7, in8, in9, in10, in11, in12,
  editMessage,
  ...props
}) => {


  const { toast, title, settitle, price, setprice, phone, setphone, phoneOrEmail, setphoneOrEmail, imageUrl, setimageUrl,
    videoUrl, setvideoUrl, info, setinfo, fullname, setfullname, email, setemail, oldPassword, setoldPassword, password, setpassword, confirmPassword, setconfirmPassword,
    postalCode, setpostalCode, plaque, setplaque, unit, setunit, address, setaddress, message, setmessage, code, setcode, captcha, setcaptcha,
    setremember, star1, setstar1, star2, setstar2, star3, setstar3, star4, setstar4, star5, setstar5, fiveStar, setfiveStar, refInput, rand, setRand,

    input1, setinput1, input2, setinput2, input3, setinput3, input4, setinput4, input5, setinput5, input6, setinput6, input7, setinput7, input8, setinput8, input9, setinput9,
    input10, setinput10, input11, setinput11, input12, setinput12
    , sliderImage1, setsliderImage1, sliderImage2, setsliderImage2, sliderImage3, setsliderImage3, sliderImage4, setsliderImage4, sliderImage5, setsliderImage5, sliderImage6, setsliderImage6,
    image1, setimage1, image2, setimage2, image3, setimage3, image4, setimage4, offerTime, setofferTime, offerValue, setofferValue,
    state, setstate, City, setCity,
    height, showActivity, setshowActivity, $input
  } = context()



  const flatlistRef = useRef()

  const [disableClick, setdisableClick] = useState(false)
  const [hidden, sethidden] = useState(false)
  const [show1, setshow1] = useState(false)
  const [topRandom1, settopRandom1] = useState(0)
  const [topRandom2, settopRandom2] = useState(0)
  const [randomArrayNumber] = useState([2, -2, 6, -6, 10, -10])
  const [randomArrayNumber2] = useState([2, -2, 6, -6, 10, -10])



  const [selectStatesValues] = useState([
    "آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام",
    "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان",
    "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان",
    "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان", "مازندران",
    "مرکزی", "هرمزگان", "همدان", "یزد"
  ])



  const [loadCity, setloadCity] = useState([])




  useFocusEffect(useCallback(() => {
    if (city) {
      var selectValues = []
      switch (state) {
        case "آذربایجان شرقی":
          selectValues = ["آذرشهر", "اسکو", "اهر", "بستان آباد", "بناب", "تبریز", "جلفا", "چاراویماق", "سراب", "شبستر", "عجب‌شیر", "کلیبر", "مراغه", "مرند", "ملکان", "میانه", "ورزقان", "هریس", "هشترود"];
          break;
        case "آذربایجان غربی":
          selectValues = ["ارومیه", "اشنویه", "بوکان", "پیرانشهر", "تکاب", "چالدران", "خوی", "سردشت", "سلماس", "شاهین‌دژ", "ماکو", "مهاباد", "میاندوآب", "نقده"];
          break;
        case "اردبیل":
          selectValues = ["اردبیل", "بیله‌سوار", "پارس‌آباد", "خلخال", "کوثر", "گرمی", "مشگین شهر", "نمین", "نیر"]
          break;
        case "اصفهان":
          selectValues = ["آران و بیدگل", "اردستان", "اصفهان", "برخوردار و میمه", "تیران و کرون", "چادگان", "خمینی‌شهر", "خوانسار", "سمیرم", "شهرضا", "سمیرم سفلی", "فریدن", "فریدون‌شهر", "فلاورجان", "کاشان", "گلپایگان", "لنجان", "مبارکه", "نائین", "نجف‌آباد", "نطنز"]
          break;
        case "البرز":
          selectValues = ["ساوجبلاغ", "طالقان", "کرج", "نظرآباد"]
          break;
        case "ایلام":
          selectValues = ["آبدانان", "ایلام", "ایوان", "دره‌شهر", "دهلران", "شیروان و چرداول", "مهران"]
          break;
        case "بوشهر":
          selectValues = ["بوشهر", "تنگستان", "جم", "دشتستان", "دشتی", "دیر", "دیلم", "کنگان", "گناوه"]
          break;
        case "تهران":
          selectValues = ["ورامین", "فیروزکوه", "شهریار", "شمیرانات", "ری", "رباط‌کریم", "دماوند", "تهران", "پاکدشت", "اسلام‌شهر"]
          break;
        case "چهارمحال و بختیاری":
          selectValues = ["اردل", "بروجن", "شهرکرد", "فارسان", "کوهرنگ", "لردگان"]
          break;
        case "خراسان جنوبی":
          selectValues = ["بیرجند", "درمیان", "سرایان", "سربیشه", "فردوس", "قائنات", "نهبندان"]
          break;
        case "خراسان رضوی":
          selectValues = ["بردسکن", "تایباد", "تربت جام", "تربت حیدریه", "چناران", "خلیل‌آباد", "خواف", "درگز", "رشتخوار", "سبزوار", "سرخس", "فریمان", "قوچان", "کاشمر", "کلات", "گناباد", "مشهد", "مه ولات", "نیشابور"]
          break;
        case "خراسان شمالی":
          selectValues = ["اسفراین", "بجنورد", "جاجرم", "شیروان", "فاروج", "مانه و سملقان"]
          break;
        case "خوزستان":
          selectValues = ["آبادان", "امیدیه", "اندیمشک", "اهواز", "ایذه", "باغ‌ملک", "بندر ماهشهر", "بهبهان", "خرمشهر", "دزفول", "دشت آزادگان", "رامشیر", "رامهرمز", "شادگان", "شوش", "شوشتر", "گتوند", "لالی", "مسجد سلیمان", "هندیجان"]
          break;
        case "زنجان":
          selectValues = ["ابهر", "ایجرود", "خدابنده", "خرمدره", "زنجان", "طارم", "ماه‌نشان"]
          break;
        case "سمنان":
          selectValues = ["دامغان", "سمنان", "شاهرود", "گرمسار", "مهدی‌شهر"]
          break;
        case "سیستان و بلوچستان":
          selectValues = ["ایرانشهر", "چابهار", "خاش", "دلگان", "زابل", "زاهدان", "زهک", "سراوان", "سرباز", "کنارک", "نیک‌شهر"]
          break;
        case "فارس":
          selectValues = ["آباده", "ارسنجان", "استهبان", "اقلید", "بوانات", "پاسارگاد", "جهرم", "خرم‌بید", "خنج", "داراب", "زرین‌دشت", "سپیدان", "شیراز", "فراشبند", "فسا", "فیروزآباد", "قیر و کارزین", "کازرون", "لارستان", "لامرد", "مرودشت", "ممسنی", "مهر", "نی‌ریز"]
          break;
        case "قزوین":
          selectValues = ["آبیک", "البرز", "بوئین‌زهرا", "تاکستان", "قزوین"]
          break;
        case "قم":
          selectValues = ["قم"];
          break;
        case "کردستان":
          selectValues = ["بانه", "بیجار", "دیواندره", "سروآباد", "سقز", "سنندج", "قروه", "کامیاران", "مریوان"]
          break;
        case "کرمان":
          selectValues = ["بافت", "بردسیر", "بم", "جیرفت", "راور", "رفسنجان", "رودبار جنوب", "زرند", "سیرجان", "شهر بابک", "عنبرآباد", "قلعه گنج", "کرمان", "کوهبنان", "کهنوج", "منوجان"]
          break;
        case "کرمانشاه":
          selectValues = ["اسلام‌آباد غرب", "پاوه", "ثلاث باباجانی", "جوانرود", "دالاهو", "روانسر", "سرپل ذهاب", "سنقر", "صحنه", "قصر شیرین", "کرمانشاه", "کنگاور", "گیلان غرب", "هرسین"]
          break;
        case "کهگیلویه و بویراحمد":
          selectValues = ["بویراحمد", "بهمئی", "دنا", "کهگیلویه", "گچساران"]
          break;
        case "گلستان":
          selectValues = ["آزادشهر", "آق‌قلا", "بندر گز", "ترکمن", "رامیان", "علی‌آباد", "کردکوی", "کلاله", "گرگان", "گنبد کاووس", "مراوه‌تپه", "مینودشت"]
          break;
        case "گیلان":
          selectValues = ["آستارا", "آستانه", "اشرفیه", "املش", "بندر انزلی", "رشت", "رضوانشهر", "رودبار", "رودسر", "سیاهکل", "شفت", "صومعه‌سرا", "طوالش", "فومن", "لاهیجان", "لنگرود", "ماسال"]
          break;
        case "لرستان":
          selectValues = ["ازنا", "الیگودرز", "بروجرد", "پل‌دختر", "خرم‌آباد", "دورود", "دلفان", "سلسله", "کوهدشت"]
          break;
        case "مازندران":
          selectValues = ["آمل", "بابل", "بابلسر", "بهشهر", "تنکابن", "جویبار", "چالوس", "رامسر", "ساری", "سوادکوه", "قائم‌شهر", "گلوگاه", "محمودآباد", "نکا", "نور", "نوشهر"]
          break;
        case "مرکزی":
          selectValues = ["آشتیان", "اراک", "تفرش", "خمین", "دلیجان", "زرندیه", "ساوه", "شازند", "کمیجان", "محلات"]
          break;
        case "هرمزگان":
          selectValues = ["ابوموسی", "بستک", "بندر عباس", "بندر لنگه", "جاسک", "حاجی‌آباد", "خمیر", "رودان", "قشم", "گاوبندی", "میناب"]
          break;
        case "همدان":
          selectValues = ["اسدآباد", "بهار", "تویسرکان", "رزن", "کبودرآهنگ", "ملایر", "نهاوند", "همدان"]
          break;
        case "یزد":
          selectValues = ["ابرکوه", "اردکان", "بافق", "تفت", "خاتم", "صدوق", "طبس", "مهریز", "میبد", "یزد"]
          break;

      }
      setloadCity(selectValues)
    }
  }, [state]))







  useFocusEffect(useCallback(() => {
    if (s) {
      if (fiveStar == 1) { setstar1(true); setstar2(false); setstar3(false); setstar4(false); setstar5(false) }
      if (fiveStar == 2) { setstar1(true); setstar2(true); setstar3(false); setstar4(false); setstar5(false) }
      if (fiveStar == 3) { setstar1(true); setstar2(true); setstar3(true); setstar4(false); setstar5(false) }
      if (fiveStar == 4) { setstar1(true); setstar2(true); setstar3(true); setstar4(true); setstar5(false) }
      if (fiveStar == 5) { setstar1(true); setstar2(true); setstar3(true); setstar4(true); setstar5(true) }
    }
  }, [fiveStar]))


  useEffect(() => {
    ((setfiveStar) && (s)) && setfiveStar(() => {
      let a
      switch (true) {
        case star5:
          a = 5
          break;
        case star4:
          a = 4
          break;
        case star3:
          a = 3
          break;
        case star2:
          a = 2
          break;
        case star1:
          a = 1
          break;
        default:
          a = 0
          break;
      }
      return a
    })

  }, [star1, star2, star3, star4, star5])



  useEffect(() => {
    if (showActivity) setdisableClick(true)
    else setdisableClick(false)
  }, [showActivity])



  const [oSecure, setoSecure] = useState(true)
  const [secure, setSecure] = useState(true)
  const [secure2, setSecure2] = useState(true)
  const [show, setshow] = useState(ch && !checkText ? false : true)
  const [show2, setShow2] = useState(false);
  const [changeRand, setchangeRand] = useState(false);
  const [changeremember, setchangeremember] = useState(true);

  useFocusEffect(useCallback(() => {
    setRand && setRand(parseInt(Math.random() * 9000 + 1000))
    return () => setcaptcha && setcaptcha('')
  }, [show2]))

  const [_fullname, set_Fullname] = useState()
  const [_email, set_Email] = useState()
  const [_oldPassword, set_OldPassword] = useState()
  const [_password, set_Password] = useState()
  const [_confirmPassword, set_ConfirmPassword] = useState()
  const [_unit, set_Unit] = useState()
  const [_plaque, set_Plaque] = useState()
  const [_address, set_Address] = useState()
  const [_postalCode, set_PostalCode] = useState()
  const [_title, set_Title] = useState()
  const [_price, set_Price] = useState()
  const [_code, set_Code] = useState()
  const [_imageUrl, set_ImageUrl] = useState()
  const [_videoUrl, set_VideoUrl] = useState()

  const [_message, set_Message] = useState()
  const [_info, set_Info] = useState()
  const [_offerTime, set_OfferTime] = useState()
  const [_offerValue, set_OfferValue] = useState()
  const [_checkbox, set_Checkbox] = useState()
  const [_captcha, set_Captcha] = useState()
  const [_fiveStar, set_FiveStar] = useState()
  const [_phone, set_Phone] = useState()
  const [_phore, set_Phore] = useState()
  const [_stateCity, set_StateCity] = useState()

  const [_input1, set_Input1] = useState()
  const [_input2, set_Input2] = useState()
  const [_input3, set_Input3] = useState()
  const [_input4, set_Input4] = useState()
  const [_input5, set_Input5] = useState()
  const [_input6, set_Input6] = useState()
  const [_input7, set_Input7] = useState()
  const [_input8, set_Input8] = useState()
  const [_input9, set_Input9] = useState()
  const [_input10, set_Input10] = useState()
  const [_input11, set_Input11] = useState()
  const [_input12, set_Input12] = useState()


  newObj.phone = phone;
  newObj.phoneOrEmail = phoneOrEmail;
  newObj.fullname = fullname
  newObj.email = email;
  newObj.oldPassword = oldPassword;
  newObj.password = password;
  newObj.confirmPassword = confirmPassword;
  newObj.title = title
  newObj.price = price;
  newObj.code = code
  newObj.imageUrl = imageUrl;
  newObj.videoUrl = videoUrl;
  newObj.info = info;
  newObj.offerTime = offerTime;
  newObj.offerValue = offerValue;
  newObj.message = message;
  newObj.plaque = plaque;
  newObj.unit = unit;
  newObj.address = address;
  newObj.postalCode = postalCode;
  newObj.fiveStar = fiveStar;

  newObj.input1 = input1;
  newObj.input2 = input2;
  newObj.input3 = input3;
  newObj.input4 = input4;
  newObj.input5 = input5;
  newObj.input6 = input6;
  newObj.input7 = input7;
  // newObj.input8 = input8;
  newObj.input9 = input9;
  newObj.input10 = input10;
  newObj.input11 = input11;
  newObj.input12 = input12;



  var stct = city ? (City.length && state.length) ? true : false : true

  var pon = ph ? newObj.phone === phone : true
  var poe = phore ? newObj.phoneOrEmail === phoneOrEmail : true
  var flm = f ? newObj.fullname === fullname : true
  var eml = e ? newObj.email === email : true
  var opsd = op ? newObj.oldPassword === oldPassword : true
  var psd = p ? newObj.password === password : true
  var cfpsd = cp ? newObj.confirmPassword === confirmPassword : true
  var unt = $unit ? newObj.unit === unit : true
  var plq = $plaque ? newObj.plaque === plaque : true
  var adrs = $address ? newObj.address === address : true
  var pst = postal ? newObj.postalCode === postalCode : true
  var msg = ((m) && (!editMessage)) ? newObj.message === message : true
  var cap = c ? (rand == captcha) ? true : false : true
  var titl = t ? newObj.title === title : true
  var prc = pr ? newObj.price === price : true
  var cod = $code ? newObj.code === code : true
  var img = im ? (!edit ? newObj.imageUrl === imageUrl : true) : true
  var vdo = v ? (!edit ? newObj.videoUrl === videoUrl : true) : true
  var inf = i ? newObj.info === info : true
  var offTime = offer ? newObj.offerTime === offerTime : true
  var offValue = offer ? newObj.offerValue === offerValue : true

  var inpt1 = in1 ? newObj.input1 === input1 : true
  var inpt2 = in2 ? newObj.input2 === input2 : true
  var inpt3 = in3 ? newObj.input3 === input3 : true
  var inpt4 = in4 ? newObj.input4 === input4 : true
  var inpt5 = in5 ? newObj.input5 === input5 : true
  var inpt6 = in6 ? newObj.input6 === input6 : true
  var inpt7 = in7 ? newObj.input7 === input7 : true
  // var inpt8 = in8 ? newObj.input8 === input8 : true
  var inpt9 = in9 ? newObj.input9 === input9 : true
  var inpt10 = in10 ? newObj.input10 === input10 : true
  var inpt11 = in11 ? newObj.input11 === input11 : true
  var inpt12 = in12 ? newObj.input12 === input12 : true




  const [red, setred] = useState(false)
  const [blue, setblue] = useState(false)
  const [green, setgreen] = useState(false)
  const [yellow, setyellow] = useState(false)
  const [silver, setsilver] = useState(false)
  const [gold, setgold] = useState(false)
  const [purple, setpurple] = useState(false)
  const [brown, setbrown] = useState(false)
  const [black, setblack] = useState(false)
  const [white, setwhite] = useState(false)
  const [orange, setorange] = useState(false)


  const [redNumber, setredNumber] = useState('')
  const [blueNumber, setblueNumber] = useState('')
  const [greenNumber, setgreenNumber] = useState('')
  const [yellowNumber, setyellowNumber] = useState('')
  const [silverNumber, setsilverNumber] = useState('')
  const [goldNumber, setgoldNumber] = useState('')
  const [purpleNumber, setpurpleNumber] = useState('')
  const [brownNumber, setbrownNumber] = useState('')
  const [blackNumber, setblackNumber] = useState('')
  const [whiteNumber, setwhiteNumber] = useState('')
  const [orangeNumber, setorangeNumber] = useState('')


  useFocusEffect(useCallback(() => {
    if(input8){
    for (let i in input8) {
      if (input8[i]?.value > 0 && input8[i]?.color === 'red') { setredNumber(input8[i]?.value); setred(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'blue') { setblueNumber(input8[i]?.value); setblue(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'green') { setgreenNumber(input8[i]?.value); setgreen(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'yellow') { setyellowNumber(input8[i]?.value); setyellow(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'silver') { setsilverNumber(input8[i]?.value); setsilver(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'gold') { setgoldNumber(input8[i]?.value); setgold(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'purple') { setpurpleNumber(input8[i]?.value); setpurple(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'brown') { setbrownNumber(input8[i]?.value); setbrown(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'black') { setblackNumber(input8[i]?.value); setblack(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'white') { setwhiteNumber(input8[i]?.value); setwhite(true) }
      if (input8[i]?.value > 0 && input8[i]?.color === 'orange') { setorangeNumber(input8[i]?.value); setorange(true) }
    }
}

    return () => {
    if(input8){
      setred(false)
      setblue(false)
      setgreen(false)
      setyellow(false)
      setsilver(false)
      setgold(false)
      setpurple(false)
      setbrown(false)
      setblack(false)
      setwhite(false)
      setorange(false)

      setredNumber('')
      setblueNumber('')
      setgreenNumber('')
      setyellowNumber('')
      setsilverNumber('')
      setgoldNumber('')
      setpurpleNumber('')
      setbrownNumber('')
      setblackNumber('')
      setwhiteNumber('')
      setorangeNumber('')
    }
    }
  }, [input8]))


  const [scrollEnabled, setscrollEnabled] = useState(true)
  const [changeScroll, setchangeScroll] = useState(true)

  const scrollCount = useRef(0)

  const setScroll = () => {
if(city){
    scrollCount.current += 1
    if (scrollCount.current === 2) { setchangeScroll(false) }
    if (!changeScroll && scrollCount.current === 2) { setscrollEnabled(true) }
    setTimeout(() => {
      scrollCount.current = 0
    }, 2000);
 } }



  return (
    <ScrollView onMoveShouldSetResponder={setScroll} scrollEnabled={Platform.OS !== 'web' ? scrollEnabled : true} contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]} style={[{ backgroundColor: bgcolor, borderRadius: 3, marginTop: mt }, Platform.OS === 'web' ? webStyle : nativeStyle]} >

      <View style={[styles.viewContainer, { paddingTop: top }, style]} >
        <View style={[{ transform: [{ scaleY: sizeY }], padding: 10, paddingBottom: pb, paddingTop: pt }, flexDirection === 'row' && Platform.OS === 'web' ? { flexDirection: 'row', flexWrap: 'wrap' } : {}]}>


          {city &&
            <View onStartShouldSetResponderCapture={() => { setchangeScroll(true); setscrollEnabled(false) }} style={[{ borderWidth: (!stct && _stateCity) ? 1 : 0, borderColor: 'red', width: '100%', height: height / 1.7, maxHeight: 280, marginVertical: 10, marginHorizontal: 10, flexGrow: 1, flexDirection: 'row-reverse' }]}>

              <Column onMoveShouldSetResponder={() => setscrollEnabled(true)} h='100%' jc='center' mt={2} ph={9} >
                <Column ai='center' jc='center' >
                  <Py as='flex-start' ph={8} ta='center' >استان:</Py>
                  <Column ai='center' jc='center' bgcolor='#fff' border={[1, 'silver']} br={4} >
                    <Input value={state} onChangeText={(text) => setstate(text)} fw='100' fs={11} ta='center' style={{ maxWidth: 90, height: 33 }} />
                  </Column>
                </Column>

                <Column onMoveShouldSetResponder={() => setscrollEnabled(true)} ai='center' jc='center' mt={7} >
                  <Py as='flex-start' ph={8} ta='center' >شهر:</Py>
                  <Column ai='center' jc='center' bgcolor='#fff' border={[1, 'silver']} br={4} >
                    <Input value={City} onChangeText={(text) => setCity(text)} fw='100' fs={11} ta='center' style={{ maxWidth: 90, height: 33 }} />
                  </Column>
                </Column>
              </Column>

              <Column f={1}>
                <Py ml={8} ph={8} ta='center' >انتخاب استان و شهر:</Py>

                <FlatList
                  ref={flatlistRef}
                  data={selectStatesValues}
                  renderItem={({ item, index }) => (
                    <Column m={3} >
                      <List onClick={() => { setstate(item); setTimeout(() => { flatlistRef.current?.scrollToIndex({ index: index, animate: true }) }, 330) }} h={46} fontSize={12} header={item} header2={item === state ? City : ''} bgcolor={'white'} color='black' border={[1, 'silver']} hidden={hidden} sethidden={sethidden}
                        bodyRow={
                          ((loadCity.length) && (state === item)) &&
                          loadCity.map((item2, index) =>
                            <Row key={index} maxw={400} jc='space-between' w='100%' mv={2} bbw={1} ai='center' border={[0, 'silver']} >
                              <P fw='100' fs={11} >{item2}</P>
                              <CheckBoxRadius onPressIn={() => { setCity(item2); }} item={{ value: item + ',' + item2 }} index={index}
                                border={[1, 'silver']} ml={4} mb={3}
                                show={show1} setshow={setshow1}
                                style={{ transform: [{ scale: .9 }] }} />
                            </Row>
                          )
                        }
                      >
                      </List>
                    </Column>
                  )}
                />
              </Column>
            </View>}

          {(!stct && _stateCity) ? <Py pr={5} style={[styles.textinput, { color: 'red', fontSize: 10, fontWeight: '100' }]} >کادر بالا را تکمیل کنید</Py> : <></>}

          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />



          {f &&
            <Frm
            textId='fullnameInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={autoComplete ? "username" : 'none'}
              autoComplete={autoComplete ? "username" : 'off'}
              icon='user'
              p='نام و نام خوانوادگی'
              newObj={newObj.fullname}
              iconLeft={fIconLeft}
              iconRight={fIconRight}
              state={fullname}
              setState={setfullname}
              getBlur={_fullname}
              setBlur={set_Fullname}
              yub={flm}
              styles={styles} />
          }

          {e &&
            <Frm
            textId='emailInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={autoComplete ? "emailAddress" : 'none'}
              autoComplete={autoComplete ? "email" : 'off'}
              keyboardType="email-address"
              icon="envelope"
              p='ایمیل'
              newObj={newObj.email}
              iconLeft={eIconLeft}
              iconRight={eIconRight}
              state={email}
              setState={setemail}
              getBlur={_email}
              setBlur={set_Email}
              yub={eml}
              styles={styles}
            />
          }

          {ph &&
            <Frm
            textId='phoneInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={autoComplete ? "telephoneNumber" : 'none'}
              autoComplete={autoComplete ? "tel" : 'off'}
              keyboardType="phone-pad"
              icon="phone"
              p='شماره تلفن '
              iconLeft={phIconLeft}
              iconRight={phIconRight}
              state={phone}
              setState={setphone}
              getBlur={_phone}
              setBlur={set_Phone}
              newObj={newObj.phone}
              yub={pon}
              styles={styles}
            />
          }


          {phore &&
            <Frm
            textId='phoneOrEmailInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              icon="phone"
              keyboardType="email-address"
              p='ایمیل یا شماره تلفن'
              newObj={newObj.phoneOrEmail}
              iconLeft={phoreIconLeft}
              iconRight={phoreIconRight}
              state={phoneOrEmail}
              setState={setphoneOrEmail}
              getBlur={_phore}
              setBlur={set_Phore}
              yub={poe}
              styles={styles}
            />
          }

          {op &&
            <Frm
            textId='oldPasswordInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={'none'}
              autoComplete={'off'}
              icon={!oSecure ? "eye" : "eye-slash"}
              p="رمز عبور قبلی"
              state={oldPassword}
              setState={setoldPassword}
              getBlur={_oldPassword}
              setBlur={set_OldPassword}
              newObj={newObj.oldPassword}
              yub={opsd}
              styles={styles}
              secureTextEntry={oSecure}
              iconPress={() => { setoSecure(!oSecure); }}
            />
          }

          {p &&
            <Frm
            textId='passwordInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={autoComplete ? "password" : 'none'}
              autoComplete={autoComplete ? "password" : 'off'}
              icon={!secure ? "eye" : "eye-slash"}
              p="رمز عبور"
              p2={op?"رمز عبور جدید":'رمز عبور'}
              iconLeft={pIconLeft}
              iconRight={pIconRight}
              state={password}
              setState={setpassword}
              getBlur={_password}
              setBlur={set_Password}
              newObj={newObj.password}
              yub={psd}
              styles={styles}
              secureTextEntry={secure}
              iconPress={() => { setSecure(!secure); }}
            />
          }

          {cp &&
            <Frm
            textId='confirmPasswordInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType={autoComplete ? "password" : 'none'}
              autoComplete={autoComplete ? "password" : 'off'}
              icon={!secure2 ? "eye" : "eye-slash"}
              p=" تکرار رمز عبور "
              iconLeft={cpIconLeft}
              iconRight={cpIconRight}
              state={confirmPassword}
              setState={setconfirmPassword}
              getBlur={_confirmPassword}
              setBlur={set_ConfirmPassword}
              newObj={newObj.confirmPassword}
              yub={cfpsd}
              styles={styles}
              secureTextEntry={secure2}
              iconPress={() => { setSecure2(!secure2); }}
            />
          }


          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />

          {$address &&
            <Frm
            textId='addressInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              initialHeight
              multiline
              plackTextTop={plackTextTop}
              icon={'address-card'}
              p="آدرس"
              state={address}
              setState={setaddress}
              getBlur={_address}
              setBlur={set_Address}
              newObj={newObj.address}
              yub={adrs}
              styles={styles}
            />
          }




          {postal &&
            <Frm
            textId='postalCodeInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              textContentType="postalCode"
              autoComplete="postal-code"
              icon={'building'}
              p="کد پستی"
              state={postalCode}
              setState={setpostalCode}
              getBlur={_postalCode}
              setBlur={set_PostalCode}
              newObj={newObj.postalCode}
              yub={pst}
              keyboardType="numeric"
              styles={styles}
            />
          }


          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />



          <Row w='100%' jc='space-around' >
            {$plaque &&
              <Frm
              textId='plaqueInput'
            $input={$input}
              setscrollEnabled={setscrollEnabled}
                plackTextTop={plackTextTop}
                p="پلاک"
                state={plaque}
                setState={setplaque}
                getBlur={_plaque}
                setBlur={set_Plaque}
                newObj={newObj.plaque}
                yub={plq}
                keyboardType="numeric"
                w={140}
                styles={styles}
              />
            }


            {$unit &&
              <Frm
              textId='unitInput'
            $input={$input}
              setscrollEnabled={setscrollEnabled}
                plackTextTop={plackTextTop}
                p="واحد"
                state={unit}
                setState={setunit}
                getBlur={_unit}
                setBlur={set_Unit}
                newObj={newObj.unit}
                yub={unt}
                keyboardType="numeric"
                w={140}
                styles={styles}
              />
            }
          </Row>


          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />


          {t &&
            <Frm
            textId='titleInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              m_icon="title"
              p="عنوان "
              iconLeft={tIconLeft}
              iconRight={tIconRight}
              state={title}
              setState={settitle}
              getBlur={_title}
              setBlur={set_Title}
              newObj={newObj.title}
              yub={titl}
              styles={styles}
            />
          }

          {pr &&
            <Frm
            textId='priceInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              plackTextTop={plackTextTop}
              icon="dollar-sign"
              p=" قیمت "
              p2=" قیمت ( به تومان) "
              iconLeft={prIconLeft}
              iconRight={prIconRight}
              state={price}
              setState={setprice}
              getBlur={_price}
              setBlur={set_Price}
              newObj={newObj.price}
              yub={prc}
              styles={styles}
              keyboardType="numeric"
            />
          }

          {$code &&
            <Frm setscrollEnabled={setscrollEnabled}
              $input={$input}
              textId='inputCodeId'
              plackTextTop={plackTextTop}
              textContentType="oneTimeCode"
              autoComplete="one-time-code"
              autoFocus={$codeAutoFocus}
              m_icon="perm-phone-msg"
              iconSize={25}
              p="کد ورود"
              iconLeft={codeIconLeft}
              iconRight={codeIconRight}
              state={code}
              setState={setcode}
              getBlur={_code}
              setBlur={set_Code}
              newObj={newObj.code}
              yub={cod}
              styles={styles}
              keyboardType="number-pad"
            />
          }



          {in1 &&
            <Frm
            textId='newAdminPhoneInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              textContentType="telephoneNumber"
              autoComplete="off"
              icon="phone"
              plackTextTop={plackTextTop}
              p='ادمین جدید'
              state={input1}
              setState={setinput1}
              getBlur={_input1}
              setBlur={set_Input1}
              newObj={newObj.input1}
              yub={inpt1}
              styles={styles}
              keyboardType="phone-pad"
            />
          }


          {in2 &&
            <Frm
            textId='businessInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="business-center"
              plackTextTop={plackTextTop}
              p='نام تجاری'
              state={input2}
              setState={setinput2}
              getBlur={_input2}
              setBlur={set_Input2}
              newObj={newObj.input2}
              yub={inpt2}
              styles={styles}
            />
          }


          {in3 &&
            <Frm
            textId='ramInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              icon="memory"
              iconSize={17}
              plackTextTop={plackTextTop}
              p='رم'
              state={input3}
              setState={setinput3}
              getBlur={_input3}
              setBlur={set_Input3}
              newObj={newObj.input3}
              yub={inpt3}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in4 &&
            <Frm
            textId='cpuCoreInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="memory"
              plackTextTop={plackTextTop}
              p='مقدار هسته پردازشگر'
              state={input4}
              setState={setinput4}
              getBlur={_input4}
              setBlur={set_Input4}
              newObj={newObj.input4}
              yub={inpt4}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in5 &&
            <Frm
            textId='cameraInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              icon="camera"
              iconSize={17}
              plackTextTop={plackTextTop}
              p='دوربین به مگاپیکسل'
              state={input5}
              setState={setinput5}
              getBlur={_input5}
              setBlur={set_Input5}
              newObj={newObj.input5}
              yub={inpt5}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in6 &&
            <Frm
            textId='storageInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              icon="hdd"
              iconSize={17}
              plackTextTop={plackTextTop}
              p='حافظه داخلی به گیگابایت'
              state={input6}
              setState={setinput6}
              getBlur={_input6}
              setBlur={set_Input6}
              newObj={newObj.input6}
              yub={inpt6}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in7 &&
            <Frm
            textId='warantyInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              icon="award"
              plackTextTop={plackTextTop}
              p='گارانتی به ماه'
              state={input7}
              setState={setinput7}
              getBlur={_input7}
              setBlur={set_Input7}
              newObj={newObj.input7}
              yub={inpt7}
              styles={styles}
              keyboardType='numeric'
            />
          }

          {/* 
          {in8 &&
            <Frm setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="color-lens"
              plackTextTop={plackTextTop}
              p2='red-blue-green-black'
              p='رنگ ها'
              state={input8}
              setState={setinput8}
              getBlur={_input8}
              setBlur={set_Input8}
              newObj={newObj.input8}
              yub={inpt8}
              styles={styles}
            />
          } */}


          {in9 &&
            <Frm
            textId='displayInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="fit-screen"
              plackTextTop={plackTextTop}
              p='اندازه ی صفحه نمایش به اینچ'
              state={input9}
              setState={setinput9}
              getBlur={_input9}
              setBlur={set_Input9}
              newObj={newObj.input9}
              yub={inpt9}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in10 &&
            <Frm
            textId='systemInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="android"
              plackTextTop={plackTextTop}
              p='نوع سیستم عامل'
              state={input10}
              setState={setinput10}
              getBlur={_input10}
              setBlur={set_Input10}
              newObj={newObj.input10}
              yub={inpt10}
              styles={styles}
            />
          }


          {in11 &&
            <Frm
            textId='batryInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="battery-std"
              plackTextTop={plackTextTop}
              p='ظرفیت باطری به میلی آمپر'
              state={input11}
              setState={setinput11}
              getBlur={_input11}
              setBlur={set_Input11}
              newObj={newObj.input11}
              yub={inpt11}
              styles={styles}
              keyboardType='numeric'
            />
          }


          {in12 &&
            <Frm
            textId='networkInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              autoComplete="off"
              m_icon="network-cell"
              plackTextTop={plackTextTop}
              p='نوع شبکه اینترنت'
              state={input12}
              setState={setinput12}
              getBlur={_input12}
              setBlur={set_Input12}
              newObj={newObj.input12}
              yub={inpt12}
              styles={styles}
            />
          }


          {im && <InputImage
            plackTextTop={plackTextTop}
            icon='image'
            p='انتخاب عکس  '
            accept='image'
            mediaType='photo'
            imIconLeft={imIconLeft}
            imIconRight={imIconRight}
            imageUrl={imageUrl}
            setImageUrl={setimageUrl}
            _imageUrl={_imageUrl}
            newObj={newObj.imageUrl}
            img={img}
            styles={styles}
          />}

          {v && <InputImage
            plackTextTop={plackTextTop}
            icon='video-library'
            p='انتخاب ویدئو  '
            accept='video'
            mediaType='video'
            imIconLeft={vIconLeft}
            imIconRight={vIconRight}
            imageUrl={videoUrl}
            setImageUrl={setvideoUrl}
            _imageUrl={_videoUrl}
            newObj={newObj.videoUrl}
            img={vdo}
            styles={styles}
          />}



          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />

          {fourImage &&
            <>
              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس اول ( اصلی ) '
                accept='image'
                mediaType='photo'
                imageUrl={image1}
                setImageUrl={setimage1}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس دوم '
                accept='image'
                mediaType='photo'
                imageUrl={image2}
                setImageUrl={setimage2}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس سوم '
                accept='image'
                mediaType='photo'
                imageUrl={image3}
                setImageUrl={setimage3}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس چهارم '
                accept='image'
                mediaType='photo'
                imageUrl={image4}
                setImageUrl={setimage4}
                styles={styles}
              />

            </>
          }



          {in8 &&
            <Scroll ccStyle={{ flexDirection: 'row', flexWrap: 'wrap' }} w='95%' mh={10} jc='center' as='center' fg={1} bgcolor='#fff' border={[1, '#333']} mt={35} mb={-10} br={4} p={10} >

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }}>
                <CheckBox
                  br={50}
                  bgcolor='red'
                  border={[1, 'red']} ml={4} mb={3}
                  show={red} setshow={setred}
                />
                <TextInput keyboardType='numeric' value={redNumber} onChangeText={(text) => { setredNumber(text); setred(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >قرمز</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='blue'
                  border={[1, 'blue']} ml={4} mb={3}
                  show={blue} setshow={setblue}
                />
                <TextInput keyboardType='numeric' value={blueNumber} onChangeText={(text) => { setblueNumber(text); setblue(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >آبی</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='green'
                  border={[1, 'green']} ml={4} mb={3}
                  show={green} setshow={setgreen}
                />
                <TextInput keyboardType='numeric' value={greenNumber} onChangeText={(text) => { setgreenNumber(text); setgreen(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >سبز</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='yellow'
                  border={[1, 'yellow']} ml={4} mb={3}
                  show={yellow} setshow={setyellow}
                />
                <TextInput keyboardType='numeric' value={yellowNumber} onChangeText={(text) => { setyellowNumber(text); setyellow(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >زرد</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='silver'
                  border={[1, 'silver']} ml={4} mb={3}
                  show={silver} setshow={setsilver}
                />
                <TextInput keyboardType='numeric' value={silverNumber} onChangeText={(text) => { setsilverNumber(text); setsilver(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >نقره ای</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='gold'
                  border={[1, 'gold']} ml={4} mb={3}
                  show={gold} setshow={setgold}
                />
                <TextInput keyboardType='numeric' value={goldNumber} onChangeText={(text) => { setgoldNumber(text); setgold(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >طلایی</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='purple'
                  border={[1, 'purple']} ml={4} mb={3}
                  show={purple} setshow={setpurple}
                />
                <TextInput keyboardType='numeric' value={purpleNumber} onChangeText={(text) => { setpurpleNumber(text); setpurple(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >بنفش</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='brown'
                  border={[1, 'brown']} ml={4} mb={3}
                  show={brown} setshow={setbrown}
                />
                <TextInput keyboardType='numeric' value={brownNumber} onChangeText={(text) => { setbrownNumber(text); setbrown(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >قهوه ای</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='black'
                  border={[1, 'black']} ml={4} mb={3}
                  show={black} setshow={setblack}
                />
                <TextInput keyboardType='numeric' value={blackNumber} onChangeText={(text) => { setblackNumber(text); setblack(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >سیاه</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='#eaeaea'
                  border={[1, '#eaeaea']} ml={4} mb={3}
                  show={white} setshow={setwhite}
                />
                <TextInput keyboardType='numeric' value={whiteNumber} onChangeText={(text) => { setwhiteNumber(text); setwhite(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >سفید</Py>
              </View>

              <View style={{ width: 50, alignSelf: 'center', alignItems: 'center' }} >
                <CheckBox
                  br={50}
                  bgcolor='orange'
                  border={[1, 'orange']} ml={4} mb={3}
                  show={orange} setshow={setorange}
                />
                <TextInput keyboardType='numeric' value={orangeNumber} onChangeText={(text) => { setorangeNumber(text); setorange(true) }} style={{ borderWidth: 1, width: 30, height: 30, padding: 0, marginVertical: 3, borderRadius: 2, fontSize: 13, textAlign: 'center' }} />
                <Py fs={9} fw='100' >نارنجی</Py>
              </View>

            </Scroll>

          }



          {i &&
            <Frm
            textId='infoInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              w='100%'
              plackTextTop={plackTextTop}
              multiline
              icon="info"
              p=" توضیحات "
              iconLeft={iIconLeft}
              iconRight={iIconRight}
              state={info}
              setState={setinfo}
              getBlur={_info}
              setBlur={set_Info}
              newObj={newObj.info}
              yub={inf}
              styles={styles}
            />
          }

          {m &&
            <Frm
            textId='messageInput'
            $input={$input}
            setscrollEnabled={setscrollEnabled}
              w='100%'
              plackTextTop={plackTextTop}
              p="پیام"
              iconLeft={false}
              iconRight={false}
              state={message}
              setState={setmessage}
              getBlur={_message}
              setBlur={set_Message}
              newObj={newObj.message}
              yub={msg}
              styles={styles}
              multiline
              autoFocus={mAutoFocus}
            />
          }



          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />
          {slider === true &&
            <>
              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس اول '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage1}
                setImageUrl={setsliderImage1}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس دوم '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage2}
                setImageUrl={setsliderImage2}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس سوم '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage3}
                setImageUrl={setsliderImage3}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس چهارم '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage4}
                setImageUrl={setsliderImage4}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس پنجم '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage5}
                setImageUrl={setsliderImage5}
                styles={styles}
              />

              <InputImage
                plackTextTop={plackTextTop}
                icon='image'
                p=' عکس ششم '
                accept='image'
                mediaType='photo'
                imageUrl={sliderImage6}
                setImageUrl={setsliderImage6}
                styles={styles}
              />

            </>
          }

          <Br style={{ height: 0, padding: 0, marginTop: 0, marginBottom: 0 }} />

          {offer &&
            <>
              <Frm setscrollEnabled={setscrollEnabled}
                plackTextTop={plackTextTop}
                m_icon="timer"
                p="مدت زمان تخفیف به ساعت"
                state={offerTime}
                setState={setofferTime}
                getBlur={_offerTime}
                setBlur={set_OfferTime}
                newObj={newObj.offerTime}
                yub={offTime}
                styles={styles}
                keyboardType={'numeric'}
              />

              <Frm setscrollEnabled={setscrollEnabled}
                plackTextTop={plackTextTop}
                m_icon="money-off"
                p="درصد تخفیف به عدد"
                state={offerValue}
                setState={setofferValue}
                getBlur={_offerValue}
                setBlur={set_OfferValue}
                newObj={newObj.offerValue}
                yub={offValue}
                styles={styles}
                keyboardType={'numeric'}
              />
            </>
          }



          {ch &&
            <View behavior={"height"} style={{ height: 35, minHeight: 35, justifyContent: 'center', marginTop: 20, marginHorizontal: 10, }}>
              <View style={{ marginVertical: 10 }} >
                <View style={[styles.viewCheckbox, { flexGrow: .4, maxHeight: 20 }]}>
                  <CheckBox show={!checkText ? show : changeremember} setshow={!checkText ? setshow : setchangeremember} />
                  <Py onPress={!checkText ? () => { navigation.navigate('Rules') } : () => { setchangeremember(!changeremember) }} style={{ marginLeft: 11, paddingRight: 7, marginTop: 2 }} >{checkText ? " " + checkText : " موافقت با قوانین "}</Py>
                </View>
                {_checkbox && show == false && <Py fs={11} style={{ color: 'red', alignSelf: 'flex-start' }} >پرکردن فیلد الزامی هست</Py>}
              </View>
            </View>
          }

          {c &&
            <>
              <KeyboardAvoidingView behavior={"height"} style={{ height: 50, minHeight: 50, marginVertical: 8, marginHorizontal: 10 }}>
                <View style={[styles.viewCaptcha, { height: 28, alignItems: 'center' }]}>

                  <View style={{ width: 112, height: 2, marginTop: topRandom1, marginRight: topRandom2, backgroundColor: '#900', position: 'absolute', zIndex: 1000, transform: [{ rotate: '-8deg' }] }} />
                  <View style={{ width: 111, height: 2, marginTop: topRandom2, marginRight: topRandom1, backgroundColor: '#009', position: 'absolute', zIndex: 1000, transform: [{ rotate: '22deg' }] }} />

                  <Image source={{ uri: `${localhost}/captcha.png/${rand}` }} style={styles.imageCaptcha} />
                  <M_icon name="refresh" color="#66bbff" size={22}
                    onPressIn={() => setchangeRand(true)}
                    onPress={() => {
                      setchangeRand(true)
                      setShow2(!show2)
                      setcaptcha('')
                      settopRandom1(randomArrayNumber[Math.floor(Math.random() * randomArrayNumber.length)])
                      settopRandom2(randomArrayNumber2[Math.floor(Math.random() * randomArrayNumber2.length)])
                    }} />
                  <TextInput
                    ref={refInput}
                    keyboardType="numeric"
                    maxLength={4}
                    value={captcha}
                    placeholder="کد امنیتی" style={[styles.TextInput, { borderColor: '#666', fontFamily: 'IRANSansWeb', fontSize: 12 }, rand != captcha && _captcha && { borderColor: '#a22' }]}
                    placeholderTextColor='silver'
                    onChangeText={text => setcaptcha(text)} />
                </View>
                {((_captcha) && (!captcha) ? <Py fs={11} style={{ color: 'red', width: captcha ? 280 : 260 }}>لطفا کادر را پر کنید</Py> : <></>)}
                {((_captcha) && (captcha) && (rand != captcha) ? <Py fs={11} style={{ color: 'red', width: captcha ? 280 : 260 }}> کد وارد شده اشتباه هست</Py> : <></>)}
              </KeyboardAvoidingView>
            </>
          }

          {children &&
            <View behavior={"height"} style={{ height: 70, minHeight: 70, marginVertical: 5 }}>
              {children}
            </View>
          }

          {s &&
            <View behavior={"height"} style={{ height: 70, minHeight: 70, marginVertical: 7 }}>
              <View style={{ minHeight: 42, maxHeight: 45, flexGrow: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, marginTop: 20 }}>
                <View style={{ flexGrow: .5, minHeight: 40, flexDirection: 'row-reverse', alignItems: 'center' }} >

                  {!star1 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => setstar1(true)}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(false); setstar2(false); setstar3(false); setstar4(false); setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star2 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar2(false); setstar3(false); setstar4(false); setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star3 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar5(false); setstar4(false); setstar3(false); }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star4 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); setstar4(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar4(false); setstar5(false); }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star5 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); setstar4(true); setstar5(true) }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                </View>

                {_fiveStar && newObj.fiveStar != fiveStar &&
                  <View style={{ width: '100%', alignItems: 'center', height: 'auto', marginTop: 5 }} >
                    <Py fs={11} style={[{ color: 'red' }]} >
                      {newObj.fiveStar}
                    </Py>
                  </View>
                }

              </View>
            </View>
          }

          {btn &&
            <KeyboardAvoidingView behavior={"height"} style={{ height: 70, minHeight: 70, marginBottom: 15, width: '100%' }}>
              {btn && <Button
                disable={disableClick}
                onPressIn={() => {
                  setinput8(() => {
                    let colorArray = []
                    if (red && redNumber > 0) { colorArray.push({ color: 'red', value: redNumber }) }
                    if (blue && blueNumber > 0) { colorArray.push({ color: 'blue', value: blueNumber }) }
                    if (green && greenNumber > 0) { colorArray.push({ color: 'green', value: greenNumber }) }
                    if (yellow && yellowNumber > 0) { colorArray.push({ color: 'yellow', value: yellowNumber }) }
                    if (silver && silverNumber > 0) { colorArray.push({ color: 'silver', value: silverNumber }) }
                    if (gold && goldNumber > 0) { colorArray.push({ color: 'gold', value: goldNumber }) }
                    if (purple && purpleNumber > 0) { colorArray.push({ color: 'purple', value: purpleNumber }) }
                    if (brown && brownNumber > 0) { colorArray.push({ color: 'brown', value: brownNumber }) }
                    if (black && blackNumber > 0) { colorArray.push({ color: 'black', value: blackNumber }) }
                    if (white && whiteNumber > 0) { colorArray.push({ color: 'white', value: whiteNumber }) }
                    if (orange && orangeNumber > 0) { colorArray.push({ color: 'orange', value: orangeNumber }) }
                    return colorArray
                  })


                  //   let color = {}
                  //   if(red && redNumber > 0) color.red = {color:'red', value:redNumber}
                  //   if(blue && blueNumber > 0) color.blue = 
                  //   if(green && greenNumber > 0) color.green = 
                  //   if(yellow && yellowNumber > 0) color.yellow = 
                  //   if(silver && silverNumber > 0) color.silver = 
                  //   if(gold && goldNumber > 0) color.gold = 
                  //   if(purple && purpleNumber > 0) color.purple = 
                  //   if(brown && brownNumber > 0) color.brown = 
                  //   if(black && blackNumber > 0) color.black = 
                  //   if(white && whiteNumber > 0) color.white = 
                  //   if(orange && orangeNumber > 0) color.orange = 
                  //   return color
                  // })

                  setremember && setremember(changeremember ? (60 * 1000 * 60 * 24 * 365) : ('24h'))
                  set_Fullname(true);
                  set_Email(true);
                  set_OldPassword(true)
                  set_Password(true);
                  set_ConfirmPassword(true);
                  set_Plaque(true);
                  set_Unit(true);
                  set_Address(true);
                  set_PostalCode(true);
                  set_Message(true);
                  set_Checkbox(checkText ? false : true);
                  set_Captcha(true)
                  set_Title(true)
                  set_Price(true)
                  set_ImageUrl(true)
                  set_VideoUrl(true)
                  set_Info(true)
                  set_OfferTime(true)
                  set_OfferValue(true)
                  set_FiveStar(true)
                  set_Phone(true)
                  set_Phore(true)
                  set_StateCity(true)
                  set_Code(true)

                  set_Input1(true)
                  set_Input2(true)
                  set_Input3(true)
                  set_Input4(true)
                  set_Input5(true)
                  set_Input6(true)
                  set_Input7(true)
                  // set_Input8(true)
                  set_Input9(true)
                  set_Input10(true)
                  set_Input11(true)
                  set_Input12(true)

                }}
                onPress={async () => {
                  if (in8 && !Object.values(input8).length) return toast.error('', 'یک رنگ انتخاب کنید')
                  if ((stct) && (flm && eml && opsd, psd && cfpsd && plq && unt && adrs && pst && msg && cap && show && titl && prc && cod && img && vdo && inf && offTime && offValue && pon && poe && star1 && inpt1 && inpt2 && inpt3 && inpt4 && inpt5 && inpt6 && inpt7 && inpt9 && inpt10 && inpt11 && inpt12)) {

                    setdisableClick(true)

                    if (!timer) {
                      setshowActivity(true)
                      onClick()
                    } else {
                      loginInterval && clearInterval(loginInterval)
                      let d = new Date()
                      let locMinut = await AsyncStorage.getItem('getMinutes')

                      let svl = await AsyncStorage.getItem("several")
                      if ((locMinut - d.getMinutes()) <= 1) {
                        await AsyncStorage.removeItem("several")
                        await AsyncStorage.removeItem('getMinutes')
                      }
                      if (JSON.parse(svl) < 5 && JSON.parse(svl) > 0) {
                        loginInterval = setTimeout(async () => {
                          if (JSON.parse(svl) > 0 && locMinut) {
                            AsyncStorage.getItem("several").then((several) => { AsyncStorage.setItem("several", JSON.stringify(JSON.parse(several) - 1)).then(() => { }) })
                            await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() - 5))
                          }
                        }, 60000);
                      }
                      if (JSON.parse(svl) < 5 || (locMinut - d.getMinutes() <= 1)) {
                        await AsyncStorage.removeItem('getTime')
                        await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() + 5))
                        AsyncStorage.getItem("several").then((several) => {
                          AsyncStorage.setItem("several", JSON.stringify(JSON.parse(several) + 1)).then(() => { })
                        })
                        setshowActivity(true)
                        onClick()
                      }
                      else {
                        let loc = await AsyncStorage.getItem('getTime')
                        if (loc === '' || loc === null || !loc) {
                          loginInterval && clearInterval(loginInterval)
                          await AsyncStorage.setItem('getTime', 'true')
                          await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() + 5))
                        }
                        AsyncStorage.getItem('getMinutes').then((locMinut) => {
                          if (JSON.parse(svl) >= 5)
                            alert(`تعداد دفعات وارد شده بیشتر از حد مجاز بود ${locMinut - d.getMinutes() > 0 ? locMinut - d.getMinutes() : 0} دقیقه دیگر دوباره امتحان کنید`)
                        })
                      }

                    }

                  }
                  else {
                    setRand(parseInt(Math.random() * 9000 + 1000))
                    setcaptcha('')
                    settopRandom1(randomArrayNumber[Math.floor(Math.random() * randomArrayNumber.length)])
                    settopRandom2(randomArrayNumber2[Math.floor(Math.random() * randomArrayNumber2.length)])
                    toast.error("خطا", "کادر های قرمز را تصحیح کنید")
                  }
                }}
                style={[styles.btn]} >
                ارسال
              </Button>}
            </KeyboardAvoidingView>}
        </View>
      </View>
    </ScrollView >
  )
}

export default Form
const styles = StyleSheet.create({
  containerScrollView: {
    height: '100%',
    minWidth: '100%',
  },
  closeRecaptcha: {
    fontSize: 31,
    elevation: 1,
    shadowColor: "#f00",
    shadowOpacity: 4,
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    color: 'red',
    opacity: .8
  },

  checkboxGoggleRecaptcha: {
    transform: [{ scale: 2 }],
    borderColor: '#aaa',
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: .2,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 }
  },
  googleRecaptcha: {
    transform: [{ scale: .85 }],
    marginBottom: 17,
    marginTop: 15,
    flexGrow: 1.5,
    height: 105,
    maxHeight: 115,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    width: 111,
    borderRadius: 5,
    borderColor: '#ccc',
    alignSelf: 'center',
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .5,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  animatedBorder: {
    height: 53,
    borderRadius: 5,
    marginBottom: 5,
  },
  containerScrollView: {
    height: '100%',
    minWidth: '100%',
    backgroundColor: '#f0f0f0',
    borderWidth: .3,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  viewContainer: {
    minWidth: '100%',
    justifyContent: 'center',


  },
  contentContainerStyle: {
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderWidth: .3,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },

  btn: {
    flexGrow: .5,
    marginTop: 30,
    marginBottom: 10,
    width: 200,
    alignSelf: 'center',
    height: 45,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  viewChildren: {
    flexGrow: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 5,
    minHeight: 20,
    maxHeight: 24,

  },
  TextInput: {
    borderRadius: 2,
    textAlign: 'right',
    padding: 6,
    width: 61,
    height: 35,
    borderWidth: 1,
    backgroundColor: '#eee'
  },

  imageCaptcha: {
    borderRadius: 2,
    padding: 5,
    width: 105,
    height: 38,

  },
  viewCaptcha: {

    flexDirection: "row",
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: "space-between",
    width: 210,
    marginTop: 25,
    marginBottom: 10,

  },
  viewCheckbox: {
    flexGrow: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
    minHeight: 18,
    marginBottom: 8,
  },

  messageInput: {
    minHeight: 100,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  textinput: {
    height: 19,
    alignSelf: 'flex-start',
    fontSize: 11
  },
  input: {
    fontFamily: 'IRANSansWeb',
    marginBottom: 5,
    minHeight: 50,
    minWidth: '90%',
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2

    },
  },
  viewInput: {
    minWidth: "100%",
    marginBottom: 19,
    flexGrow: 1.5,
    minHeight: 80,
    maxHeight: 80,
  },

  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header22: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput22: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
})