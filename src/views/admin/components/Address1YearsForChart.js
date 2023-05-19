import { memo, useEffect, useReducer } from "react";
import { Column, Py, Row, YearsChartTotal } from "../../../other/Components/Html";
import { reducerChart } from "../../../reducers/reducers";
import { actionGetDataForChart } from "../../../actions/actions";

function Address1YearsForChart() {
  const [state, dispatch] = useReducer(reducerChart, [])
  useEffect(() => { setTimeout(() => { actionGetDataForChart(dispatch, 'GETADDRESS1YEAR') }, 1000); }, [])
  return (
    <Column h={235} fg={1} m={4} jc='flex-end' >
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های سال گذشته</Py></Row>
      <YearsChartTotal h={215} data={state} />
    </Column>
  )
}

export default memo(Address1YearsForChart)