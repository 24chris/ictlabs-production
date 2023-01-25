import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link,useParams } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import WatchArea from "../components/study/WatchArea";
import Intern from "../components/Intern";
import Other from "../components/Other";




const DashboardPage = () => {

  let { authTokens,user, logoutUser } = useContext(AuthContext);
  
  let [video,setVideo] = useState([])
  let [module, setModule] = useState([]);
  let [lessons, setLesson] = useState([]);


  let {course_slug} = useParams()
  
  


  return (
    <>
     {user.role === 'STUDENT'?
    (
      <Intern/>
    ):(
      <Other/>
    )}





    {/* <WatchArea video={video}/> */}



{/* 

    <div className="container mx-auto flex">
        <div className="flex w-1/3 px-2">
          <div>
            <h2 className="px-10 mt-2 mb-2">Lessons to Complete</h2>


            {video.length>0 &&(
             <ul className="px-10">
        
                {video.map((vidq) => (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span key={vidq.id}>{vidq.name}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                             {video.course_module.map((lesson) => (
                          <>
                            <Disclosure.Panel
                              key={lesson.id}
                              className="px-4 pt-4 pb-2 text-sm text-gray-500"
                            >
                              
                                <a href={lesson.get_absolute_url}>
                                  {lesson.name}
                                </a>
                              
                            </Disclosure.Panel>
                          </>
                        ))} 
                        
                      </>
                    )}
                  </Disclosure>
                   ))}
            </ul> 
            )}
          </div>
        </div>

        <div className="flex flex-initial items-center mt-2 mb-4 px-2 w-9/12">
          <iframe
            src="https://www.youtube.com/embed/tyn3ydrh9Rk"
            title="some video"
            allowFullScreen
            width={900}
            height={500}
          ></iframe>
        </div>
         <div>{video.description}</div>  
       </div>   */}
    </>
    
  );
};

export default DashboardPage;
