import { Column, DaysChartTotal, Py, Row } from "../../../other/Components/Html";

 export default function Address7DeyForChart(p) {
  return (
    <Column w={280} h={235} fg={1} m={4}>
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
      <DaysChartTotal h={215} data={p.address7DeyForChart} />
    </Column>
  )
}