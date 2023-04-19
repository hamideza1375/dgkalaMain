import React, { useState } from "react";
import {Switch} from "../Components/Html";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
  );
}


export default App;