import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import LandList from "./LandList";

const LandWatch = ({ videos }) => {
  return (
    <>
      <div className="container mt-6 mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
        <section className="">
          <div className="grid place-items-center lg:grid-cols-1 gap-12">
            <div className="rounded-lg shadow-lg items-center bg-red-300 ">
              <video
                className="rounded-t-lg "
                src="https://www.youtube.com/embed/r9jwGansp1E"
                controls
                height={320}
                width={640}
              ></video>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="container mt-6 mx-auto xl:max-w-screen-xl 2xl:px-0 px-5">
        <section className="">
          <div className="grid place-items-center lg:grid-cols-1 gap-12">
            <div className="rounded-lg shadow-lg items-center bg-red-300 ">
              <video controls color="blue" className="w-1/2 h-1/2 flex"></video>
            </div>
          </div>
        </section>
      </div> */}

      {/* <h4 className="text-center font-semibold">Video list to play</h4> */}
      {/* <LandList videolist={videos} /> */}
    </>
  );
};

export default LandWatch;
