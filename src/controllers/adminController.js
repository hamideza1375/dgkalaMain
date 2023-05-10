import { getSingleItem, getAdminTicketSeen, createSlider, getCategorys, changeAvailable, changeMainAdmin, createCategory, createChildItem, createNotification, deleteAddressForOneAdmin, deleteAdmin, deleteAllAddress, deleteCategory, deleteChildItem, deleteMultiProposal, deleteNotification, editCategory, editChildItem, getAllAddress, getAllAdmin, getProposal, listUnAvailable, setAdmin, adminTicketBox, getSocketIoSeen, createSeller, getAllSellers, setSellerAvailable, deleteSeller, getSinleCategory, postedOrder, getAllPaymentSuccessFalseAndTrue, postQueue, getAllAddressForChart, setOffer, getUserForChart, getDataForChart, getChildItems, getChildItemsTable, getPostPrice, sendPostPrice, getQuitsForSeller } from "../services/adminService"
import _useEffect from "./_initial"
import _Alert from "../other/utils/alert"
import { useEffect } from "react"
import axios from "axios"


export function adminController(p) {
  //! Seller
  this.createSeller = async () => {
    const { data } = await createSeller({ brand: p.input2, phone: p.phone })
    p.setsellerTable(seller => {
      const _seller = [...seller]
      _seller.push(data.value)
      return _seller
    })
    p.setinput2('')
    p.setphone('')
    p.navigation.goBack()
  }


  this.getAllSellers = async () => {
    useEffect(() => {
      getAllSellers().then(({ data }) => {
        p.setsellerTable(data.value)
        p.setnewSearchSellerArray(data.value);
      })
    }, [])
  }


  this.deleteSeller = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteSeller(id)
            p.setsellerTable((seller) => seller.filter(s => s._id !== id))
          }
        }
      ]
    )
  }


  this.setSellerAvailable = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await setSellerAvailable(id)
            p.setsellerTable((curentSeller) => {
              const _curentSeller = [...curentSeller]
              const findIndex = curentSeller.findIndex(s => s._id === id)
              _curentSeller[findIndex].available = data.value
              return _curentSeller
            })
          }
        }
      ]
    )
  }
  //! Seller



  //! Category
  this.createCategory = async () => {
    const { data } = await createCategory( { title: p.title, imageUrl: p.imageUrl })
    p.setcategory(category => {
      const _category = [...category]
      _category.push(data.value)
      return _category
    })
    p.settitle('')
    p.setimageUrl({})
  }


  this.getCategorys = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getCategorys()
        p.setcategory(data.value)
      })()
    }, [])
  }



  this.getSinleCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSinleCategory(p.route.params.id)
        p.settitle(data.value.title)
        p.setimageUrl({ name: data.value.imageUrl })
      })()
      return () => {
        p.settitle('')
        p.setimageUrl({})
      }
    }, [])
  }


  this.editCategory = async () => {
    const { data } = await editCategory(p.route.params.id, { title: p.title, imageUrl: p.imageUrl })
    try {
      const _category = [...p.category]
      const index = _category.findIndex(c => c._id === p.route.params.id)
      if (!index) throw new Error()
      _category[index].title = data.value.title
      _category[index].imageUrl = data.value.imageUrl
      p.setcategory(_category)
      p.settitle('')
      p.setimageUrl({})
      p.navigation.goBack()
    } catch (error) { console.error(error); }
  }


  this.deleteCategory = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteCategory(id)
            p.setcategory(category => category.filter(c => c._id !== id))
          }
        }
      ]
    )
  }
  //! Category

  
  //! ChildItem
  this.createChildItem = async () => {
    const { data } = await createChildItem(p.route.params.id, p.route.params.sellerId, {
      image1: p.image1,
      image2: p.image2,
      image3: p.image3,
      image4: p.image4,
      title: p.title,
      price: Number(p.price), 
      info: p.info,
      ram: p.input3,
      cpuCore: p.input4, 
      camera: p.input5,
      storage: p.input6, 
      warranty: p.input7,
      color: JSON.stringify(p.input8),
      display: p.input9,
      operatingSystem: p.input10,
      battery: p.input11,
      network: p.input12,
    })
    p.setchildItem(childItem => childItem.concat(data.value))
    p.settitle('')
    p.setprice('')
    p.setimage1({})
    p.setimage2({})
    p.setimage3({})
    p.setimage4({})
    p.setinfo('')
    p.setinput3('')
    p.setinput4('')
    p.setinput5('')
    p.setinput6('')
    p.setinput7('')
    p.setinput8([])
    p.setinput9('')
    p.setinput10('')
    p.setinput11('')
    p.setinput12('')
  }


  this.getChildItemsTable = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getChildItemsTable(p.route.params.id, p.route.params.sellerId)
        p.setchildItem(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
        p.setnewSearchArray(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })));
      })()
    }, [p.route.params.id, p.route.params.sellerId])
  }




  this.editChildItem = async () => {
    await editChildItem(p.route.params.id, {
      image1: p.image1,
      image2: p.image2,
      image3: p.image3,
      image4: p.image4,
      title: p.title,
      price: Number(p.price),
      info: p.info,
      ram: p.input3, 
      cpuCore: p.input4, 
      camera: p.input5, 
      storage: p.input6, 
      warranty: p.input7, 
      color: JSON.stringify(p.input8), 
      display: p.input9,
      operatingSystem: p.input10,
      battery: p.input11,
      network: p.input12,
    })
    p.settitle('')
    p.setprice('')
    p.setimage1({})
    p.setimage2({})
    p.setimage3({})
    p.setimage4({})
    p.setinfo('')
    p.setinput3('')
    p.setinput4('')
    p.setinput5('')
    p.setinput6('')
    p.setinput7('')
    p.setinput8([])
    p.setinput9('')
    p.setinput10('')
    p.setinput11('')
    p.setinput12('')
    p.navigation.goBack()
  }





  this.deleteChildItem = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteChildItem(id)
            p.setchildItem((childItem) => childItem.filter(c => c._id !== id))
          }
        }
      ]
    )
  }



  this.changeAvailable = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await changeAvailable(id)
            p.setchildItem((childItem) => {
              const findIndex = childItem.findIndex(s => s._id === id)
              if (findIndex !== -1)
                childItem[findIndex].available = data.value
              return childItem
            })
            p.setlistUnAvailabe((listUnAvailabe) => listUnAvailabe.filter(s => s._id !== id))
          }
        }
      ]
    )
  }


  this.setOffer = async () => {
    const { data } = await setOffer(p.route.params.id, { offerTime: Number(p.offerTime), offerValue: Number(p.offerValue) })

    p.setchildItem((childItem) => {
      const findIndex = childItem.findIndex(s => s._id === p.route.params.id)
      if (findIndex !== -1) {
        childItem[findIndex].offerTime = data.value.offerTime
        childItem[findIndex].offerValue = data.value.offerValue
      }
      return childItem
    })
    p.setofferTime('')
    p.setofferValue('')
    p.navigation.goBack()
  }
  //! ChildItem



  this.listUnAvailable = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await listUnAvailable()
        p.setlistUnAvailabe(data.value)
      })()
    }, [])
  }


  //!SingleItem
  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        p.settitle(data.value.title)
        p.setprice(data.value.price)
        p.setimage1({ name: data.value.imageUrl1 })
        p.setimage2({ name: data.value.imageUrl2 })
        p.setimage3({ name: data.value.imageUrl3 })
        p.setimage4({ name: data.value.imageUrl4 })
        p.setinfo(data.value.info)
        p.setinput3(data.value.ram)
        p.setinput4(data.value.cpuCore)
        p.setinput5(data.value.camera)
        p.setinput6(data.value.storage)
        p.setinput7(data.value.warranty)
        p.setinput8(data.value.color)
        p.setinput9(data.value.display)
        p.setinput10(data.value.operatingSystem)
        p.setinput11(data.value.battery)
        p.setinput12(data.value.network)
      })()
      return () => {
        p.settitle('')
        p.setprice('')
        p.setimage1({})
        p.setimage2({})
        p.setimage3({})
        p.setimage4({})
        p.setinfo('')
        p.setinput3('')
        p.setinput4('')
        p.setinput5('')
        p.setinput6('')
        p.setinput7('')
        p.setinput8([])
        p.setinput9('')
        p.setinput10('')
        p.setinput11('')
        p.setinput12('')
      }
    }, [])
  }
  //!SingleItem



  //! Admin
  this.setAdmin = async () => {
    await setAdmin({ phoneOrEmail: p.phoneOrEmail })
    p.setphoneOrEmail('')
  }


  this.deleteAdmin = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteAdmin(p.phoneOrEmail)
            p.setallAdmin(admin =>
              admin.filter(a => a.phoneOrEmail !== p.phoneOrEmail)
            )
          }
        }
      ]
    )
  }


  this.getAllAdmin = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAdmin()
        p.setallAdmin(data.value)
      })()
    }, [])
  }



  this.logout = async () => {
    await AsyncStorage.removeItem("token");
    p.settokenValue({})
    axios.defaults.headers.common["Authorization"] = ''
    p.navigation.replace("Home")
  }


  this.changeMainAdmin = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await changeMainAdmin({ adminPhone: p.adminPhone, newAdminPhone: p.newAdminPhone })
            p.setadminPhone('')
            p.setnewAdminPhone('')
            this.logout()
          }
        }
      ]
    )
  }
  //! Admin


  //! Proposal
  this.getProposal = async () => {
    _useEffect(() => {
      getProposal().then(({ data }) => {
        p.setproposal(data.value)
      })
      return () => p.setproposalId([])
    }, [])
  }


  this.deleteMultiProposal = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteMultiProposal({ proposalId: p.proposalId })
            p.proposalId.map(pId => (
              p.setproposal(proposal => proposal.filter((pr) => pr._id !== pId))
            ))
          }
        }
      ]
    )
  }
  //! Proposal


  //! Notification
  this.createNotification = async () => {
    await createNotification({ title: p.title, message: p.message })
    p.settitle('')
    p.setmessage('')
    p.navigation.goBack()
  }



  this.deleteNotification = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteNotification()
          }
        }
      ]
    )
  }
  //! Notification


  //! Address Payment
  this.getAllAddress = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAddress()
        p.setallAddress(data.value)
        p.setnewSearchAddressArray(data.value)
      })()
    }, [])
  }


  this.postedOrder = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await postedOrder(id)
            p.setallAddress(addres => addres.filter(a => a._id !== id))
          }
        }
      ]
    )

  }


  this.postQueue = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await postQueue(id)
            p.setallAddress(allAddres => {
              const _allAddres = [...allAddres]
              const index = _allAddres.findIndex(a => a._id === id)
              _allAddres[index].queueSend = data.value
              return _allAddres
            })
          }
        }
      ]
    )
  }


  this.getAllPaymentSuccessFalseAndTrue = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllPaymentSuccessFalseAndTrue()
        p.setallPaymentSuccessFalseAndTrue(data.value)
      })()
    }, [])
  }
  //! Address Payment



  //! QuitsForSeller
  this.getQuitsForSeller = async () => {
    useEffect(() => {
      (async () => {
        const { data } = await getQuitsForSeller()
        p.setallQuitsSeller(data.value)
      })()
    }, [])
  }
  //! QuitsForSeller




  //! PostPrice
  this.sendPostPrice = () => {
    sendPostPrice({ price: Number(p.price) }).then(() => {
      p.setprice('')
      p.navigation.goBack()
    })
  }

  this.getPostPrice = () => {
    useEffect(() => { setTimeout(() => { getPostPrice().then(({ data }) => { p.setpostPrice(data.value) }) }, 100); }, [])
  }
  //! PostPrice



  //! TicketBox
  this.adminTicketBox = async () => {
    _useEffect(() => {
      adminTicketBox().then(({ data }) => {
        p.setadminTicketBox(data.value)
      })
    }, [])
  }


  this.getAdminTicketSeen = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAdminTicketSeen()
        p.setticketSeen(data.seen)
      })()
    }, [])
  }
  //! TicketBox


  //! DataForChart
  this.getDataForChart = async () => {
    useEffect(() => {
      // !p.usersLength &&
      (async () => {
        const { data } = await getDataForChart()
        p.setaddress7DeyForChart(data.getAddress7DeyForChart)
        setTimeout(() => {
          p.setusersLength(data.getUsersLength)
          p.setusers7DeyForChart(data.getUsers7DeyForChart)
        }, 1000);
        setTimeout(() => {p.setaddress1YearsForChart(data.getAddress1YearsForChart)}, 2000);

      })()
    }, [])
  }
  //! DataForChart


  //!SocketIoSeen
  this.getSocketIoSeen = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSocketIoSeen()
        p.setsocketIoSeen(data)
      })()
    }, [])
  }
  //!SocketIoSeen


  //! createSlider
  this.createSlider = async () => {
    await createSlider({
      image1: p.sliderImage1,
      image2: p.sliderImage2,
      image3: p.sliderImage3,
      image4: p.sliderImage4,
      image5: p.sliderImage5,
      image6: p.sliderImage6,
    })
    p.setsliderImage1({})
    p.setsliderImage2({})
    p.setsliderImage3({})
    p.setsliderImage4({})
    p.setsliderImage5({})
    p.setsliderImage6({})
    p.navigation.goBack()
  }
  //! createSlider
}