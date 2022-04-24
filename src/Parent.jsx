import React, { useState } from "react";
import Child from "./Child";

const Parent = ()=>{

    const [name,setName]=useState("Junaid")

    return(
        <div>
            <h2>{name}</h2>
            <Child name={name}/>
            <button onClick={()=>{setName("Junaid Shaikh")}}>Full Name</button>
        </div>
    )
}

export default Parent 