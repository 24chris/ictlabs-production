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
import { BeakerIcon } from "@heroicons/react/24/solid";

const CompleteRegPage = () => {
  const [open, setopen] = useState(true);
  const cancelButtonRef = useRef(null);

  let { authTokens, logoutUser } = useContext(AuthContext);

  // const [university, setUniversity] = useState("");
  // const [title_of, setTitle] = useState("");

  // useEffect(() => {
  //   details();
  // }, []);

  // let details = async (e) => {
  //   e.preventDefault();
  //   const stud = { university, title_of };
  //   let response = await fetch(
  //     "http://127.0.0.1:8000/api/v1/create-students/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + String(authTokens.access),
  //       },
  //       body: JSON.stringify(stud),
  //     }
  //   );
  //   let box = await response.json();

  //   console.log("Items collected", box);

  //   if (response.status === 201) {
  //     alert("Thanks for your submission!!");
  //   } else {
  //     alert("Something went wrong!");
  //   }
  // };

  return (
    <div className="">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setopen}
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
              <Dialog.Overlay className="fixed inset-x-0 inset-y-9 mt-5 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="inline-block absolute top-12 right-3 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm::align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BeakerIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      <Link to="/complete">
                        Click here to complete registration
                      </Link>
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

export default CompleteRegPage;
