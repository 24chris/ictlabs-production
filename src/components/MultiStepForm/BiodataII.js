import React from "react";

const Biodata = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
           University Details{" "}
        </h1>
        
         <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Department
            </label>
            <input
              type="text"
              placeholder="Department"
              value={formData.department}
              name="department"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="phone number"
              value={formData.telephone}
              name="telephone"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
              className="border-b py-2 bg-white focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
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

export default Biodata;
