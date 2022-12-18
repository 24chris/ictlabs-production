import React from "react";

const Biodata = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          Biodata {" "}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold dark:text-white">
              University
            </label>
            <input
              type="text"
              placeholder="University"
              value={formData.university}
              name="university"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, university: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Title of person who signed your internship letter
            </label>
            <input
              type="text"
              placeholder="Title of person who signed your internship letter"
              value={formData.title_of}
              name="title_of"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, title_of: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              College/School/Faculty
            </label>
            <input
              type="text"
              placeholder="College/School/Faculty"
              value={formData.college}
              name="college"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Biodata;
