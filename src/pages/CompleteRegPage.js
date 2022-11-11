import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";
import RegForm from "../components/MultiStepForm/RegForm"



const CompleteRegPage = () => {
//   let { authTokens, logoutUser } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const [university,setUniversity] = useState('')
//   const [title_of,setTitle] = useState('')

//   useEffect(()=> {
//     details()
// },[])


  // let details = async e=> {
  //   e.preventDefault()
  //   const stud = {university,title_of}
  //   let response = await fetch('http://127.0.0.1:8000/api/v1/create-students/', {
  //       method:'POST',
  //       headers:{
  //           'Content-Type':'application/json',
  //           'Authorization':'Bearer ' + String(authTokens.access)
  //       },
  //       body:JSON.stringify(stud)
  //   })
  //   let box = await response.json()

  //   console.log("Items collected",box)

    // if(response.status === 201){
    //    alert('Thanks for your submission!!')
    //    navigate('/dashboard')

        
    // }else{
    //     alert('Something went wrong!')
        
    // }
// }

  return (
    <>
    {/* <div className="fex flex-row w-full">
      <form onSubmit={details}>
        <div className="flex flex-col w-full my-2">
          <h3>University</h3>
          <input type="text" name="university" value={university} onChange={e => setUniversity(e.target.value)} />
          <h3>Title</h3>
          <input type="text" name="title_of" value={title_of} onChange={e => setTitle(e.target.value)}  />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div> */}
<RegForm/>
    
    </>
  );
};

export default CompleteRegPage;
