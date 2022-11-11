import React, { useState,useContext,useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import Biodata from "./Biodata";
import CourseDetails from "./CourseDetails";
import UniversityDetails from "./UniversityDetails";
import UniversityDetailsII from "./CourseDetailsII";
import CourseDetailsII from "./CourseDetailsII";
import BiodataII from "./BiodataII";
import Pay from "./Pay";
import { useNavigate } from "react-router-dom";
import {useFlutterwave,closePaymentModal} from 'flutterwave-react-v3'

const RegForm = () => {
    let { authTokens, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const FormTitles = ["Biodata","BiodataII", "CourseDetails", "CourseDetailsII", "UniversityDetails", "Pay"];

  const [formData, setFormData] = useState({
    university: "",
    title_of: "",
    college: "",
    department: "",
    telephone: "",
    coursefield: "",
    // course: "",
    specify_course: "",
    department_choice: "",
    year_of_study: "",
    registration_number: "",
    area_of_residence: "",
    guardian_name: "",
    guardian_number: "",
    intern_picture: "",
    student_id: "",
    work_type: "",
    conv:"",
  });

  const [isShown, setIsShown] = useState(false);

  
//   useEffect(()=> {
//     submitData()
// },[])


// const config = {
//   // public_key: 'FLWPUBK-5ce732bb653d94cd9b750e6f69524d35-X',
//   public_key:'FLWPUBK_TEST-0aef47dba99a60c07a74333e93bec52e-X',
//   tx_ref: Date.now(),
//   amount: 10000,
//   currency: 'UGX',
//   payment_options: 'card,mobilemoneyuganda',
//   customer: {
//     email: 'vivjochris@gmail.com',
//     phonenumber: '',
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
    if (page == 0) {
      return <Biodata formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <BiodataII formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <CourseDetails formData={formData} setFormData={setFormData} />;
    } else if (page == 3) {
      return <CourseDetailsII formData={formData} setFormData={setFormData} />;
    } else if (page == 4) {
      return (
        <UniversityDetails formData={formData} setFormData={setFormData} />
      );
    }  else {
      return <Pay formData={formData} setFormData={setFormData} />;
    }
  };
  const submitData = async (e) => {
    // e.preventDefault()
    const stud = {formData}
    let response = await fetch('http://127.0.0.1:8000/api/v1/create-students/', {
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
      // handleFlutterPayment({
      //   callback: (response) => {
      //      console.log(response);
      //       closePaymentModal() // this will close the modal programmatically
      //   },
      //   onClose: () => {},
      // });
      navigate('/dashboard')

       
   }else{
       alert('Something went wrong!')
       
   }
  // e.preventDefault()
  // alert("We got here!")


  };

  return (
    <div className="form-container bg-white   flex flex-col items-center max-w-xl mx-auto">
      <div className="fex flex-row w-full">
        <div>{PageDisplay()}</div>

        <button
          className="bg-red-500 w-1/2 to-grey-500 px-2 py-2 my-8 text-white rounded-md"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          disabled={page== 0}
          onClick={() => {
             setPage((currPage) => currPage - 1);
          }}
        >
          Previous
        </button>

        <button
          className="bg-red-500 w-1/2 to-grey-500 px-2 py-2 my-8  text-white rounded-md"
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
          {page == FormTitles.length - 1 ? "Submit" : "Next"}
        </button>

        {/* {isShown && (<div className=" bg-red-400 animate-bounce">Registration fee is 11,000/=</div>)} */}
      </div>
    </div>
  );
};

export default RegForm;
