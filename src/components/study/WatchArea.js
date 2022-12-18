import React, { useState,useEffect } from 'react'
import WatchList from './WatchList'

function WatchArea({video}) {
    // const [src,setSrc] =useState(sections[0].episodes[0].file)
    const [src,setSrc] =  useState(video.course_module)

    console.log("This is the component data",video.course_module)

      
    
    
    return (
        <section className="flex flex-col lg:flex-row" >
         <div className="lg:w-9/12 w-full bg-black h-96 lg:h-screen">
            <video controls color='blue' className='w-full h-full' src={src} ></video>
        </div>

        <div className="lg:w-3/12 w-full h-56 lg:h-screen overflow-y-scroll">
            <div>
                <h4 className="py-3 px-2 bg-gray-300 text-lg">
                    Course Content
                </h4>

                   

                    {/* <WatchList src={src} setSrc={setSrc} /> */}
                    
            </div>
        </div> 

        <h1>Video stuff goes here  :  -  {video.name}</h1>

    </section>
    )
}

export default WatchArea
