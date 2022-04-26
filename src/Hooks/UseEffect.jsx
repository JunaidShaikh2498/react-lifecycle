import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const [state1,setState1]=useState(50)
    const [state2,setState2]=useState(30)

    useEffect(()=>{
        console.log(state1); // logs the initial value of state1 when application starts
        // Runs again when state is updated and logs new state value.
        return function cleanup(){ // returns the function when the component is unmounted.
            console.log("Component unmounted");
        }
    },[state1])
  return (

    <div>
      <h1>Use Effect</h1>
      <h2>{state1}</h2> 
      <h2>{state2}</h2> <br/>
      <button onClick={()=>setState1(state1*2)}>Multiply by 2</button> <br /> <br/> 
      <button onClick={()=>setState2(state2*3)}>Multiply by 3</button>
    </div>
  )
}

export default UseEffect
