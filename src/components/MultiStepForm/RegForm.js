import React, { useState,useContext,useEffect, useRef } from "react";
import AuthContext from "../../context/AuthContext";
import Biodata from "./Biodata";
import CourseDetails from "./CourseDetails";
import UniversityDetails from "./UniversityDetails";
import CourseDetailsII from "./CourseDetailsII";
import BiodataII from "./BiodataII";
import Pay from "./Pay";
import { useNavigate,useParams } from "react-router-dom";
import {useFlutterwave,closePaymentModal} from 'flutterwave-react-v3'

const RegForm = () => {
  let { authTokens,user, logoutUser } = useContext(AuthContext);
  
  const navigate = useNavigate();

  console.log("This is the user detail to submit data with",user.user_id)

  const [page, setPage] = useState(0);

  const FormTitles = ["Biodata","BiodataII", "CourseDetails", "CourseDetailsII", "UniversityDetails", "Pay"];

  const [formData, setFormData] = useState({
    user:user.user_id,
    university: "",
    title_of: "",
    college: "",
    department: "",
    telephone: "",
    coursefield: "",
    specify_course: "",
    department_choice: "",
    year_of_study: "",
    registration_number: "",
    area_of_residence: "",
    guardian_name: "",
    guardian_number: "",
    intern_picture: "",
    student_id_picture: "",
    work_type: "",
    start_time:"",
    end:"",
  });

  const [isShown, setIsShown] = useState(false);
  const inputValue = useRef()

  const mm_unber =inputValue.current = formData.telephone
  const st_email =inputValue.current = user.email


  console.log("Use ref stuff",inputValue.current = formData.telephone)

  
  let {course_slug} = useParams()
  let {module_slug} = useParams()
  let {lesson_slug} = useParams()

  
//   useEffect(()=> {
//     submitData()
// },[])


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

  


  const PageDisplay = () => {
    if (page === 0) {
      
      return <Biodata formData={formData} setFormData={setFormData} />;
      
    } else if (page === 1) {
      return <BiodataII formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <CourseDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <CourseDetailsII formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return (
        <UniversityDetails formData={formData} setFormData={setFormData} />
      );
    }  else {
      return <Pay formData={formData} setFormData={setFormData} />;
    }
  };
  const submitData = async () => {
    // e.preventDefault()
    const data = formData

    
    let response = await fetch('http://127.0.0.1:8000/api/v2/create-students/', {
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
    <div className="form-container bg-white flex flex-col items-center max-w-xl mx-auto">
      <div className="flex-row w-full">
        <div>{PageDisplay()}</div>

        <button
          className="bg-red-500 w-[17.3rem] mr-2 to-grey-500  py-2 my-6 text-white rounded-md"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          disabled={page=== 0}
          onClick={() => {
             setPage((currPage) => currPage - 1);
          }}
        >
          Previous
        </button>

        <button
          className="bg-red-500  to-grey-500 w-[17.3rem] ml-2  py-2 my-6  text-white rounded-md"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={() => {
            if (page === FormTitles.length - 1) {
              // alert("Form submitted")
              console.log(formData);
              submitData();
            } else setPage((currPage) => currPage + 1);
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>

        {/* {isShown && (<div className=" bg-red-400 animate-bounce">Registration fee is 11,000/=</div>)} */}
      </div>
    </div>
  );
};

export default RegForm;
