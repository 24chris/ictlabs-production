import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate()


  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('')
  
  useEffect(()=> {
    register()
},[])


  let register = async e=> {
    e.preventDefault()
    const newuser = {email,username,password,role}
    let response = await fetch('https://ictlabs.herokuapp.com/api/v1/register/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            // 'Authorization':'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify(newuser)
    })
    let box = await response.json()

    console.log("Items collected",box)

    if(response.status === 201){
      //  alert('Welcome!!')
       navigate('/user')
        
    }else{
        alert('Something went wrong!')
        
    }
}

  return (
    <div className="fex flex-row w-full">
      <form onSubmit={register}>
        {/* <div className="flex flex-col w-full my-2">
          <h3>Email</h3>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          <h3>Username</h3>
          <input type="text" name="username" value={name} onChange={e => setUsername(e.target.value)}  />
          <h3>Password</h3>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="submit" />
        </div> */}
        <section className="flex flex-col mt-6">
          <div className="login-box w-full md:mx-auto relative z-100">
            {/* <h1 className="max-w-xl mx-auto pl-4 font-bold text-xl">Field Simplified</h1> */}
            <div className="box shadow-2xl max-w-xl mx-auto rounded-md p-14 z-100">
              <h2 className="text-2xl font-bold mb-8 text-gray-600">
                User Registration
              </h2>
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
              <div className="mb-8">
                <p className="text-md text-gray-500 mb-2">Email</p>
                <input
                  type="email"
                  name="email"
                  className="border w-full rounded-md border-gray-300 py-2"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-8">
                <p className="text-md text-gray-500 mb-2">Username</p>
                <input
                  type="text"
                  name="username"
                  className="border w-full rounded-md border-gray-300 py-2"
                  value={username} onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p className="text-md text-gray-500 mb-2">Password</p>
                </div>
                <input
                  type="password"
                  className="border w-full rounded-md border-gray-300 py-2"
                  name="password"
                  value={password} onChange={e => setPassword(e.target.value)}
                />
               
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 ">Student</label>
                <input type="radio" 
                value="STUDENT"
                onChange={e => {setRole(e.target.value)}} 
                checked={role==="STUDENT"}
                name="STUDENT"
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600">Non-Student</label>
                <input type="radio" 
                value="NON-STUDENT"
                name="NON-STUDENT"
                checked={role==="NON-STUDENT"}
                onChange={e => {setRole(e.target.value)}} 
                
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>

              <input
                className="w-full bg-red-500 py-2 rounded-md text-gray-50"
                // onClick={() => signIn()}
                type="submit"
                value="Register"
              />


              {/* </input> */}
              {/* <button
                className="w-full bg-red-500 py-2 rounded-md text-gray-50"
                onClick={() => signIn("credentials")}
              >
                Login
              </button> */}
              <div className="max-w-xl mx-auto">
                <p className="text-sm mt-8 ml-8">
                  Have an account already ?{" "}
                  <a href="#" className="text-red-500">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Register;
