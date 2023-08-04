import { useEffect, useState } from 'react';
import { Column, Img, P, Press, ScrollSlider } from '../../other/Components/Html'
import LinearGradient from '../../other/Components/other/LinearGradient'
import { localhost } from '../../other/utils/axios/axios'
import normalizationState from '../../other/utils/normalizationState';

const data = [
  { _id: '1', title: '1', value: '1', imageUrl: 'p1.png' },
  { _id: '2', title: '5', value: '5', imageUrl: 'e.png' },
  { _id: '3', title: '3', value: '3', imageUrl: '7.png' },
  { _id: '4', title: '4', value: '4', imageUrl: '7.png' },
]


const Category = (p) => {
  const [category, setcategory] = useState(() => { })

  useEffect(() => {
    new normalizationState(data, setcategory)
  }, [])


  const del = () => {
    const state = { ...category }
    state.remove('2')
    state.find('3').title = '000'
    state.changeIndex('0').title = 'indexchange'
    state.unshift({ _id: '0', title: 'unshift' })
    state.push({ _id: '6', title: '-656' })
    state.splice(1, 0, { _id: 'A', title: 'A' })
    state.sort('title')
    state.reverse()
    state.slice(1, 2)
    state.match('title', '0')
    console.log(state.reduce('value'));
    state.save()
  }

  return (
    <Column onClick={del} minh={150} >
      <Column fd='row' ai='center' >
        <P mr={15} mt={12} fs={15} mb={-15} color='#444' >دسته ها</P>
        <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 28, marginHorizontal: 25 }} ></LinearGradient>
      </Column>

      <ScrollSlider
        h={180}
        ccStyle={{ height: 180, justifyContent: 'center', alignSelf: 'center' }}
        data={category?.value() ? category.value() : []}
        renderItem={({ item, index }) => (
          <Column w={105} h={115} as='center' fg={1} >
            <Column w={90} h={95} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 90, height: 90, maxHeight: 90, justifyContent: 'center', alignItems: 'center' }} >
                <Column w={84} h={84} style={{ borderRadius: 100, backgroundColor: 'white', position: 'absolute' }} >
                  {item.imageUrl && <Press f={1} onClick={() => { p.navigation.navigate('Products', { id: item._id }) }}><Img f={1} br={100} src={{ uri: `${localhost}/upload/slider/${item.imageUrl}` }} /></Press>}
                </Column>
              </LinearGradient>
            </Column>
            <P as='center' mt='auto' fs={14} fw='600' color='#229b' >{item.title}</P>
          </Column>
        )}
      />
    </Column>)
}

export default Category