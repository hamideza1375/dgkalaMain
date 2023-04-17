import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { BackHandler, Platform, ToastAndroid } from "react-native";
import _Alert from "../other/utils/alert";
import backgroundTimer from "../other/utils/backgroundTimer";
import { create } from "../other/utils/notification";
import { truncate } from "../other/utils/truncate";
import { getSingleSavedItems, commentDisLike, commentLike, confirmPayment, createComment, createCommentAnswer, deleteComment, deleteCommentAnswer, disLikeAnswer, editComment, editCommentAnswer, geocode, getCategory, getChildItemComments, getChildItems, getNotification, getOffers, getPopulars, getSendStatus, getSimilars, getSingleComment, getSingleCommentAnswer, getSingleItem, getSlider, getSocketIoSeenUser, likeAnswer, offers, reverse, getSingleSeller } from "../services/clientService";
import { savedItem } from "../services/userService";
import _useEffect from "./_initial";

export function clientController(p) {

  //! getSlider
  this.getSlider = () => {
    useEffect(() => {
      getSlider().then(({ data }) => {
        data && p.setslider(Object.values(data.value))
      })
    }, [])
  }
  //! getSlider


  //! SendStatusForClientBuy
  this.getSendStatus = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(() => {
        if ((navigation.getCurrentRoute()?.name === 'Home') || (navigation.getCurrentRoute()?.name === 'ChildItems') || navigation.getCurrentRoute()?.name === 'SingleItem' || navigation.getCurrentRoute()?.name === 'BeforePayment')
          getSendStatus().then(({ data }) => {
            if (data.checkSend === 1) p.toast.show('', 'سفارش شما ثبت شده و در حال برسی برای ارسال هست')
            else if (data.queueSend === 1) p.toast.success(data.queueSend, 'سفارش شما در صف ارسال قرار گرفت')
          })
      }, 400);
    }, [])
  }
  //! SendStatusForClientBuy

  //! Category
  this.getCategory = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getCategory()
        if (!data?.value) return
        p.setcategory(data.value)
      })()
    }, [])
  }
  //! Category

  //! product
  this.getChildItems = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getChildItems(p.route.params.id)
        if (!data?.value) return
        p.setchildItem(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
        p.setnewSearchArray(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })));
      })()
    }, [p.route.params.id])
  }


  this.getOffers = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getOffers()
        if (!data?.value) return
        p.setoffers(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
        p.setnewSearchOffershArray(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })));
      })()
    }, [p.route.params.id])
  }


  this.getPopulars = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getPopulars()
        if (!data?.value) return
        p.setpopulars(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
        p.setnewSearchPopularsArray(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })));
      })()
    }, [p.route.params.id])
  }


  this.getSimilars = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getSimilars(p.route.params.id)
        if (!data?.value) return
        p.setsimilar(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [p.route.params])
  }
  //! product


  //! singleProduct
  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        if (!data?.value) return
        p.setsingleItem(data.value)
      })()
      return () => p.setsingleItem({})
    }, [p.route.params])
  }
  //! singleProduct


  //! comment
  this.createComment = async () => {
    const { data } = await createComment(p.route.params.id, { message: p.message, fiveStar: p.fiveStar })
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      _comment.push(data.value);
      return _comment
    })
    p.setmessage('')
    p.setfiveStar()
    p.navigation.goBack()
  }

  this.createCommentAnswer = async () => {
    const { data } = await createCommentAnswer(p.route.params.commentId,
      { message: p.message, to: JSON.parse(p.route.params.userphoneOrEmail).map((u, i) => u.slice(0, u.lastIndexOf(i))).join('') })
    p.childItemComment.length && p.setchildItemComment(comment => {
      try {
        const _comment = [...comment]
        const index = _comment.findIndex((c) => c._id === p.route.params.commentId)
        if (index === -1) throw new Error()
        _comment[index].answer.push(data.value)
        return _comment
      } catch (error) { console.error(error); }
    })
    p.setmessage('')
    p.navigation.goBack()
  }

  this.getChildItemComments = async () => {
    useEffect(() => {
      getChildItemComments(p.route.params.id).then(({ data }) => {
        p.setchildItemComment(data.value)
      })
      return () => p.setchildItemComment([])
    }, [p.route.params])
  }


  this.getSingleComment = async () => {
    _useEffect(() => {
      if (!p.route.params.commentId) {
        getSingleComment(p.route.params.id).then(({ data }) => {
          if (!data?.value) return
          p.setmessage(data.value.message);
          p.setfiveStar(data.value.fiveStar);
        })
      } else {
        getSingleCommentAnswer(p.route.params.id, p.route.params.commentId).then(({ data }) => {
          if (!data?.value) return
          p.setmessage(data.value.message);
          p.setfiveStar(data.value.fiveStar);
        })
      }
      return () => {
        p.setmessage('')
        p.setfiveStar()
      }
    }, [])
  }


  this.editComment = async () => {
    const { data } = await editComment(p.route.params.id, { message: p.message, fiveStar: p.fiveStar })
    p.childItemComment.length && p.setchildItemComment(comment => {
      try {
        const _comment = [...comment]
        const findIndex = _comment.findIndex(c => c._id === p.route.params.id)
        _comment[findIndex].message = data.value.message
        _comment[findIndex].fiveStar = data.value.fiveStar
        return _comment
      } catch (err) { console.error('catch', err); }
    })
    p.setmessage('')
    p.setfiveStar()
    p.navigation.goBack()
  }


  this.editCommentAnswer = async () => {
    await editCommentAnswer(p.route.params.id, p.route.params.commentId, { message: p.message })
    p.childItemComment.length && p.setchildItemComment(comment => {
      const _comment = [...comment]
      const index = _comment.findIndex((c) => c._id === p.route.params.id)
      const answer = _comment[index].answer
      const answerIndex = answer.findIndex((a) => (a._id === p.route.params.commentId))
      answer[answerIndex].message = p.message
      return _comment
    })
    p.setmessage('')
    p.navigation.goBack()
  }


  this.deleteComment = async (commentid) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteComment(commentid)
            p.setchildItemComment(comment => comment.filter(c => c._id !== commentid))
          }
        }
      ]
    )
  }


  this.deleteCommentAnswer = async (id, commentId) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteCommentAnswer(id, commentId)
            p.childItemComment.length && p.setchildItemComment(comment => {
              const _comment = [...comment]
              const index = _comment.findIndex((c) => c._id === id)
              const filter = _comment[index].answer.filter((a) => (a._id !== commentId))
              _comment[index].answer = filter
              return _comment
            })
          }
        }
      ]
    )

  }


  this.like = async (commentid) => {
    const { data } = await commentLike(commentid)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      let findIndex = _comment.findIndex(c => c._id === commentid)
      _comment[findIndex].likeCount = data.value
      return _comment
    })
  }



  this.disLike = async (commentid) => {
    const { data } = await commentDisLike(commentid)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      let findIndex = _comment.findIndex(c => c._id === commentid)
      _comment[findIndex].disLikeCount = data.value
      return _comment
    })
  }


  this.likeAnswer = async (id, commentId) => {
    const { data } = await likeAnswer(id, commentId)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      const findIndex = _comment.findIndex(c => c._id === id)
      const answer = _comment[findIndex].answer
      const answerIndex = answer.findIndex((a) => a._id === commentId)
      _comment[findIndex].answer[answerIndex].likeCount = data.value
      return _comment
    })
  }


  this.disLikeAnswer = async (id, commentId) => {
    const { data } = await disLikeAnswer(id, commentId)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      const findIndex = _comment.findIndex(c => c._id === id)
      const answer = _comment[findIndex].answer
      const answerIndex = answer.findIndex((a) => a._id === commentId)
      _comment[findIndex].answer[answerIndex].disLikeCount = data.value
      return _comment
    })
  }
  //! comment



  //! getNotifee
  this.getNotifee = () => {
    useEffect(() => {
      (async () => {
        let newNotification = await AsyncStorage.getItem('notification')
        const { data } = await getNotification()
        if (data)
          if (data.message && newNotification !== data.message) {
            create(data.title, data.message, require('../other/assets/images/logo.png'))
            await AsyncStorage.setItem('notification', data.message)
          }
      })();
      backgroundTimer(async () => {
        let newNotification = await AsyncStorage.getItem('notification')
        const { data } = await getNotification()
        if (data)
          if (data.message && newNotification !== data.message) {
            create(data.title, data.message, require('../other/assets/images/logo.png'))
            await AsyncStorage.setItem('notification', data.message)
          }
      }, 20000)
    }, [])
  }
  //! getNotifee

  //! seenAndSendNotificationForSocketIo
  this.seenAndSendNotificationForSocketIo = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(async () => {
        const socketTocken = await AsyncStorage.getItem('socketTocken')
        const { data } = await getSocketIoSeenUser(socketTocken)
        let newNotification = await AsyncStorage.getItem('msgNotification')
        if (data)
          if (data.message && !p.tokenValue.isAdmin && newNotification !== data.message) {
            create('جواب پیام شما', truncate(data.message, 30, false), require('../other/assets/images/logo.png'),
              () => {
                window.focus();
                navigation.navigate('SocketIo')
              }
            )
            await AsyncStorage.setItem('msgNotification', data.message)
          }

        AsyncStorage.getItem("token").then(async (token) => {
          if (token) {
            const user = jwtDecode(token);
            const socketTocken = await AsyncStorage.getItem('socketTocken')
            const { data } = await getSocketIoSeenUser(socketTocken)
            const getTime = await AsyncStorage.getItem('socketDate')
            if (data && !user.isAdmin && data.getTime > JSON.parse(getTime)) p.setsocketIoSeen(true)
          }
        })

      }, 2000)
    }, [])
  }
  //! seenAndSendNotificationForSocketIo




  //! getSingleSeller for check available
  this.getSingleSeller = () => {
    _useEffect(() => {
      p.singleItem.sellerId &&
        getSingleSeller(p.singleItem.sellerId).then(({ data }) => {
          p.setavailableSeller(data.value?.available);
        })
      return () => p.setavailableSeller(true)
    }, [p.singleItem.sellerId])
  }
  //! getSingleSeller for check available



  //!SavedItem
  this.getSingleSavedItems = () => {
    _useEffect(() => {
      getSingleSavedItems(p.route.params.id).then(({ data }) => { p.setbookmark(data.value) })
      return () => p.setbookmark(false)
    }, [p.route.params])
  }
  //!SavedItem



  //! payment
  this.confirmPayment = async (city) => {
    const { data } = await confirmPayment({
      productBasket: p.productBasket,
      phone: p.phone,
      unit: p.unit,
      plaque: p.plaque,
      postalCode: p.postalCode,
      address: `${p.state}${(city) ? (city) : (', ' + p.City)}, ${p.address}`,
      latlng: p.latlng,
      description: p.description
    })

    const address = await AsyncStorage.getItem('address')


    if (address !== p.address || !address) {
        _Alert.alert(
          "آدرس جدید در مرورگر ذخیره شود؟",
          "",
          [
            { text: 'cancel', onPress: () => { } },
            {
              text: 'OK', onPress: () => {
                AsyncStorage.setItem('postalCode', p.postalCode).then(() => { })
                AsyncStorage.setItem('address', p.address).then(() => { })
                AsyncStorage.setItem('state', p.state).then(() => { })
                AsyncStorage.setItem('City', p.City).then(() => { })

              }
            }
          ]
        )
    }
    p.navigation.replace('FramePayment', { url: data.value })
  }
  //! payment


  this.setColor = () => {
    _useEffect(() => {
      p.singleItem.title && p.setcolor((color) => {
        const c = { ...color }
        c[p.route.params.id] = color[p.route.params.id] ? color[p.route.params.id] : p.singleItem.color.find(c => c.value > 0).color
        return c
      })
    }, [p.singleItem])
  }


  this.backHandler = () => {
    useEffect(() => {
      if (Platform.OS === 'android') {
        let current = 0
        BackHandler.addEventListener("hardwareBackPress", () => {
          if (p.route.name === 'Home' && p.navigation?.getState()?.index === 0) {
            current += 1
            if (current === 2) { BackHandler.exitApp(); return true }
            ToastAndroid.show("برای خروج دوبار لمس کنید", ToastAndroid.SHORT)
            setTimeout(() => {
              current = 0
            }, 1000);
            return true
          }
        })
        return () => Platform.OS === 'android' && BackHandler.removeEventListener('hardwareBackPress')
      }
    }, [])
  }


  this.savedItem = async () => {
    const { data } = await savedItem(p.route.params.id)
    p.setbookmark(data.value)
  }


  this.removeAsyncStorage = () => {
    useEffect(() => {
      setTimeout(async () => {
        const product = await AsyncStorage.getItem('productBasket')
        const deleteBasket = await AsyncStorage.getItem('deleteBasket')
        product && p.setproductBasket(JSON.parse(product))
        getSendStatus().then(async ({ data }) => {
          if (product && data.checkSend === 1 && !deleteBasket) {
            _Alert.alert(
              'سفارش قبلی از حالت ذخیره پاک شود',
              '',
              [
                {
                  text: 'no', onPress: async () => {
                    await AsyncStorage.setItem('deleteBasket', 'true');
                  }
                },
                {
                  text: 'OK', onPress: async () => {
                    await AsyncStorage.removeItem('productBasket');
                    await AsyncStorage.setItem('deleteBasket', 'true');
                    p.setproductBasket({})
                  }
                }
              ]
            )
          }
        })
      }, 400)
    }, [p.changePage])
  }


  this.deleteProduct = (item) => {
    _Alert.alert(
      "از حذف مطمئنید",
      "",
      [
        { text: 'Cancel', onPress: () => { } },
        {
          text: 'OK', onPress: () => {
            p.setproductBasket((addNumber) => {
              const obj = { ...addNumber }
              delete obj[item]
              AsyncStorage.setItem('productBasket', JSON.stringify(obj)).then(() => { })
              return obj
            })
          }
        }
      ]
    )
  }


}






