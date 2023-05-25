import { memo, useEffect, useReducer } from "react";
import { Column, DaysChartTotal, Py, Row } from "../../../other/Components/Html";
import { reducerChart } from "../../../reducers/reducers";
import { actionGetDataForChart } from "../../../actions/actions";

function Address7DeyForChart() {
  const [state, dispatch] = useReducer(reducerChart, [])
  useEffect(() => {
    actionGetDataForChart(dispatch, 'GETADDRESS7DAY')
  }, [])
  return (
    <Column minw={280} h={235} fg={1} m={4} as='center' ai='center' >
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
      <DaysChartTotal h={215} data={state} />
    </Column>
  )
}

export default memo(Address7DeyForChart)