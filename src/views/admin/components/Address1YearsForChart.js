import { memo } from "react";
import { Column, Py, Row, YearsChartTotal } from "../../../other/Components/Html";

function Address1YearsForChart(p) {
  return (
    <Column h={235} fg={1} m={4} jc='flex-end' >
    <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های سال گذشته</Py></Row>
    <YearsChartTotal h={215} data={p.address1YearsForChart} />
  </Column>
  )
}

export default memo(Address1YearsForChart)