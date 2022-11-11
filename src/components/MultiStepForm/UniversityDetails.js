import React from "react";

const universitydetails = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          University Details
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Area of residence
            </label>
            <input
              type="text"
              placeholder="area of residence"
              value={formData.area_of_residence}
              name="area_of_residence"
              onChange={(e) =>
                setFormData({ ...formData, area_of_residence: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Guardian Name
            </label>
            <input
              type="text"
              placeholder="Guardian name"
              value={formData.guardian_name}
              name="guardian_name"
              onChange={(e) =>
                setFormData({ ...formData, guardian_name: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
          <div className="flex flex-col w-full mx-8 my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Tel No:
            </label>
            <input
              type="text"
              placeholder="Telephone number"
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
        {/* <div className="fex flex-row w-full">
          <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">
            Next
          </button>
        </div> */}
      </div>
    </>
  );
};

export default universitydetails;
