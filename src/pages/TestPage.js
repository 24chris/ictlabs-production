import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import InAppBottom from "../components/InAppBottom";
import WatchList from "../components/study/WatchList";

const TestPage = () => {
  let [category, setCategory] = useState([]);
  let [lessons, setLesson] = useState([]);
  let [video,setVideo] = useState([]);

  let {course_slug} = useParams()
  let {module_slug} = useParams()
  let {lesson_slug} = useParams()
   

  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getCategory();
    getLesson();
    getVideo();
  }, []);

  let getCategory = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-mod/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setCategory(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let getLesson = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-lessons/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setLesson(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };


  let getVideo = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${course_slug}/${module_slug}/${lesson_slug}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    console.log("Dynamic Video loaded", data);

    if (response.status === 200) {
      setVideo(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <>
      <div className="container mx-auto flex">
        <div className="flex w-1/3 px-2">
          <div>
            <h2 className="px-10 mt-2 mb-2">Lessons to Complete</h2>

            <ul className="px-10">
              {category.map((cat) => (
                <>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span key={cat.id}>{cat.name}</span>

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
                              
                                <a href={lesson.get_absolute_url}>
                                  {lesson.name}
                                </a>
                              
                            </Disclosure.Panel>
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
            // src="https://www.youtube.com/embed/tyn3ydrh9Rk"
            src={video.video_url}
            title="some video"
            allowfullscreen
            width={900}
            height={500}
          ></iframe>
        </div>
        <div>{video.description}</div>
      </div>
      <InAppBottom />

    
    </>
  );
};

export default TestPage;
