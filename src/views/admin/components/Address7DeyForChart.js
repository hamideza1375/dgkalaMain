import { memo } from "react";
import { Column, DaysChartTotal, Py, Row } from "../../../other/Components/Html";

function Address7DeyForChart(p) {
  return (
    <Column minw={280} h={235} fg={1} m={4} as='center' ai='center' >
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
      <DaysChartTotal h={215} data={p.address7DeyForChart} />
    </Column>
  )
}

export default memo(Address7DeyForChart)