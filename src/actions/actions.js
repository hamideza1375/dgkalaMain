import { getCategory } from "../services/clientService";
import { getDataForChart } from "../services/adminService";

export const actionGetCategory = async (dispatch) => {
  const { data } = await getCategory()
  if (!data?.value) return
  dispatch({ type: "GETCATEGORY", payload: data.value })
}


export const GetDataForChart = async (dispatch,type) => {
  const { data } = await getDataForChart()
  dispatch({ type, payload: data })
}