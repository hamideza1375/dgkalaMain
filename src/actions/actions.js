import { getCategory } from "../services/clientService";
import { getDataForChart } from "../services/adminService";

export const actionGetCategory = async (dispatch, type) => {
  const { data } = await getCategory()
  if (!data?.value) return
  dispatch({ type, payload: data.value })
}


export const actionGetDataForChart = async (dispatch,type) => {
  const { data } = await getDataForChart()
  dispatch({ type, payload: data })
}