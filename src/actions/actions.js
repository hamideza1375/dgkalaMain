import { getDataForChart } from "../services/adminService";

export const actionGetDataForChart = async (dispatch, type) => {
  const { data } = await getDataForChart(type)
  dispatch({ type, payload: data })
}