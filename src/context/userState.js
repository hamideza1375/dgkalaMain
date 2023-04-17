import { useState } from "react"


export function user() {
  const [userTicketBox, setuserTicketBox] = useState([])
  const [ticketSeen, setticketSeen] = useState()
  const [savedItems, setsavedItems] = useState([])
  const [imageProfile,setimageProfile] = useState('')
  const [twoMinut, settwoMinut] = useState()
  const [answersTicket, setanswersTicket] = useState([])
  const [bookmark, setbookmark] = useState(false)
  const [lastPayment, setlastPayment] = useState([])
  const [newSearchSellerArray, setnewSearchSellerArray] = useState([])
  const [sellerItems, setsellerItems] = useState([])
  

  this.user = {
    newSearchSellerArray, setnewSearchSellerArray,
    sellerItems, setsellerItems,
    lastPayment, setlastPayment,
    bookmark, setbookmark,
    savedItems, setsavedItems,
    ticketSeen, setticketSeen,
    userTicketBox, setuserTicketBox,
    imageProfile,setimageProfile,
    twoMinut, settwoMinut,
    answersTicket, setanswersTicket,
  }
}