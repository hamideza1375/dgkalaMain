import { getCategory, getProducts } from "../services/clientService";
import { getDataForChart } from "../services/adminService";

export const actionGetCategory = async (dispatch, type) => {
  const { data } = await getCategory()
  if (!data?.value) return
  dispatch({ type, payload: data.value })
}


export const actionGetDataForChart = async (dispatch, type) => {
  const { data } = await getDataForChart()
  dispatch({ type, payload: data })
}


export const actionGetProducts = async (dispatch, type, route) => {
  const { data } = await getProducts(route.params.id)
  if (!data?.value) return
  dispatch({ type, payload: data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })) })
}