import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate()


  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('')

  const notify = () => toast("Wow so easy!");
  
  useEffect(()=> {
    register()
},[])


  let register = async e=> {
    e.preventDefault()
    const newuser = {email,username,password,role}
    let response = await fetch('https://labs-production-6dbb.up.railway.app/api/register/', {
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
        notify()
        
    }
}

  return (
    <div className="fex flex-row w-full">
      <form onSubmit={register}>
        
        <section className="flex flex-col mt-2">
          <div className="login-box w-full md:mx-auto relative z-100">
            {/* <h1 className="max-w-xl mx-auto pl-4 font-bold text-xl">Field Simplified</h1> */}
            <div className="box shadow-2xl max-w-xl mx-auto rounded-md p-14 z-100">
              <h2 className="text-2xl font-bold mb-2 text-gray-600">
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

              <div className="mb-6">
                <p className="text-md text-gray-500 mb-2">Username</p>
                <input
                  type="text"
                  name="username"
                  className="border w-full rounded-md border-gray-300 py-2"
                  value={username} onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
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

              {/* <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p className="text-md text-gray-500 mb-2">Confirm Password</p>
                </div>
                <input
                  type="password"
                  className="border w-full rounded-md border-gray-300 py-2"
                  name="password"
                  value={password} onChange={e => setPassword(e.target.value)}
                />
               
              </div> */}

              <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 ">Intern
                <input type="radio" 
                value="STUDENT"
                onChange={e => {setRole(e.target.value)}} 
                checked={role==="STUDENT"}
                name="STUDENT"
                placeholder="" 
                className="border-b mx-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                </label>
                
              </div>
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600">Others
                <input type="radio" 
                value="NON-STUDENT"
                name="NON-STUDENT"
                checked={role==="NON-STUDENT"}
                onChange={e => {setRole(e.target.value)}} 
                
                placeholder="" 
                className="border-b mx-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                
                </label>
                
              </div>
            </div>
              <div className="py-3">
              <input
                className="w-full bg-red-500 py-2 rounded-md text-gray-50"
                type="submit"
                value="Register"
              />
              </div>
              <div className="max-w-xl mx-auto">
                <p className="text-sm mt-8 ml-8">
                  Have an account already ?{" "}
                  <Link to="/user" className="text-red-500">
                    Login
                  </Link>
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
