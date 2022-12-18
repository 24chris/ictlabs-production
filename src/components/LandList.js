import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useState,useEffect } from "react";


const LandList = ({videolist}) => {

  const [vis,SetVis] = useState(videolist)

  useEffect(()=>{
    SetVis(videolist)
  },[videolist])
   
  

    console.log("The video to iterate",vis)
 

  return (
    <>
    <h1>List of videos to show</h1>
      {/* {vis.map((lk) =>(
        <div key={lk.id}>{lk.name}</div>
      ))} */}
    </>
  );
};

export default LandList;
