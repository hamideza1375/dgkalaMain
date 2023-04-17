import { useRef, useState } from "react"


export function client() {
  const [slider, setslider] = useState([])
  const [category, setcategory] = useState([])
  const [childItem, setchildItem] = useState([])
  const [singleItem, setsingleItem] = useState({})
  const [offers, setoffers] = useState([])
  const [populars, setpopulars] = useState([])
  const [similar, setsimilar] = useState([])
  const [childItemComment, setchildItemComment] = useState([])
  const [showDropdownFilter, setshowDropdownFilter] = useState(false)
  const [showFilterModal, setshowFilterModal] = useState(false)
  const [singleItemChange, setsingleItemChange] = useState(false)
  const [productBasket, setproductBasket] = useState({})
  const [color, setcolor] = useState({})
  const refMap = useRef(new Map())
  const [bookmark, setbookmark] = useState(false)
  const [newSearchOffershArray, setnewSearchOffershArray] = useState([])
  const [newSearchPopularsArray, setnewSearchPopularsArray] = useState([])
  const [socketIoSeen, setsocketIoSeen] = useState(false)
  const [availableSeller, setavailableSeller] = useState(true)
  const [newSearchArray, setnewSearchArray] = useState([])
  const [newSearchHomeArray, setnewSearchHomeArray] = useState([])
  const [allProduct, setallProduct] = useState([])
  
  this.client = {
    allProduct, setallProduct,
    newSearchHomeArray, setnewSearchHomeArray,
    newSearchArray, setnewSearchArray,
    availableSeller, setavailableSeller,
    socketIoSeen, setsocketIoSeen,
    newSearchPopularsArray, setnewSearchPopularsArray,
    newSearchOffershArray, setnewSearchOffershArray,
    bookmark, setbookmark,
    refMap,
    color, setcolor,
    productBasket, setproductBasket,
    singleItemChange, setsingleItemChange,
    slider, setslider,
    category, setcategory,
    childItem, setchildItem,
    singleItem, setsingleItem,
    populars, setpopulars,
    similar, setsimilar,
    offers, setoffers,
    childItemComment, setchildItemComment,
    showDropdownFilter, setshowDropdownFilter,
    showFilterModal, setshowFilterModal,
  }
}
