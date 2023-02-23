import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Bottom = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [info, setInfo] = useState([]);

  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    getInfo();
  }, []);

  let getInfo = async () => {
    let response = await fetch("https://fieldtest.owinoonline.com/api/v1/home-page/");
    let data = await response.json();

      if (response.status === 200) {
      setInfo(data);
      setDisplayedItems(data.slice(0, 5));
      setMaxIndex(Math.ceil(data.length / 5));
    } else if (response.statusText === "Unauthorized") {
      console.log("Nothing fetched");
    }
  };


  console.log("Information Items",info)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleNext() {
    if (currentIndex < maxIndex - 1) {
      setCurrentIndex(currentIndex + 1);
      setDisplayedItems(info.slice(currentIndex * 5, (currentIndex + 1) * 5));
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setDisplayedItems(info.slice(currentIndex * 5, (currentIndex + 1) * 5));
    }
  }

  return (
    <>
      {/* {info.length > 0 && ( */}
        {/* <> */}
          {/* {info.map((inf)=>{
            <div key={inf.id}>
              {inf.information_name} 
              <div className="text-lg font-medium text-black">
              {inf.information_name} 
              </div>
              
            </div>
          })} */}
        {/* </>       */}
      {/* )} */}

    
      



       <div className="flex overflow-x-auto">
        <button
          className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300bg-blue-500 text-white py-2 px-4 rounded-l"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <svg
            class="block w-4 h-4 fill-current"
            viewBox="0 0 256 512"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </button>
        {info.length > 0 && (
          <ul>
            {displayedItems.map((inf) => (
              <div
                key={inf.id}
                className=" group
            inline-block pb-4 text-black  rounded-2xl 
            transition
            
            "
              >
                <div className="bg-gray-200 py-5 px-4 mr-2 rounded-lg text-left">
                  <button
                    className="text-lg font-medium text-black"
                    onClick={openModal}
                  >
                    {inf.information_name}
                  </button>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Description
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                {inf.information_description}
                              </p>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black-900  border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={closeModal}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              </div>
            ))}
          </ul>
        )}
        <button
          className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          onClick={handleNext}
          disabled={currentIndex === maxIndex - 1}
        >
          <svg
            class="block w-4 h-4 fill-current"
            viewBox="0 0 256 512"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </button>
      </div> 



    </>
  );
};

export default Bottom;
