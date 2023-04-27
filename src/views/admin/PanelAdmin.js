import React, {memo, Suspense, lazy } from 'react'
import { Scroll, Column, Loading } from '../../other/Components/Html'

const Address7DeyForChart = lazy(() => import('./components/Address7DeyForChart'));
const Users7DeyForChart = lazy(() => import('./components/Users7DeyForChart'));
const Address1YearsForChart = lazy(() => import('./components/Address1YearsForChart'));
const Address7DeyForProgress = lazy(() => import('./components/Address7DeyForProgress'));


const PanelAdmin = (p) => {

  p._admin.getAdminTicketSeen()
  p._admin.getSocketIoSeen()
  p._admin.getDataForChart()
  
  return (
    <Column f={1} fd='row'>
      <Column minw={220} f={3} h='100%' pt={10}>
        <Scroll ccStyle={{ flexGrow: 1 }} >
          <Column fd='row' h='100%' style={{ flexWrap: 'wrap' }} >

            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >

              <Suspense>
                {p.address7DeyForChart.length
                  ?
                  <Address7DeyForChart {...p} />
                  :
                  <Column w='100%' h={100} ><Loading/></Column>
                  }
              </Suspense>

              <Suspense>
                {(p.users7DeyForChart.length || p.usersLength)
                  ?
                  <Users7DeyForChart {...p} />
                  :
                  <></>}
              </Suspense>

            </Scroll>

            <Suspense>
              {p.address7DeyForChart.length
                ?
                <Address7DeyForProgress {...p} />
                :
                <></>
              }
            </Suspense>

            <Suspense>
              {p.address1YearsForChart.length
                ?
                <Address1YearsForChart {...p} />
                :
                <></>}
            </Suspense>

          </Column>
        </Scroll>
      </Column>

    </Column >
  )
}

export default memo(PanelAdmin)