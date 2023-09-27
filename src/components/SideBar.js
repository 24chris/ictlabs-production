import { Dialog, Transition } from "@headlessui/react";
//import { useState,useEffect } from "react";
import React, {
  useEffect,
  useState,
  useContext,
  Fragment,
  useRef,
} from "react";
import AuthContext from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";


const SideBar = (m) => {
  let { authTokens, user, logoutUser } = useContext(AuthContext);
  

  const [video, setVideo] = useState({});
  const [module, setModule] = useState([]);
  const [lessonVid, setLessonVid] = useState([]);

  
  

  let { course_slug } = useParams();
  


  useEffect(() => {
    getVideo();
  }, []);

  let getVideo = async () => {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${course_slug}/`, {
    let response = await fetch(`https://labs-production-6dbb.up.railway.app/api/v1/${course_slug}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setVideo(data);
      setModule(data.course_module)
      
    } else if (response.statusText === "Unauthorized") {
      alert("Something wrong");
    }

  };

  
 
  console.log("Course", video);
  console.log("Modules", module);

  const playVid = (url) => {
    setLessonVid(url);
  };
  
  

  
  return (
    <>


  
     <div className="fixed left-0 w-64 justify-between h-screen bg-white border-r">

      <h2>Course Modules and Lessons</h2>
      {/* <div>
        {module&&module.description ? (
          <div>{module.description}</div>
        ):
        <p>NO items loaded yet</p>
        }
      </div> */}



       {/* <div>
      {module.length > 0 && (
		<ul>
      {module.map((crsmod) => (
        <>
        <div key={crsmod.id}>{crsmod.name}</div>
        <h2>{crsmod.description}</h2>
        </>
      ))}
	  </ul>
	)}
  </div>  */}

      <div className="px-4 py-6">  
        <nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
          
          {module.length > 0 &&(
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <>
              {module.map((crsmod) =>(
                <>
                <summary
                key={crsmod.id}
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg> */}
  
                <span className="ml-3 text-sm font-medium"> {crsmod.name} </span>

                <span
                  className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
               <nav aria-label="Teams Nav" className="mt-1.5 ml-8 flex flex-col">
               {crsmod.module_lesson.map(crsless =>(
                    <li key={crsless.id}>
                      <button
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => playVid(crsless.video_url)}
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg> */}
        
                        <span className="ml-3 text-sm font-medium"> {crsless.name} </span>
                      </button>
                    </li>
                  ))}
               
 
               {/* <a
                 href="#"
                 className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
               >
                  <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="w-5 h-5 opacity-75"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   stroke-width="2"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                   />
                 </svg> 
 
                 <span className="ml-3 text-sm font-medium"> Lesson 2 </span>
               </a> */}
             </nav>
             </>
              ))}
                       
            </>
          </details>
          )}
          
              
        </nav>
      </div>
</div>

<div className="container mt-6 mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
      
      <section className="">
        <div className="grid place-items-center lg:grid-cols-1 gap-12">
          <div className="rounded-lg shadow-lg items-center bg-red-300 ">
            <iframe
              title="landing-video"
              className="rounded-t-lg "
              src={lessonVid}
              controls
              height={320}
              width={640}
            ></iframe>
          </div>
        </div>
      </section>

      <div className="bottom-0 w-full mt-48 h-16 bg-white shadow">
      <div className="flex ">
      <a
          href="#"
          className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 42 42"
            className="inline-block mb-1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z"
                fill="currentColor"
                fillOpacity="0.1"
              ></path>
              <path
                d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z"
                fill="currentColor"
              ></path>
              <path
                d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.1"
              ></path>
              <rect
                fill="currentColor"
                transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) "
                x="17"
                y="10.3137085"
                width="30"
                height="2"
                rx="1"
              ></rect>
              <rect
                fill="currentColor"
                transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) "
                x="-3"
                y="10.3137085"
                width="30"
                height="2"
                rx="1"
              ></rect>
            </g>
          </svg>
          <span className="tab tab-home block text-xs">Tasks</span>
          </a>
      </div>
    </div>

    </div>

    </>
  );
};

export default SideBar;
