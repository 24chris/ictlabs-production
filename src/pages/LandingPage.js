import React, { useState, useEffect, useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import ReactPlayer from "react-player/youtube";
import Bottom from "../components/Bottom";
import LandWatch from "../components/LandWatch";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const LandingPage = () => {
  const [showBanner, setShowBanner] = useState(true);

  const [content, setContent] = useState([]);

  // const [playlist,setPlaylist] = useState([])
  const [currentVideo, setCurrentVideo] = useState([]);

  const videoRef = useRef("");

  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/r9jwGansp1E"
  );

  // Persisting the localstorage
  // useEffect(() =>{
  //   const data = window.localStorage.getItem('POP_UP')
  //   if(data !== null)setShowBanner(JSON.parse(data))
  // },[])

  let text = async () => {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home-page/`, {
    let response = await fetch("https://labs-production-6dbb.up.railway.app/api/v1/home-page/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let courses = await response.json();

    if (response.status === 200) {
      setContent(courses);
    } else {
      alert("Something went wrong!");
    }
  };

  const fetchVideos = async () => {
    // let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/intro-videos/`,{
    let res = await fetch("https://labs-production-6dbb.up.railway.app/api/v1/home-page/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let videoResult = await res.json();

    if (res.status === 200) {
      setCurrentVideo(videoResult);
    } else {
      alert("Somethig went wrong!");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("POP_UP", JSON.stringify(showBanner));
    text();
    fetchVideos();
  }, [showBanner]);

  const playVid = (url) => {
    setVideoUrl(url);
  };

  return (
    <>
      {/* {showBanner && (
        <>
          <div className="mt-2 absolute z-50 w-64 shadow-md px-2 ml-3 py-2 pl-8 font-sans ">
            We encourage you to watch all videos in 10 minutes
            <button className="ml-10" onClick={() => setShowBanner(false)}>
              X
            </button>
          </div>
          <div className="absolute z-50 w-64 shadow-md ml-3 px-2 mt-20 py-2 pl-8 font-sans ">
            or read from the links below
            <button className="ml-1" onClick={() => setShowBanner(false)}>
              X
            </button>
          </div>

          
        </>
      )} */}

      {/* <LandWatch videos={currentVideo} /> */}

      {/* <div className="container mt-6 mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
        <section className="">
          <div className="grid place-items-center lg:grid-cols-1 gap-12">
            <div className="rounded-lg shadow-lg items-center bg-red-300 ">
              <iframe
                title="landing-video"
                className="rounded-t-lg "
                // src="https://www.youtube.com/embed/r9jwGansp1E"
                // src={videoRef}
                src={videoUrl}
                controls
                height={320}
                width={640}
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <h1>Introduction to Field Simplified</h1> */}
{/*       
      <div className="flex overflow-x-auto">
        {currentVideo.length > 0 && (
          <ul>
            {currentVideo.map((vid) => (
              <div
                key={vid.id}
                className=" group
            inline-block pb-4 text-white  rounded-2xl 
            transition
            
            "
              >
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://images.unsplash.com/photo-1649168916853-8bdb50116941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0OTQ0MzY5Nw&ixlib=rb-1.2.1&q=80&w=400"
                    className="mx-auto object-cover rounded-lg h-16 w-16 "
                  />
                </a>
                <div className="bg-gray-200 py-2 px-4 mr-2 rounded-lg text-left">
                  <button
                    className="text-lg font-medium text-black"
                    onClick={() => playVid(vid.video_link)}
                  >
                    {vid.name}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div> */}

     

      {/* <Bottom /> */}

      <div className="container mx-auto py-4">
  <div className="flex flex-wrap">
    <div className="relative w-full py-5">
      {/* <p className="text-xl font-bold">Row 1</p> */}
      {showBanner && (
      
        <div className="absolute top-0 left-0 p-4">
        <div className="relative w-64 rounded-lg bg-gray-100 p-6 shadow-sm">
          <button
            type="button"
            className="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
            onClick={() => setShowBanner(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <h2 className="text-lg font-medium">
              We encourage you to watch all videos in 10 minutes
              or read from the links below
              </h2>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Video Player */}
      <div className="container mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
        <section className="">
          <div className="grid place-items-center lg:grid-cols-1 gap-12">
            <div className="rounded-lg shadow-lg items-center bg-red-300 ">
              <iframe
                title="landing-video"
                className="rounded-t-lg "
                src={videoUrl}
                controls
                height={320}
                width={640}
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      {/*End Video Player  */}
    </div>
    <div className="w-full ">
      {/* <p className="text-xl font-bold">Row 2</p> */}
      <h1 className="flex flex-row justify-center text-xl font-bold p-2">Introduction to Field Simplified</h1> 
      
      <div className="container w-full mx-auto">
      {currentVideo.length > 0 && (
        <ul className="flex flex-row justify-center">
        
          {currentVideo.map((vid) => (
               <div key={vid.id} className="w-32 bg-white rounded-lg shadow-lg border border-red-500 mx-2">
                <button
                onClick={() => playVid(vid.video_link)}
                >
                   <a href="#" className="">
                 <img src="/ytimage.png" alt="youtube-image" width={240} height={280}/>
               </a>
               <h6 class="bottom-0 font-bold text-xl">{vid.name}</h6>
                </button>
            
           </div>
          ))}
          
        </ul>   
      )}
      </div>
    </div>
    <div className="w-full py-5">
      <Bottom/>
      {/* <InformationList/> */}
    </div>
  </div>
</div>
    </>
  );
};

export default LandingPage;
