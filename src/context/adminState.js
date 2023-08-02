import { useState } from "react"


export function admin() {
  const [adminTicketBox, setadminTicketBox] = useState([])
  const [sellerTable, setsellerTable] = useState([])
  const [listUnAvailabe, setlistUnAvailabe] = useState([])
  const [allPaymentSuccessFalseAndTrue, setallPaymentSuccessFalseAndTrue] = useState([])
  const [allAddress, setallAddress] = useState([])
  const [proposalId, setproposalId] = useState([])
  const [proposal, setproposal] = useState([])
  const [allAdmin, setallAdmin] = useState([])
  const [ticketSeen, setticketSeen] = useState(false)
  const [category,setcategory] =useState([])
  const [childItem, setchildItem] = useState([])
  const [allQuitsSeller, setallQuitsSeller] = useState([])
  const [newSearchArray, setnewSearchArray] = useState([])
  const [newSearchSellerArray, setnewSearchSellerArray] = useState([])
  const [newSearchAddressArray, setnewSearchAddressArray] = useState([])

  const [address7DeyForChart, setaddress7DeyForChart] = useState([])
  const [address1YearsForChart, setaddress1YearsForChart] = useState([])
  const [users7DeyForChart, setusers7DeyForChart] = useState([])
  const [usersLength, setusersLength] = useState([])

  this.admin = {
    address7DeyForChart, setaddress7DeyForChart,
    address1YearsForChart, setaddress1YearsForChart,
    users7DeyForChart, setusers7DeyForChart,
    usersLength, setusersLength,

    newSearchAddressArray, setnewSearchAddressArray,
    newSearchSellerArray, setnewSearchSellerArray,
    allQuitsSeller, setallQuitsSeller,
    childItem, setchildItem,
    newSearchArray, setnewSearchArray,
    category,setcategory,
    ticketSeen, setticketSeen,
    listUnAvailabe, setlistUnAvailabe,
    allPaymentSuccessFalseAndTrue, setallPaymentSuccessFalseAndTrue,
    allAddress, setallAddress,
    proposalId, setproposalId,
    proposal, setproposal,
    allAdmin, setallAdmin,
    adminTicketBox, setadminTicketBox,
    sellerTable, setsellerTable,
  }
}