import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate,useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const CoursePage = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();


  const [course, setCourse] = useState([]);

    

  useEffect(() => {
    RegisteredCourse()
  }, []); 

  let RegisteredCourse = async () => {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-cat/`, {
      let response = await fetch(`https://labs-production-6dbb.up.railway.app/api/v1/latest-cat/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let courses = await response.json();

    if (response.status === 200) {
      setCourse(courses);
    } else {
      alert("Something went wrong!");
    }
  };


  return (
    <>
    {/* <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {course.map((cours) => (
          
          <div className="flex justify-center">
            <div
              key={cours.id}
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
                <Link to={cours.get_absolute_url}>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out"
                  // onClick={() => {getVideo()}}
                >
                  View Course Content
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>

      <h1>Courses Page</h1>
      

 */}

      <SideBar/>


    </>
  );
};

export default CoursePage;
