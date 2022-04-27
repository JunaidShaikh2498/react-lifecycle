import React from "react";
import { UserProvider } from "./Hooks/ContextAPI";
import UseContext from "./Hooks/UseContext";
//import Hooks from "./Hooks/Hooks";
//import UseEffect from "./Hooks/UseEffect";

function App() {
 //const [showComp, setComp]=useState(true)
  return (
    <UserProvider>
    <div>
      <UseContext/>
        {/* <Hooks/> */}
        {/* {showComp ? <UseEffect/>: null} */}
        {/* <button onClick={()=>setComp(!showComp)}>Show/Hide</button> <br/> <br/> */}
    </div>
    </UserProvider>
  );
}

export default App;
