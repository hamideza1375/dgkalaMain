import React, { lazy, Suspense, useEffect, useReducer } from 'react'
import { Slider, Scroll, Loading, Column } from '../../other/Components/Html'
import Category from './components/home/Category';
import { actionGetCategory, reducerGetCategory } from '../../controllers/clientController';
const SliderOffers = lazy(() => import('./components/home/SliderOffers'));
const SliderPopulars = lazy(() => import('./components/home/SliderPopulars'));
const Banner = lazy(() => import('./components/home/Banner'));
const Footer = lazy(() => import('./components/home/Footer'));

function Home(p) {
  const [category, dispatch] = useReducer(reducerGetCategory, []);
  useEffect(() => { actionGetCategory(dispatch) }, [])
  p._client.getSlider()
  p._client.backHandler()
  p._client.allProductForSearchBar()
  return (
    <Column f={1} >
      <Scroll>
        <Column>
          <Slider data={p.slider} {...p} onClick={() => { p.navigation.navigate('ChildOffers') }} />
        </Column>

        <Column>
          <Category {...p} category={category} />
        </Column>

        <Column>
          <Suspense fallback={<Column w='100%' ai='center' ><Loading /></Column>}>
            <SliderOffers {...p} />
          </Suspense>
        </Column>

        <Column mt={9} >
          <Suspense>
            <Banner {...p} />
          </Suspense>
        </Column>

        <Column mt={8} mb={6} >
          <Suspense fallback={<Column w='100%' ai='center' ><Loading /></Column>}>
            <SliderPopulars {...p} />
          </Suspense>
        </Column>

        <Column>
          <Suspense fallback={<Column w='100%' ai='center' ><Loading /></Column>}>
            <Footer {...p} />
          </Suspense>
        </Column>

      </Scroll>
    </Column>
  )
}

export default Home

