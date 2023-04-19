import React from 'react';
import { Span, Loading } from '../Components/Html';



function App() {


  return (
        <Loading
          scale={2.3}
          androidScale={1}
          color={"red"}
          time={8000}
          // pos={'absolute} 
          // left={}
          // right={}
          // top={}
          // bottom={}
          style={{ margin: 4 }}
        />
  )
}



export default App;