import React, { memo, Suspense, lazy } from 'react'
import { Scroll, Column, Row } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial';
const Address1YearsForChart = lazy(() => import('./components/Chart').then(module => ({ default: module.Address1YearsForChart })))
const Address7DeyForChart = lazy(() => import('./components/Chart').then(module => ({ default: module.Address7DeyForChart })))
const Address7DeyForProgress = lazy(() => import('./components/Chart').then(module => ({ default: module.Address7DeyForProgress })))
const Users7DeyForChart = lazy(() => import('./components/Chart').then(module => ({ default: module.Users7DeyForChart })))


const PanelAdmin = (p) => {
  p._admin.getAdminTicketSeen()
  p._admin.getSocketIoSeen()
  _useEffect(() => { p.setgetCodeView(false) }, [])

  return (
    <Scroll f={1} >
      <Row w='100%' fw='wrap' >
        <Column f={1} minw={300} ><Suspense><Address7DeyForChart {...p} /></Suspense></Column>
        <Column f={1} minw={300} ><Suspense><Users7DeyForChart {...p} /></Suspense></Column>
      </Row>
      <Suspense><Address7DeyForProgress {...p} /></Suspense>
      <Suspense><Address1YearsForChart {...p} /></Suspense>
    </Scroll>
  )
}

export default memo(PanelAdmin)