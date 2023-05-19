import { memo, useEffect, useReducer } from "react";
import { Column, ProgressChart } from "../../../other/Components/Html";
import { reducerChart } from "../../../reducers/reducers";
import { GetDataForChart } from "../../../actions/actions";

function Address7DeyForProgress() {
  const [state, dispatch] = useReducer(reducerChart, [])
  useEffect(() => {GetDataForChart(dispatch, 'GETADDRESS7DAY')}, [])
  return (
    <Column w='100%' fd='row'>
      <Column w={280} h={200} fg={1} m={4}>
        <ProgressChart data={state} />
      </Column>
    </Column>
  )
}

export default memo(Address7DeyForProgress)