import React, { useState } from "react";
//import Hooks from "./Hooks/Hooks";
import UseEffect from "./Hooks/UseEffect";

function App() {
  const [showComp, setComp]=useState(true)
  return (
    <div>
      <button onClick={()=>setComp(!showComp)}>Show/Hide</button> <br/> <br/>
        {/* <Hooks/> */}
        {showComp ? <UseEffect/>: null}
        
    </div>
  );
}

export default App;
