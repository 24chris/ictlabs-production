import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import ReactPlayer from "react-player/youtube";
import Bottom from "../components/Bottom";
import LandWatch from "../components/LandWatch";


const LandingPage = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [content,setContent] = useState('')
 

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



  
  return (
    <>
       {/*       
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
      </div> */}

      
<div className="container mt-6 mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
        <section className="">
          <div className="grid place-items-center lg:grid-cols-1 gap-12">
            <div className="rounded-lg shadow-lg items-center bg-red-300 ">
              <iframe
                className="rounded-t-lg "
                // src="https://www.youtube.com/embed/r9jwGansp1E"
                src={currentVideo.url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                height={320}
                width={640}
              ></iframe>
            </div>
          </div>
        </section>
        <h1>Introduction to Field Simplified</h1>
        <div className="relative flex items-center pt-2">
          
          {currentVideo.map((vids) => (
            <>
              {/* <iframe key={vids.id} className="" src={vids.url}>{vids.url}</iframe>
            <p>{vids.name}</p> */}

              <div
              key={vids.id}
                className="
                  group
                  inline-block pb-4 text-white overflow-hidden rounded-2xl shadow
                  hover:shadow-md
                  transition
                  mx-8
                  w-24
                  bg-hero-pattern
                "
              >
                <figure className="max-h-12 aspect-square overflow-hidden">
                  {/* <img
                    className="w-full h-24 object-cover transition group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1649168916853-8bdb50116941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0OTQ0MzY5Nw&ixlib=rb-1.2.1&q=80&w=400"
                    // src={vids.url}
                  /> */}
                    {/* <source src={vids.url}></source> */}
                    
                </figure>
                <div className="p-4">
                  {/* <h3 className="text-xl font-bold">{vids.name}</h3> */}
                 
                  <button>
                  <p className="font-serif text-black">{vids.name}</p>
                  </button>
                  
                  
                </div>
                
              </div>
            </>
          ))}
        </div>



        {/*  start of Bottom navigation */}
            <div className="relative flex">
              <div className="
                  group
                  inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow
                  hover:shadow-md
                  transition
                  mx-8
                ">
              </div>
              <div className="p-4 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                  {/* <h3 className="text-xl font-bold">{vids.name}</h3> */}
                  <p className="font-serif">One</p>
                            
                  <p className="font-serif">Why field Simplified</p>
                  <p className="font-serif">Why field Simplified</p>
                  <p className="font-serif">Why field Simplified</p>
                  <p className="font-serif">Why field Simplified</p>
                  <p className="font-serif">Why field Simplified</p>
                </div>
            </div>
        {/* End of bottom navigation */}
      </div>
    </>
  );
};

export default LandingPage;
