import { useState } from "react"


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
  const [color, setcolor] = useState({})
  const [bookmark, setbookmark] = useState(false)
  const [newSearchOffershArray, setnewSearchOffershArray] = useState([])
  const [newSearchPopularsArray, setnewSearchPopularsArray] = useState([])
  const [availableSeller, setavailableSeller] = useState(true)
  const [newSearchArray, setnewSearchArray] = useState([])
  const [newSearchHomeArray, setnewSearchHomeArray] = useState([])
  const [allProduct, setallProduct] = useState([])
  
  this.client = {
    allProduct, setallProduct,
    newSearchHomeArray, setnewSearchHomeArray,
    newSearchArray, setnewSearchArray,
    availableSeller, setavailableSeller,
    newSearchPopularsArray, setnewSearchPopularsArray,
    newSearchOffershArray, setnewSearchOffershArray,
    bookmark, setbookmark,
    color, setcolor,
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
