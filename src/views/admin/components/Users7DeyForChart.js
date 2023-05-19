import { memo, useEffect, useReducer } from "react";
import { Column, Py, Row, UserLengthChart } from "../../../other/Components/Html";
import { reducerChart } from "../../../reducers/reducers";
import { actionGetDataForChart } from "../../../actions/actions";

function Users7DeyForChart() {
  const [userLengtState, dispatchUserLength] = useReducer(reducerChart, [])
  const [user7DayState, dispatchUser7Day] = useReducer(reducerChart, [])
  useEffect(() => {
    setTimeout(() => {
      actionGetDataForChart(dispatchUserLength, 'GETUSERLENGTH')
      actionGetDataForChart(dispatchUser7Day, 'GETUSER7DAY')
    }, 500);
  }, [])
  return (
    <Column w={280} h={235} fg={1} m={4}>
      <Row h={20} jc='center' ><Py fs={11} fw='100' >تعداد کل کاربران: {userLengtState}</Py></Row>
      <UserLengthChart h={215} data={user7DayState} />
    </Column>
  )
}

export default memo(Users7DeyForChart)