import React, { useState } from "react";


const Hooks = ()=>{

    const [name,setName]=useState("Junaid")
    const [obj,setObj]=useState({batch:"October",course:""})

    const setObjState=()=>{
        setObj((prevState)=>({...prevState,course:"MERN"}))
    }

    return(
        <div>
            <h2>{name}</h2>
            <h2>{obj.batch}{obj.course}</h2>
            <button onClick={()=>{setName("Junaid Shaikh")}}>Full Name</button>
            <button onClick={setObjState}>Set the course</button>
        </div>
    )
}

export default Hooks


// useState() hook is used for declaring states in functional component as well as updating state
// It takes 2 parameters : the state name and the setter function used to update state.
// The state is updated on any event trigger on the browser. That event has a variable passed inside it which contains an
// anonymous function. This function calls the setter function.
// In case of Primitive data types like strings state values we directly pass the new state value in the set func.
// But for non-primitive data type like object we have to consider a parameter of the previous state value.
// Because if the state is set directly previous values will be lost so "..." operator is used to keep the 
// previous values.


