import { memo } from "react";
import { Column, Py, Row, UserLengthChart } from "../../../other/Components/Html";

 function Users7DeyForChart(p) {
  return (
    <Column w={280} h={235} fg={1} m={4}>
    <Row h={20} jc='center' ><Py fs={11} fw='100' >تعداد کل کاربران: {p.usersLength}</Py></Row>
    <UserLengthChart h={215} data={p.users7DeyForChart} />
  </Column>
  )
}

export default memo(Users7DeyForChart)