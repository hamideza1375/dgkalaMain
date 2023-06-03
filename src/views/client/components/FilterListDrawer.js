import React, { memo, useEffect, useMemo, useState } from 'react'
import { Column, P, List as _list, Switch, CheckBoxRadius, Scroll, Button } from '../../../other/Components/Html'

const FilterListDrawer = (p) => {

  const [brandFilterValue, setbrandFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'سامسونگ', filterValue: 'samsung' },
    { _id: '3', value: 'آیفون', filterValue: 'iphone' },
    { _id: '4', value: 'شیایومی', filterValue: 'shiyaomi' },
    { _id: '5', value: 'هوآوی', filterValue: 'huawi' },
    { _id: '6', value: 'نوکیا', filterValue: 'nokia' },
  ])

  const [priceFilterValue, setpriceFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 2000,000', filterValue: [0, 2000000] },
    { _id: '3', value: '2000000 تا 4000000', filterValue: [2000000, 4000000] },
    { _id: '4', value: '4000000 تا 7000000', filterValue: [4000000, 7000000] },
    { _id: '5', value: '7000000 تا 10000000', filterValue: [7000000, 10000000] },
    { _id: '6', value: '10000000 تا 15000000', filterValue: [10000000, 15000000] },
    { _id: '7', value: '15000000 به بالا', filterValue: [1000000, Infinity] },
  ])

  const [ramFilterValue, setramFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 2', filterValue: [0, 2] },
    { _id: '3', value: '2 تا 4', filterValue: [2, 4] },
    { _id: '4', value: '4 تا 8', filterValue: [4, 8] },
    { _id: '5', value: '8 تا 12', filterValue: [8, 12] },
    { _id: '6', value: '12 به بالا', filterValue: [12, Infinity] },
  ])


  const [cpuCoreFilterValue, setcpuCoreFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 4', filterValue: [0, 4] },
    { _id: '3', value: '4 تا 6', filterValue: [4, 6] },
    { _id: '4', value: '6 تل 8', filterValue: [6, 8] },
    { _id: '5', value: '8 به بالا', filterValue: [8, Infinity] },
  ])


  const [networkFilterValue, setnetworkFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: '2G', filterValue: '2G' },
    { _id: '3', value: '3G', filterValue: '3G' },
    { _id: '4', value: '4G', filterValue: '4G' },
    { _id: '5', value: '5G', filterValue: '5G' },
  ])


  const [memoryFilterValue, setmemoryFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
    { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
    { _id: '4', value: '16 تا 36', filterValue: [16, 36] },
    { _id: '5', value: '36 تا 64', filterValue: [36, 64] },
    { _id: '6', value: '64 تا 128', filterValue: [64, 128] },
    { _id: '7', value: '128 به بالا', filterValue: [128, Infinity] },
  ])


  const [cameraFilterValue, setcameraFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
    { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
    { _id: '4', value: '16 تا 25', filterValue: [16, 25] },
    { _id: '5', value: '25 تا 36', filterValue: [25, 36] },
    { _id: '6', value: '36 تا 64', filterValue: [36, 64] },
    { _id: '7', value: '64 تا 108', filterValue: [64, 108] },
    { _id: '8', value: '108 به بالا', filterValue: [108, Infinity] },
  ])



  const [displayFilterValue, setdisplayFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 5 اینچ', filterValue: [0, 5] },
    { _id: '3', value: '5 تا 7', filterValue: [5, 7] },
    { _id: '4', value: '7 تا 9', filterValue: [7, 9] },
    { _id: '5', value: '9 به بالا', filterValue: [9, Infinity] },
  ])


  const [batteryFilterValue, setbatteryFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 200 آمپر', filterValue: [0, 200] },
    { _id: '3', value: '200 تا 400 آمپر', filterValue: [200, 400] },
    { _id: '4', value: '400 تا 600 آمپر', filterValue: [400, 600] },
    { _id: '5', value: 'بالای 600 آمپر', filterValue: [600, Infinity] },
  ])


  const [colorFilterValue, setcolorFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'قرمز', filterValue: 'red' },
    { _id: '3', value: 'آبی', filterValue: 'blue' },
    { _id: '4', value: 'سبز', filterValue: 'green' },
    { _id: '5', value: 'زرد', filterValue: 'yellow' },
    { _id: '6', value: 'نقره ای', filterValue: 'silver' },
    { _id: '7', value: 'طلایی', filterValue: 'gold' },
    { _id: '8', value: 'بنفش', filterValue: 'purple' },
    { _id: '9', value: 'قهوه ای', filterValue: 'brown' },
    { _id: '10', value: 'سیاه', filterValue: 'black' },
    { _id: '11', value: 'سفید', filterValue: 'white' },
    { _id: '12', value: 'نارنجی', filterValue: 'orange' },
  ])

  const [operatingSystemFilterValue, setoperatingSystemFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'اندروید', filterValue: 'android' },
    { _id: '3', value: 'ios', filterValue: 'ios' },
  ])


  const [isEnabled, setIsEnabled] = useState(false);
  const [showCheckboxBrandFilter, setshowCheckboxBrandFilter] = useState(false);
  const [showCheckboxPriceFilter, setshowCheckboxPriceFilter] = useState(false);
  const [showCheckboxRamFilter, setshowCheckboxRamFilter] = useState(false);
  const [showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter] = useState(false);
  const [showCheckboxNetworkFilter, setshowCheckboxNetworkFilter] = useState(false);
  const [showCheckboxOperatingSystemFilter, setshowCheckboxOperatingSystemFilter] = useState(false);
  const [showCheckboxDisplayFilter, setshowCheckboxDisplayFilter] = useState(false)
  const [showCheckboxColorFilter, setshowCheckboxColorFilter] = useState(false)
  const [showCheckboxBatryFilter, setshowCheckboxBatryFilter] = useState(false)
  const [showCheckboxCameraFilter, setshowCheckboxCameraFilter] = useState(false)
  const [showCheckboxMemoryFilter, setshowCheckboxMemoryFilter] = useState(false)


  const [brandFilter, setbrandFilter] = useState('')
  const [priceFilter, setpriceFilter] = useState('')
  const [networkFilter, setnetworkFilter] = useState('')
  const [storageFilter, setstorageFilter] = useState('')
  const [ramFilter, setramFilter] = useState('')
  const [cpuCoreFilter, setcpuCoreFilter] = useState('')
  const [cameraFilter, setcameraFilter] = useState('')
  const [displayFilter, setdisplayFilter] = useState('')
  const [batteryFilter, setbatteryFilter] = useState('')
  const [colorFilter, setcolorFilter] = useState('')
  const [operatingSystemFilter, setoperatingSystemFilter] = useState('')



  const [hidden, sethidden] = useState(false)

  useEffect(() => {
    return () => {
      p.refMap.current = new Map()
    }
  }, [p.route.params.id])


  useEffect(() => {

    const filterArray = p.array.filter((f, i) => (
      ((brandFilter) ? (f.title?.toLowerCase().match(brandFilter?.toLowerCase())) : (f.title)) &&
      ((ramFilter) ? (f.ram >= ramFilter[0] && f.ram <= ramFilter[1]) : (f.ram)) &&
      ((cameraFilter) ? (f.camera >= cameraFilter[0] && f.camera <= cameraFilter[1]) : (f.camera)) &&
      ((storageFilter) ? (f.storage >= storageFilter[0] && f.storage <= storageFilter[1]) : (f.storage)) &&
      ((displayFilter) ? (f.display >= displayFilter[0] && f.display <= displayFilter[1]) : (f.display)) &&
      ((cpuCoreFilter) ? (f.cpuCore >= cpuCoreFilter[0] && f.cpuCore <= cpuCoreFilter[1]) : (f.cpuCore)) &&
      ((operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
      ((networkFilter) ? (f.network?.toLowerCase().match(networkFilter?.toLowerCase())) : (f.network)) &&
      ((batteryFilter) ? (f.battery >= batteryFilter[0] && f.battery <= batteryFilter[1]) : (f.battery)) &&
      ((colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === colorFilter?.toLowerCase())) : (f.color)) &&
      ((priceFilter) ? (f.price >= priceFilter[0] && f.price <= priceFilter[1]) : (f.price)) &&
      ((isEnabled === false) ? (f.title) : (f.available === 1 && f.available > 0))
    ))

    p.setarray(filterArray);

  }, [/* brandFilter, ramFilter, cameraFilter, storageFilter, displayFilter, cpuCoreFilter, cpuCoreFilter, operatingSystemFilter, operatingSystemFilter, networkFilter, batteryFilter,colorFilter,priceFilter, isEnabled */])






  return (
    <>

      <Column border={[2,'#ffaaff']} bbw={0} br={4} pt={8} z={10000000000} ai='center' minw={150} maxw={'97%'} w={'97%'} mt={10} h='100%' pb={15} bgcolor='#fffe' f={1}
        col={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 3 }}
        col1={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 3 }}
        style={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 3 }}
      >
        <Scroll w='95%' fg={1} >

          <Column fd={!isEnabled ? 'row' : 'row-reverse'} jc={'center'} mb={7} ph={7} >
            {!isEnabled ?
              <P mt={1} ml={5} fs={11} >نمایش دستگاه های موجود</P>
              :
              <P mt={1} mr={5} fs={11} >نمایش همه </P>}
            <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
          </Column>

          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'برند'} bodyRow={
                <Column>
                  {brandFilterValue && brandFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check1' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setbrandFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxBrandFilter} setshow={setshowCheckboxBrandFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'قیمت'} bodyRow={
                <Column>
                  {priceFilterValue && priceFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check2' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setpriceFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxPriceFilter} setshow={setshowCheckboxPriceFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'مقدار رم'}
              bodyRow={
                <Column>
                  {ramFilterValue && ramFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check3' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setramFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxRamFilter} setshow={setshowCheckboxRamFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'تعداد هسته پردازشگر(cpu)'}
              bodyRow={
                <Column>
                  {cpuCoreFilterValue && cpuCoreFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check4' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcpuCoreFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxcpuCoreFilter} setshow={setshowCheckboxcpuCoreFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'حافظه'}
              bodyRow={
                <Column>
                  {memoryFilterValue && memoryFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check5' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setstorageFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxMemoryFilter} setshow={setshowCheckboxMemoryFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'نوع شبکه اینترنت'}
              bodyRow={
                <Column>
                  {networkFilterValue && networkFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check6' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setnetworkFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxNetworkFilter} setshow={setshowCheckboxNetworkFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'سیستم عامل'}
              bodyRow={
                <Column>
                  {operatingSystemFilterValue && operatingSystemFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check7' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setoperatingSystemFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxOperatingSystemFilter} setshow={setshowCheckboxOperatingSystemFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'دوربین'}
              bodyRow={
                <Column>
                  {cameraFilterValue && cameraFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check8' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcameraFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxCameraFilter} setshow={setshowCheckboxCameraFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'اندازه ی صفحه نمایش'}
              bodyRow={
                <Column>
                  {displayFilterValue && displayFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check9' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setdisplayFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxDisplayFilter} setshow={setshowCheckboxDisplayFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'رنگ'}
              bodyRow={
                <Column>
                  {colorFilterValue && colorFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check10' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcolorFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxColorFilter} setshow={setshowCheckboxColorFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>


          <Column >
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ffaaff77' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'باطری'}
              bodyRow={
                <Column>
                  {batteryFilterValue && batteryFilterValue.map((child, index) => (
                    <Column key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check11' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setbatteryFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxBatryFilter} setshow={setshowCheckboxBatryFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Column>
                  ))
                  }
                </Column>
              }
            />
          </Column>
        </Scroll>

        {/* //! lovercase */}
        <Column w={'100%'} ai='center' f={1} minh={50} >
          <Button mt={10} w={'95%'} as='center' outline h={37} bgcolor='#ff88ee'
            onClick={() => {
              const filterArray = p.array.filter((f, i) => (
                ((brandFilter) ? (f.title?.toLowerCase().match(brandFilter?.toLowerCase())) : (f.title)) &&
                ((ramFilter) ? (f.ram >= ramFilter[0] && f.ram <= ramFilter[1]) : (f.ram)) &&
                ((cameraFilter) ? (f.camera >= cameraFilter[0] && f.camera <= cameraFilter[1]) : (f.camera)) &&
                ((storageFilter) ? (f.storage >= storageFilter[0] && f.storage <= storageFilter[1]) : (f.storage)) &&
                ((displayFilter) ? (f.display >= displayFilter[0] && f.display <= displayFilter[1]) : (f.display)) &&
                ((cpuCoreFilter) ? (f.cpuCore >= cpuCoreFilter[0] && f.cpuCore <= cpuCoreFilter[1]) : (f.cpuCore)) &&
                ((operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
                ((networkFilter) ? (f.network?.toLowerCase().match(networkFilter?.toLowerCase())) : (f.network)) &&
                ((batteryFilter) ? (f.battery >= batteryFilter[0] && f.battery <= batteryFilter[1]) : (f.battery)) &&
                ((colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === colorFilter?.toLowerCase())) : (f.color)) &&
                ((priceFilter) ? (f.price >= priceFilter[0] && f.price <= priceFilter[1]) : (f.price)) &&
                ((isEnabled === false) ? (f.title) : (f.available === 1 && f.available > 0))
              ))
              // p.setshowDrawer(false)
              p.setarray(filterArray);
            }}
          >انجام شد</Button>
        </Column>

      </Column>
    </>
  )
}

export default memo(FilterListDrawer)








// import React, { memo, useEffect, useMemo, useState } from 'react'
// import { Column, P, List as _list, Switch, CheckBoxRadius, Scroll, Button } from '../../../other/Components/Html'

// const FilterListDrawer = (p) => {

//   const [brandFilterValue, setbrandFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'سامسونگ', filterValue: 'samsung' },
//     { _id: '3', value: 'آیفون', filterValue: 'iphone' },
//     { _id: '4', value: 'شیایومی', filterValue: 'shiyaomi' },
//     { _id: '5', value: 'هوآوی', filterValue: 'huawi' },
//     { _id: '6', value: 'نوکیا', filterValue: 'nokia' },
//   ])

//   const [priceFilterValue, setpriceFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 2000000', filterValue: [0, 2000000] },
//     { _id: '3', value: '2000000 تا 4000000', filterValue: [2000000, 4000000] },
//     { _id: '4', value: '4000000 تا 7000000', filterValue: [4000000, 7000000] },
//     { _id: '5', value: '7000000 تا 10000000', filterValue: [7000000, 10000000] },
//     { _id: '6', value: '10000000 تا 15000000', filterValue: [10000000, 15000000] },
//     { _id: '7', value: '15000000 به بالا', filterValue: [1000000, Infinity] },
//   ])

//   const [ramFilterValue, setramFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 2', filterValue: [0, 2] },
//     { _id: '3', value: '2 تا 4', filterValue: [2, 4] },
//     { _id: '4', value: '4 تا 8', filterValue: [4, 8] },
//     { _id: '5', value: '8 تا 12', filterValue: [8, 12] },
//     { _id: '6', value: '12 به بالا', filterValue: [12, Infinity] },
//   ])


//   const [cpuCoreFilterValue, setcpuCoreFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 4', filterValue: [0, 4] },
//     { _id: '3', value: '4 تا 6', filterValue: [4, 6] },
//     { _id: '4', value: '6 تل 8', filterValue: [6, 8] },
//     { _id: '5', value: '8 به بالا', filterValue: [8, Infinity] },
//   ])


//   const [networkFilterValue, setnetworkFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: '2G', filterValue: '2G' },
//     { _id: '3', value: '3G', filterValue: '3G' },
//     { _id: '4', value: '4G', filterValue: '4G' },
//     { _id: '5', value: '5G', filterValue: '5G' },
//   ])


//   const [memoryFilterValue, setmemoryFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
//     { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
//     { _id: '4', value: '16 تا 36', filterValue: [16, 36] },
//     { _id: '5', value: '36 تا 64', filterValue: [36, 64] },
//     { _id: '6', value: '64 تا 128', filterValue: [64, 128] },
//     { _id: '7', value: '128 به بالا', filterValue: [128, Infinity] },
//   ])


//   const [cameraFilterValue, setcameraFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
//     { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
//     { _id: '4', value: '16 تا 25', filterValue: [16, 25] },
//     { _id: '5', value: '25 تا 36', filterValue: [25, 36] },
//     { _id: '6', value: '36 تا 64', filterValue: [36, 64] },
//     { _id: '7', value: '64 تا 108', filterValue: [64, 108] },
//     { _id: '8', value: '108 به بالا', filterValue: [108, Infinity] },
//   ])



//   const [displayFilterValue, setdisplayFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 5 اینچ', filterValue: [0, 5] },
//     { _id: '3', value: '5 تا 7', filterValue: [5, 7] },
//     { _id: '4', value: '7 تا 9', filterValue: [7, 9] },
//     { _id: '5', value: '9 به بالا', filterValue: [9, Infinity] },
//   ])


//   const [batteryFilterValue, setbatteryFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'زیر 200 آمپر', filterValue: [0, 200] },
//     { _id: '3', value: '200 تا 400 آمپر', filterValue: [200, 400] },
//     { _id: '4', value: '400 تا 600 آمپر', filterValue: [400, 600] },
//     { _id: '5', value: 'بالای 600 آمپر', filterValue: [600, Infinity] },
//   ])


//   const [colorFilterValue, setcolorFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'قرمز', filterValue: 'red' },
//     { _id: '3', value: 'آبی', filterValue: 'blue' },
//     { _id: '4', value: 'سبز', filterValue: 'green' },
//     { _id: '5', value: 'زرد', filterValue: 'yellow' },
//     { _id: '6', value: 'نقره ای', filterValue: 'silver' },
//     { _id: '7', value: 'طلایی', filterValue: 'gold' },
//     { _id: '8', value: 'بنفش', filterValue: 'purple' },
//     { _id: '9', value: 'قهوه ای', filterValue: 'brown' },
//     { _id: '10', value: 'سیاه', filterValue: 'black' },
//     { _id: '11', value: 'سفید', filterValue: 'white' },
//     { _id: '12', value: 'نارنجی', filterValue: 'orange' },
//   ])

//   const [operatingSystemFilterValue, setoperatingSystemFilterValue] = useState([
//     { _id: '1', value: 'همه', filterValue: '' },
//     { _id: '2', value: 'اندروید', filterValue: 'android' },
//     { _id: '3', value: 'ios', filterValue: 'ios' },
//   ])


//   const [isEnabled, setIsEnabled] = useState(false);
//   const [showCheckboxBrandFilter, setshowCheckboxBrandFilter] = useState(false);
//   const [showCheckboxPriceFilter, setshowCheckboxPriceFilter] = useState(false);
//   const [showCheckboxRamFilter, setshowCheckboxRamFilter] = useState(false);
//   const [showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter] = useState(false);
//   const [showCheckboxNetworkFilter, setshowCheckboxNetworkFilter] = useState(false);
//   const [showCheckboxOperatingSystemFilter, setshowCheckboxOperatingSystemFilter] = useState(false);
//   const [showCheckboxDisplayFilter, setshowCheckboxDisplayFilter] = useState(false)
//   const [showCheckboxColorFilter, setshowCheckboxColorFilter] = useState(false)
//   const [showCheckboxBatryFilter, setshowCheckboxBatryFilter] = useState(false)
//   const [showCheckboxCameraFilter, setshowCheckboxCameraFilter] = useState(false)
//   const [showCheckboxMemoryFilter, setshowCheckboxMemoryFilter] = useState(false)


//   const [brandFilter, setbrandFilter] = useState('')
//   const [priceFilter, setpriceFilter] = useState('')
//   const [networkFilter, setnetworkFilter] = useState('')
//   const [storageFilter, setstorageFilter] = useState('')
//   const [ramFilter, setramFilter] = useState('')
//   const [cpuCoreFilter, setcpuCoreFilter] = useState('')
//   const [cameraFilter, setcameraFilter] = useState('')
//   const [displayFilter, setdisplayFilter] = useState('')
//   const [batteryFilter, setbatteryFilter] = useState('')
//   const [colorFilter, setcolorFilter] = useState('')
//   const [operatingSystemFilter, setoperatingSystemFilter] = useState('')



//   const [hidden, sethidden] = useState(false)

//   useEffect(() => {
//     return () => {
//       p.refMap.current = new Map()
//     }
//   }, [p.route.params.id])


//   useEffect(() => {

//     const filterArray = p.array.filter((f, i) => (
//       ((brandFilter) ? (f.title?.toLowerCase().match(brandFilter?.toLowerCase())) : (f.title)) &&
//       ((ramFilter) ? (f.ram >= ramFilter[0] && f.ram <= ramFilter[1]) : (f.ram)) &&
//       ((cameraFilter) ? (f.camera >= cameraFilter[0] && f.camera <= cameraFilter[1]) : (f.camera)) &&
//       ((storageFilter) ? (f.storage >= storageFilter[0] && f.storage <= storageFilter[1]) : (f.storage)) &&
//       ((displayFilter) ? (f.display >= displayFilter[0] && f.display <= displayFilter[1]) : (f.display)) &&
//       ((cpuCoreFilter) ? (f.cpuCore >= cpuCoreFilter[0] && f.cpuCore <= cpuCoreFilter[1]) : (f.cpuCore)) &&
//       ((operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
//       ((networkFilter) ? (f.network?.toLowerCase().match(networkFilter?.toLowerCase())) : (f.network)) &&
//       ((batteryFilter) ? (f.battery >= batteryFilter[0] && f.battery <= batteryFilter[1]) : (f.battery)) &&
//       ((colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === colorFilter?.toLowerCase())) : (f.color)) &&
//       ((priceFilter) ? (f.price >= priceFilter[0] && f.price <= priceFilter[1]) : (f.price)) &&
//       ((isEnabled === false) ? (f.title) : (f.available === 1 && f.available > 0))
//     ))

//     p.setarray(filterArray);

//   }, [/* brandFilter, ramFilter, cameraFilter, storageFilter, displayFilter, cpuCoreFilter, cpuCoreFilter, operatingSystemFilter, operatingSystemFilter, networkFilter, batteryFilter,colorFilter,priceFilter, isEnabled */])






//   return (
//     <>

//       <Column z={10000000000} minw={150} maxw={200} w={200} mt={10} maxh={p.height - 70} minh={'80%'} bgcolor='#fffe' f={1}
//         col={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
//         col1={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
//         style={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
//       >
//         <Scroll minw='105%' >

//           <Column fd={!isEnabled ? 'row' : 'row-reverse'} jc={'center'} mb={5} ph={7} pb={5} >
//             {!isEnabled ?
//               <P mt={1} ml={5} fs={11} >نمایش دستگاه های موجود</P>
//               :
//               <P mt={1} mr={5} fs={11} >نمایش همه </P>}
//             <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
//           </Column>

//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'برند'} bodyRow={
//                 <Column>
//                   {brandFilterValue && brandFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check1' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setbrandFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxBrandFilter} setshow={setshowCheckboxBrandFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'قیمت'} bodyRow={
//                 <Column>
//                   {priceFilterValue && priceFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check2' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setpriceFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxPriceFilter} setshow={setshowCheckboxPriceFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'مقدار رم'}
//               bodyRow={
//                 <Column>
//                   {ramFilterValue && ramFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check3' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setramFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxRamFilter} setshow={setshowCheckboxRamFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'تعداد هسته پردازشگر(cpu)'}
//               bodyRow={
//                 <Column>
//                   {cpuCoreFilterValue && cpuCoreFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check4' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcpuCoreFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxcpuCoreFilter} setshow={setshowCheckboxcpuCoreFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'حافظه'}
//               bodyRow={
//                 <Column>
//                   {memoryFilterValue && memoryFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check5' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setstorageFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxMemoryFilter} setshow={setshowCheckboxMemoryFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'نوع شبکه اینترنت'}
//               bodyRow={
//                 <Column>
//                   {networkFilterValue && networkFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check6' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setnetworkFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxNetworkFilter} setshow={setshowCheckboxNetworkFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'سیستم عامل'}
//               bodyRow={
//                 <Column>
//                   {operatingSystemFilterValue && operatingSystemFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check7' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setoperatingSystemFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxOperatingSystemFilter} setshow={setshowCheckboxOperatingSystemFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'دوربین'}
//               bodyRow={
//                 <Column>
//                   {cameraFilterValue && cameraFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check8' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcameraFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxCameraFilter} setshow={setshowCheckboxCameraFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'اندازه ی صفحه نمایش'}
//               bodyRow={
//                 <Column>
//                   {displayFilterValue && displayFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check9' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setdisplayFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxDisplayFilter} setshow={setshowCheckboxDisplayFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'رنگ'}
//               bodyRow={
//                 <Column>
//                   {colorFilterValue && colorFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check10' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setcolorFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxColorFilter} setshow={setshowCheckboxColorFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>


//           <Column>
//             <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
//               header={'باطری'}
//               bodyRow={
//                 <Column>
//                   {batteryFilterValue && batteryFilterValue.map((child, index) => (
//                     <Column key={index} fd='row' jc='space-between'>
//                       <P pr={2} fs={11} >{child.value}</P>
//                       <CheckBoxRadius id='check11' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { setbatteryFilter(ref.filterValue) } }}
//                         border={[1, 'silver']} ml={4}
//                         show={showCheckboxBatryFilter} setshow={setshowCheckboxBatryFilter}
//                         style={{ transform: [{ scale: .9 }] }} />
//                     </Column>
//                   ))
//                   }
//                 </Column>
//               }
//             />
//           </Column>
//         </Scroll>

//         {/* //! lovercase */}
//         <Column w={'100%'} ai='center' >
//           <Button mt={10} w={'95%'} as='center' outline h={37} bgcolor='#ff77ccee'
//             onClick={() => {
//               const filterArray = p.array.filter((f, i) => (
//                 ((brandFilter) ? (f.title?.toLowerCase().match(brandFilter?.toLowerCase())) : (f.title)) &&
//                 ((ramFilter) ? (f.ram >= ramFilter[0] && f.ram <= ramFilter[1]) : (f.ram)) &&
//                 ((cameraFilter) ? (f.camera >= cameraFilter[0] && f.camera <= cameraFilter[1]) : (f.camera)) &&
//                 ((storageFilter) ? (f.storage >= storageFilter[0] && f.storage <= storageFilter[1]) : (f.storage)) &&
//                 ((displayFilter) ? (f.display >= displayFilter[0] && f.display <= displayFilter[1]) : (f.display)) &&
//                 ((cpuCoreFilter) ? (f.cpuCore >= cpuCoreFilter[0] && f.cpuCore <= cpuCoreFilter[1]) : (f.cpuCore)) &&
//                 ((operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
//                 ((networkFilter) ? (f.network?.toLowerCase().match(networkFilter?.toLowerCase())) : (f.network)) &&
//                 ((batteryFilter) ? (f.battery >= batteryFilter[0] && f.battery <= batteryFilter[1]) : (f.battery)) &&
//                 ((colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === colorFilter?.toLowerCase())) : (f.color)) &&
//                 ((priceFilter) ? (f.price >= priceFilter[0] && f.price <= priceFilter[1]) : (f.price)) &&
//                 ((isEnabled === false) ? (f.title) : (f.available === 1 && f.available > 0))
//               ))
//               // p.setshowDrawer(false)
//               p.setarray(filterArray);
//             }}
//           >انجام شد</Button>
//         </Column>

//       </Column>
//     </>
//   )
// }

// export default memo(FilterListDrawer)