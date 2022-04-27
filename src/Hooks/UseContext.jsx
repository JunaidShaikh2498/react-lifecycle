import React, { useContext } from 'react'
import { UserContext } from './ContextAPI'

const UseContext = () => {
    const [user,setUser]=useContext(UserContext)
    const changeUserDetails =()=>{
        setUser((prevDetails)=>({
            ...prevDetails,
            salary:45000
        }))
    }
  return (
    <div>

        <p>Name: {user.name},Salary: {user.salary}</p>
        <button onClick={changeUserDetails}>Upgrade</button>
    </div>
  )
}

export default UseContext
