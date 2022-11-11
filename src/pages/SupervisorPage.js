import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Supervisor = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  const [name,setName] = useState('')
  const [address,setAddress] = useState('')

  useEffect(()=> {
    supervise()
},[])


  let supervise = async e=> {
    e.preventDefault()
    const stud = {name,address}
    let response = await fetch('https://ictlabs.herokuapp.com/api/v1/add-supervisor/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify(stud)
    })
    let box = await response.json()

    console.log("Items collected",box)

    if(response.status === 201){
       alert('Thanks for your submission!!')
        
    }else{
        alert('Something went wrong!')
        
    }
}

  return (
    <div className="fex flex-row w-full">
      <form onSubmit={supervise}>
        <div className="flex flex-col w-full my-2">
          <h3>Name</h3>
          <input type="text" name="university" value={name} onChange={e => setName(e.target.value)} />
          <h3>Address</h3>
          <input type="text" name="title_of" value={address} onChange={e => setAddress(e.target.value)}  />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Supervisor;
