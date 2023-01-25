import React, { useState,useContext,useEffect, useRef } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate,useParams } from "react-router-dom";

const NonStudentForm = () => {
  let { authTokens,user, logoutUser } = useContext(AuthContext);

  
  
  const navigate = useNavigate();

  console.log("This is the user detail to submit data with",user.user_id)


  const [formData, setFormData] = useState({
    user:user.user_id,
    program_of_interest: "",
    level_of_skill:"",
    phone:"",
    
  });

  const [isShown, setIsShown] = useState(false);
  const inputValue = useRef()

  
  
  let {course_slug} = useParams()
  let {module_slug} = useParams()
  let {lesson_slug} = useParams()

  
  


// const config = {
//   public_key:'FLWPUBK-6c66fbf331a89f824d6d5b164088a8a6-X',
//   tx_ref: Date.now(),
//   amount: 10000,
//   currency: 'UGX',
//   payment_options: 'card,mobilemoneyuganda',
//   customer: {
//     email: 'test@gmail.com',
//     phonenumber: {mm_unber},
//     name: 'Peter',
//   },
//   customizations: {
//     title: 'Registration fee',
//     description: 'Payment for Registration',
//     logo: '#',
//   },
// };

// const handleFlutterPayment = useFlutterwave(config);




  const submitData = async () => {
    // e.preventDefault()
    const data = formData

    
    let response = await fetch('https://fieldtest.owinoonline.com/api/v4/create-non-students/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify(data)
    })

   
    if(response.status === 201){
      alert('Thanks for your submission!!')    
      // handleFlutterPayment({
      //   callback: (response) => {
      //      console.log(response);
      //       closePaymentModal() // this will close the modal programmatically
      //   },
      //   onClose: () => {},
      // });
      // navigate(`/${course_slug}/${module_slug}/${lesson_slug}/`)
      // navigate('/courses')

       
   }else{
       alert('Something went wrong!')
       
   }


  };

  return (
    <div className="form-container bg-white   rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
      <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Program of Interest
            </label>
            <input
              type="text"
              placeholder="Program of Interest"
              value={formData.program_of_interest}
              name="program_of_interest"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, program_of_interest: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold dark:text-white">
              Level of Skill
            </label>
            <select
              type="text"
              placeholder="Level of Skill"
              value={formData.level_of_skill}
              name="level_of_skill"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, level_of_skill: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
               <option selected>Level Of Skill</option>
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="ADVANCED">Advanced</option>
                {/* {course.map((co,index)=>{return <option key={index} value={co.name}>{co.name}</option>})} */}
            </select>
             
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold dark:text-white">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              name="phone"
              // required={true}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
            
          </div>
        </div>

        <button
          className="bg-red-500  to-grey-500 w-[17.3rem] ml-2  py-2 my-6  text-white rounded-md"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={() => {
            
              console.log(formData);
              // submitData();
            handleSubmit(submitData())
          }}
        >
           Submit
        </button>
      </div>
    
  );
};

export default NonStudentForm;
