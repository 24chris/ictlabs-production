import React, { useState, useEffect, useContext } from "react";

const UniversityDetails = ({ formData, setFormData }) => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    window.localStorage.setItem("POP_UP", JSON.stringify(showBanner));
  }, [showBanner]);

  return (
    <>
      {showBanner && (
        <>
          {/* <div className="absolute flex items-start z-50 w-64 shadow-md px-2 ml-3 py-2 pl-8 font-sans ">
            We highly recommend group work
            <button className="ml-10" onClick={() => setShowBanner(false)}>
              X
            </button>
          </div> */}
        </>
      )}
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          University Details
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
        <div className="flex flex-col w-full my-2">
          <label className="text-sm font-semibold text-gray-600 dark:text-white">
            Tel No:
          </label>
          <input
            type="text"
            placeholder="Guardian Telephone Number"
            value={formData.guardian_number}
            name="guardian_number"
            onChange={(e) =>
              setFormData({ ...formData, guardian_number: e.target.value })
            }
            required={true}
            className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
          />
        </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Upload Internship Letter
            </label>
            <input
              type="file"
              placeholder="Internship letter"
              value={formData.intern_picture}
              name="inletter"
              onChange={(e) =>
                setFormData({ ...formData, intern_picture: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Upload identification ID/document from university
            </label>
            <input
              type="file"
              placeholder="university ID"
              value={formData.student_id_picture}
              name="student_id_picture"
              onChange={(e) =>
                setFormData({ ...formData, student_id_picture: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default UniversityDetails;
