import React, {
  useEffect,
  useState,
  useContext,
  Fragment,
  useRef,
} from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIco } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import InAppBottom from "../components/InAppBottom";

const BridgePage = () => {
  const [open, setopen] = useState(true);
  const [close, setClose] = useState(false);
  const cancelButtonRef = useRef(null);

  let { authTokens, user, logoutUser } = useContext(AuthContext);

  let [category, setCategory] = useState([]);
  let [lessons, setLesson] = useState([]);
  let [registered, setRegistered] = useState("");

 


  return (
    <div className="">
      {/* Background start */}
      <div className="container mx-auto flex">
        <div className="flex w-1/3 px-2">
          {/* <h1>Internship Workflow</h1> */}
          <div>
            <h2 className="px-10 mt-2 mb-2">Lessons </h2>
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
                              <a href={`${encodeURI(lesson.get_absolute_url)}`}>
                                {lesson.name}
                              </a>
                              {/* Return a list of the lessons in the module with link of the id of video to be played */}
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
            src="https://www.youtube.com/embed/tyn3ydrh9Rk"
            title="some video"
            allowfullscreen
            width={900}
            height={500}
          ></iframe>
        </div>
      </div>

      {/* Background end */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setClose}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm: p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-x-0 inset-y-1 mt-15 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="inline-block absolute top-12 right-3 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm::align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PencilSquareIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      <Link to="/complete" className="mr-3">
                        Click here to complete registration
                      </Link>
                      <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={logoutUser}
                    >
                      Logout 
                    </button>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default BridgePage;
