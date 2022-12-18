import React, { useState, useEffect, useContext } from "react";
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
  const [content,setContent] = useState('')
  
  const [currentVideo, setCurrentVideo] = useState();


  // Persisting the localstorage
  // useEffect(() =>{
  //   const data = window.localStorage.getItem('POP_UP')
  //   if(data !== null)setShowBanner(JSON.parse(data))
  // },[])

  let text = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home-page/`, {
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

  const fetchVideos = async () =>{
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/intro-videos/`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      },
    })

    let videoResult = await res.json()

    if(res.status === 200){
      setCurrentVideo(videoResult)
    }else{
      alert("Somethig went wrong!")
    }
  }


  useEffect(() => {
    window.localStorage.setItem("POP_UP", JSON.stringify(showBanner));
    text()
    fetchVideos()
  }, [showBanner]);

  
  
  return (
    <>
      {showBanner && (
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
      )}
     
      <LandWatch videos={currentVideo} />
      
   

    </>
  );
};

export default LandingPage;
