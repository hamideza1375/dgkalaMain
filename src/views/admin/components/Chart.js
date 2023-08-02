import { Column, DaysChartTotal, ProgressChart, Py, Row, UserLengthChart, YearsChartTotal } from "../../../other/Components/Html";


export function Address1YearsForChart(p) {
  p._admin.getDataForChart('address1YearsForChart')
  return (
    <Column h={235} fg={1} m={4} jc='flex-end' >
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های سال گذشته</Py></Row>
      <YearsChartTotal h={215} data={p.address1YearsForChart} />
    </Column>
  )
}


export function Address7DeyForChart(p) {
  p._admin.getDataForChart('address7DeyForChart')
  return (
    <Column minw={280} h={235} w='100%' m={4} as='center' ai='center' >
      <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
      <DaysChartTotal h={215} data={p.address7DeyForChart} />
    </Column>
  )
}


export function Address7DeyForProgress(p) {
  return (
    <Column w='100%' fd='row'>
      <Column h={200} fg={1} m={4}>
        <ProgressChart data={p.address7DeyForChart} />
      </Column>
    </Column>
  )
}


export function Users7DeyForChart(p) {
  p._admin.getDataForChart('users7DeyForChart')
  return (
    <Column h={235} w='100%' m={4}>
      <Row h={20} jc='center' ><Py fs={11} fw='100' >تعداد کل کاربران: {p.usersLength}</Py></Row>
      <UserLengthChart h={215} data={p.users7DeyForChart} />
    </Column>
  )
}
