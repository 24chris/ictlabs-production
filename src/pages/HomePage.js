import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link,useParams } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import InAppBottom from "../components/InAppBottom";

const HomePage = () => {
  let [category, setCategory] = useState([]);
  let [lessons, setLesson] = useState([]);
  let [video,setVideo] = useState()
  
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
   
    getLesson();
    
  }, []);
  
  
  let getLesson = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-lessons/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
        });
        let data = await response.json();

    // console.log("Chris lessons from homepage", data[0].video_url);

    if (response.status === 200) {
      setLesson(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };


  return (
    <>
    <div className="container mx-auto flex">
      
        <div className="flex w-1/3 px-2">
          {/* <h1>Internship Workflow</h1> */}
          <div>
           <h2 className="px-10 mt-2 mb-2">Lessons to Complete</h2>  
            {/* <div className="flex flex-col py-4"> */}
              <ul className="px-10">
                {category.map((cat) => (
                  <>
                    {/* <li key={cat.id}>{cat.name}</li> */}

                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span key={cat.id}>{cat.name}</span>
                            {/* Module.title or category name */}
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-purple-500`}
                            />
                          </Disclosure.Button>

                          {lessons.map((lesson) => (
                            <>
                              <Disclosure.Panel
                                key={lesson.id}
                                className="px-4 pt-4 pb-2 text-sm text-gray-500"
                              >
                                <a href={`${encodeURI(lesson.get_absolute_url)}`}>{lesson.name}</a>
                                {/* Return a list of the lessons in the module with link of the id of video to be played */}
                              </Disclosure.Panel>

                              {/* <div className="min-h-full flex items-center justify-center py-8 sm:px-2 lg:px-8">
                                <iframe
                                  src={`${encodeURI(lesson.video_url)}`}
                                  title="some video"
                                  allowfullscreen
                                ></iframe>
                              </div> */}
                            </>
                            
                          ))}
                        </>
                      )}
                    </Disclosure>
                  </>
                ))}
              </ul>
            {/* </div> */}
          </div>
        </div>
        
        <div className="flex flex-initial items-center mt-2 mb-4 px-2 w-9/12">
        <iframe
              src="https://www.youtube.com/embed/tyn3ydrh9Rk"
              // src={lessons[0].video_url}
              title="some video"
              allowfullscreen
              width={900}
              height={500}
            ></iframe>
        </div>
        {/* <div className="min-h-full flex items-center justify-center py-8 sm:px-2 lg:px-8"> */}
            {/* <div className="aspect-w-16 aspect-h-9 min-h-full flex items-center ">
            <iframe
              src="https://www.youtube.com/embed/tyn3ydrh9Rk"
              // src={lessons.obje}
              title="some video"
              allowfullscreen
            ></iframe>
            </div> */}
            
            
          {/* </div> */}
            

         
    </div>
    <InAppBottom/>
    </>
    
  );
};

export default HomePage;
