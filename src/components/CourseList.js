import React, {
    useEffect,
    useState,
    useContext,
    Fragment,
    useRef,
  } from "react";
  import AuthContext from "../context/AuthContext";
  import { Link,useParams } from "react-router-dom";
  import { Dialog, Transition } from "@headlessui/react";
  import { ExclamationTriangleIco } from "@heroicons/react/24/outline";
  import { PencilSquareIcon } from "@heroicons/react/24/solid";
  import { Disclosure } from "@headlessui/react";
  import { ChevronUpIcon } from "@heroicons/react/20/solid";
  import InAppBottom from "../components/InAppBottom";
  
  const CourseList = () => {
    
  
    let { authTokens, user, logoutUser } = useContext(AuthContext);
  
    let [course, setCourse] = useState([]);
    const [selectedCourse,SetSelectedCourse] = useState('')
   
    // let {course_slug} = useParams()
   
  
    useEffect(() => {
     courseChosen();
     
    }, []);
  
    let courseChosen = async () => {
        // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${course_slug}/`, {
          let response = await fetch(`https://fieldtest.owinoonline.com/api/v1/latest-cat/`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
        });
        let data = await response.json();
    
        if (response.status === 200) {
          setCourse(data);
        } else if (response.statusText === "Unauthorized") {
          alert("Something wrong")
        }
      };
    
    
    // let courseChosen = async () => {
    //   // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${course_slug}/`, {
    //     let response = await fetch(`http://127.0.0.1:8000/api/v1/latest-cat/`,{
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + String(authTokens.access),
    //     },
    //   });
    //   let data = await response.json();
  
    //   if (response.status === 200) {
    //     setCourse(data);
    //   } else if (response.statusText === "Unauthorized") {
    //     alert("Something wrong")
    //   }
    // };



    // const handleEnroll = async(event) =>{
    //     event.preventDefault()
    //     const enroll = {SetSelectedCourse}
    //     let response =  fetch(`http://127.0.0.1:8000/api/v1/enroll-user/`,{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + String(authTokens.access),
    //     },
    //     body:JSON.stringify(enroll)
    //   });
    //   let data = await response.json();
  
    //   if (response.status === 201) {
    //     console.log("You sent enrollment data",data)
    //   } else if (response.statusText === "Unauthorized") {
    //     alert("Something wrong")
    //   }
    // }

  
    
  
    return (
      
      
<div className="bg-white">
<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  {course.map((cours) => (
    
    <div key={cours.id} className="flex justify-center">
      <div
        
        className="rounded-lg shadow-lg bg-white max-w-sm"
      >
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {cours.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {cours.description}
          </p>
          <p className="text-gray-700 text-base mb-4">
            {cours.price}
          </p>
          <Link to={cours.get_absolute_url}>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out"
            // onClick={() => {getVideo()}}
          >
            Pay For Course
          </button>

          
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

{/* <form onSubmit={handleEnroll}>
            <label>
                Course:
                <select value={selectedCourse} onChange={(event) => SetSelectedCourse(event.target.value)}>
                    <option value="">Select a course</option>
                    {course.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
            </label>
            <button type="submit">Enroll</button>
        </form> */}
</div>
</div>
              
    );
  };
  
  export default CourseList;
  