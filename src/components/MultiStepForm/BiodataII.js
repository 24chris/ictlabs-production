import React, { useState,useContext,useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Biodata = ({ formData, setFormData }) => {

  let { authTokens, logoutUser } = useContext(AuthContext);

    let [course, setCourse] = useState([]);
    useEffect(() => {
      getCategory();

    }, []);
  
   
   
  let getCategory = async () => {
    let response = await fetch("https://fieldtest.owinoonline.com/api/v1/latest-cat/", {
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
  return (
    <>
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
           University Details{" "}
        </h1>
        
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
              placeholder="Phone Number"
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

        {/* <div className="fex flex-row w-full">
          <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">
            Next
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Biodata;
