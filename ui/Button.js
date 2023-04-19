import React from 'react';
import { Button } from '../Components/Html';

const App = () => {

  return (
    <>
      <Button
        fs={22}
        as='center'
        fg={1}
        f={1}
        p={1}
        pt={1}
        pb={1}
        pl={1}
        pr={1}
        pv={1}
        ph={1}
        h={50}
        w={222}
        m={1}
        mt={1}
        mb={1}
        ml={1}
        mr={1}
        mv={1}
        mh={1}
        outline={true}
        color={'blue'}
        bgcolor={'green'}
        border={[1, 'red']}
        webStyle={{ width: 200 }}
        nativeStyle={{}}
        iosStyle={{}}
        androidStyle={{}}
        onClick={() => { alert(9) }}
      >
        onClick
      </Button>

    </>
  )
}
export default App