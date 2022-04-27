import React,{createContext, useState} from "react";

export const UserContext=createContext();

export const UserProvider = (props)=>{
    const [user,setUser]=useState({
        name:"Junaid",
        company:"Saara.Inc",
        salary:40000
    })
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}