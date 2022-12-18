import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";

const Supervisor = () => {
  let { authTokens,user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  let [course, setCourse] = useState([]);

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

  
  let {course_slug} = useParams()
  let {module_slug} = useParams()
  let {lesson_slug} = useParams()

  

  useEffect(()=> {
    getCategory();
    supervise()
},[])

let getCategory = async () => {
  let response = await fetch("http://127.0.0.1:8000/api/v1/latest-cat/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    },
  });
  let course = await response.json();

  console.log("Courses available",course);

  if (response.status === 200) {
    setCourse(course);
  } else if (response.statusText === "Unauthorized") {
    logoutUser();
  }
};

  let supervise = async e=> {
    e.preventDefault()
    const stud = formData
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
       navigate(`/${course_slug}/${module_slug}/${lesson_slug}/`)
        
    }else{
        alert('Something went wrong!')
        
    }
}

  return (
    <div className="fex flex-row w-full">
      <form onSubmit={supervise}>
      <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold dark:text-white">
              University
            </label>
            <input
              type="text"
              placeholder="university"
              value={formData.university}
              name="university"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, university: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Title of person who signed your internship letter
            </label>
            <input
              type="text"
              placeholder="Title of person who signed your internship letter"
              value={formData.title_of}
              name="title_of"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, title_of: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              College/School/Faculty
            </label>
            <input
              type="text"
              placeholder="College/School/Faculty"
              value={formData.college}
              name="college"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Department
            </label>
            <input
              type="text"
              placeholder="Department"
              value={formData.department}
              name="department"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="phone number"
              value={formData.telephone}
              name="telephone"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
              className="border-b py-2 bg-white focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div> 
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Course Field
            </label>
            <select
              type="text"
              placeholder="choose program of interest"
              value={formData.coursefield}
              name="coursefield"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, coursefield: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
              {/* <option selected>Course Field</option>
                <option value="US">Humanities</option>
                <option value="CA">Programming</option>
                <option value="FR">Databases</option>
                <option value="DE">Finance</option> */}
                {course.map((co,index)=>{return <option key={index} value={co.name}>{co.name}</option>})}
            </select>

            {/* <select>
              {course.map((co,index)=>{return <option key={index} value={co.id}>{co.name}</option>})}
            </select> */}
            
          </div>
          
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Specify Course
            </label>
            <input
              type="text"
              placeholder="specify course"
              value={formData.specify_course}
              name="specify_course"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, specify_course: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Choose what department you want to do internship in
            </label>
            <select
              type="text"
              placeholder="department"
              name="department_choice"
              required={true}
              className="border-b py-2 bg-white focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
            <option value={formData.department_choice} onChange={(e) => setFormData({...formData,department_choice:e.target.value})}>Choose what department you want to do internship in</option>
                <option value="US">Humanities</option>
                <option value="CA">Programming</option>
                <option value="FR">Databases</option>
                <option value="DE">Finance</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Year of Study
            </label>
            <select
              type="text"
              placeholder="year of study"
              name="year_of_study"
              required={true}
              value={formData.year_of_study}
              onChange={(e) =>
                setFormData({ ...formData, year_of_study: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
            <option selected>Year of Study</option>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
            </select>
          </div>
        </div>
                
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Registration Number
            </label>
            <input
              type="text"
              placeholder="registration number"
              value={formData.registration_number}
              name="registration_number"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, registration_number: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Area of residence
            </label>
            <input
              type="text"
              placeholder="area of residence"
              value={formData.area_of_residence}
              name="area_of_residence"
              onChange={(e) =>
                setFormData({ ...formData, area_of_residence: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Guardian Name
            </label>
            <input
              type="text"
              placeholder="Guardian name"
              value={formData.guardian_name}
              name="guardian_name"
              onChange={(e) =>
                setFormData({ ...formData, guardian_name: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>


        <div className="flex flex-col w-full my-2">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
            Do you want to work as a Group or indiviual?
          </label>
          <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
            <div className="w-full">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
                Group
              </label>
              <input
                className="flex flex-col mt-4"
                value="group"
                name="group"
                checked={formData.work_type === "group"}
                onChange={(e) =>
                  setFormData({ ...formData, work_type: e.target.value })
                }
                type="radio"
              ></input>
            </div>
            <div className=" w-full ">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
                Indiviual
              </label>
              <input
                type="radio"
                checked={formData.work_type === "indiviual"}
                value="indiviual"
                name="indiviual"
                onChange={(e) =>
                  setFormData({ ...formData, work_type: e.target.value })
                }
                className="flex flex-col mt-4 border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
              />
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Start time for doing Internship
            </label>
            <input
              type="time"
              placeholder="Time of convenience"
              value={formData.conv}
              name="start_time"
              onChange={(e) =>
                setFormData({ ...formData, start_time: e.target.value })
              }
              className="border-b bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              End time for doing Internship
            </label>
            <input
              type="time"
              placeholder="End time"
              value={formData.end}
              name="end"
              onChange={(e) =>
                setFormData({ ...formData, end: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <input
                className="w-full bg-red-500 py-2 rounded-md text-gray-50"
                
                type="submit"
                value="Submit"
              />

      </form>
    </div>
  );
};

export default Supervisor;
