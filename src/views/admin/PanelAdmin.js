import React, {memo, Suspense, lazy } from 'react'
import { Scroll, Column } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial';

const Address7DeyForChart = lazy(() => import('./components/Address7DeyForChart'));
const Users7DeyForChart = lazy(() => import('./components/Users7DeyForChart'));
const Address7DeyForProgress = lazy(() => import('./components/Address7DeyForProgress'));
const Address1YearsForChart = lazy(() => import('./components/Address1YearsForChart'));


const PanelAdmin = (p) => {
  p._admin.getAdminTicketSeen()
  p._admin.getSocketIoSeen()
  // p._admin.getDataForChart()
  _useEffect(() => { p.setgetCodeView(false) }, [])

  return (
    <Column f={1} fd='row'>
      <Column minw={220} f={3} h='100%' pt={10}>
        <Scroll ccStyle={{ flexGrow: 1 }} >
          <Column fd='row' h='100%' style={{ flexWrap: 'wrap' }} >

            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >

              <Suspense>
                  <Address7DeyForChart />
              </Suspense>

              <Suspense>
                  <Users7DeyForChart />
              </Suspense>

            </Scroll>

            <Suspense>
                <Address7DeyForProgress />
            </Suspense>

            <Suspense>
                <Address1YearsForChart />
            </Suspense>

          </Column>
        </Scroll>
      </Column>

    </Column >
  )
}

export default memo(PanelAdmin)