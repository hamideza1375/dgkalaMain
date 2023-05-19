import { memo, useEffect, useReducer } from "react";
import { Column, ProgressChart } from "../../../other/Components/Html";
import { reducerChart } from "../../../reducers/reducers";
import { actionGetDataForChart } from "../../../actions/actions";

function Address7DeyForProgress() {
  const [state, dispatch] = useReducer(reducerChart, [])
  useEffect(() => {actionGetDataForChart(dispatch, 'GETADDRESS7DAY')}, [])
  return (
    <Column w='100%' fd='row'>
      <Column w={280} h={200} fg={1} m={4}>
        <ProgressChart data={state} />
      </Column>
    </Column>
  )
}

export default memo(Address7DeyForProgress)