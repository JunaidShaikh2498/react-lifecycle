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
// It takes 2 parameters : the state name and 


