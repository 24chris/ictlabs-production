import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import ReactPlayer from "react-player/youtube";
import Bottom from "../components/Botton";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const videos = [
  {
    name: "Why Simplified",
    url: "https://www.youtube.com/embed/tyn3ydrh9Rk",
  },
  {
    name: "About Internship ",
    url: "https://www.youtube.com/watch?v=TEDR6Jg2Pls",
  },
  {
    name: "Other Programs ",
    url: "https://www.youtube.com/embed/tyn3ydrh9Rk",
  },
  {
    name: "About Supervision",
    url: "https://www.youtube.com/embed/tyn3ydrh9Rk",
  },
  {
    name: "Fields Covered",
    url: "https://www.youtube.com/watch?v=TEDR6Jg2Pls",
  },
  {
    name: "Need Help",
    url: "https://www.youtube.com/embed/tyn3ydrh9Rk",
  },
  {
    name: "Demos",
    url: "https://www.youtube.com/watch?v=TEDR6Jg2Pls",
  },
];

const LandingPage = () => {
  const [showBanner, setShowBanner] = useState(true);

  // Persisting the localstorage
  // useEffect(() =>{
  //   const data = window.localStorage.getItem('POP_UP')
  //   if(data !== null)setShowBanner(JSON.parse(data))
  // },[])

  useEffect(() => {
    window.localStorage.setItem("POP_UP", JSON.stringify(showBanner));
  }, [showBanner]);

  const [currentVideo, setCurrentVideo] = useState();
  const [playing, setPlaying] = useState(false);

  let { authTokens, logoutUser } = useContext(AuthContext);

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
      <div className="container mx-auto relative p-6 w-max">
        <iframe
          src="https://www.youtube.com/embed/r9jwGansp1E"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          height={320}
          width={640}
        ></iframe>
      </div>

      <div className="container w-max">
        <h2 className="pt-0 font-semibold mb-2">
          Introduction to Filed Simplified
        </h2>

        <div className="container mx-auto flex">
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>
           <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>
           <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-8"
            width={150}
            height={100}
          ></iframe>
          
        </div>
        <div className="container flex mt-1">
        <h3 className="mx-8 w-40">Why field simplified</h3>
        <h3 className="mx-8 w-40">About Internship</h3>
        <h3 className="mx-8 w-40 ">Other Programs</h3>
        <h3 className="mx-8 ">About Supervision</h3>
        <h3 className="mx-8 w-40">Field Covered</h3>
        <h3 className="mx-8 w-40">Need help</h3>
        <h3 className="mx-8 ">Demo</h3>
        
        </div>
      </div>

      {/* <div className="">
        {/* <div className="min-h-full flex items-center justify-center py-8 sm:px-2 lg:px-8">
          <ReactPlayer url="https://www.youtube.com/embed/tyn3ydrh9Rk" />
        </div> */}

      {/* <div className="aspect-w-16 aspect-h-9 min-h-full">
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      
        
        <h2 className="pt-0 font-semibold mb-2">INTRO TO FIELD SIMPLIFIED</h2>
      </div> */}

      {/* <div className="flex flex-col content-center items-center">
        <section className="text-gray-700 body-font">
          <div className="min-h-full flex items-center justify-center py-8 sm:px-2 lg:px-8">
            <ReactPlayer url="https://www.youtube.com/embed/tyn3ydrh9Rk" />
          </div>
          <h2 className="pt-0 font-semibold mb-2">INTRO TO FIELD SIMPLIFIED</h2>
        </section>
        <div className="container mx-auto shadow-sm">
          <div className="flex flex-row space-x-4 justify-center">
            {videos.map((video) => (
              <div key={video.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-800 text-white">
                    
                  </div>
                  <button
                    onClick={() => {
                      setCurrentVideo(video);
                      setPlaying(true);
                    }}
                    className="ml-16 text-lg leading-6 font-medium text-gray-900"
                  >
                    {video.name}
                  </button>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {video.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Bottom />
    </>
  );
};

export default LandingPage;
