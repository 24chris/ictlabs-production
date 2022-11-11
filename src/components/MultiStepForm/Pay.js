import React from "react";

const Pay = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">
          University Details
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Upload identification ID/document from university
            </label>
            <input
              type="file"
              placeholder="university ID"
              value={formData.student_id}
              name="student_id"
              onChange={(e) =>
                setFormData({ ...formData, student_id: e.target.value })
              }
              required={true}
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-2">
        <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
          Do you want to work as a Group or indiviual?
        </label>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="w-full">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Group
            </label>
            <input
              className="flex flex-col mt-4"
              value="group"
              name="group"
              checked={formData.work_type === "group"}
              onChange={(e) =>
                setFormData({ ...formData, work_type: e.target.value })
              }
              type="radio"
            ></input>
          </div>
          <div className="flex flex-col w-full mx-8 my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Indiviual
            </label>
            <input
              type="radio"
              checked={formData.work_type === "indi"}
              value="indiviual"
              name="indi"
              onChange={(e) =>
                setFormData({ ...formData, work_type: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Time of convenience for doing Internship
            </label>
            <input
              type="time"
              placeholder="Time of convenience"
              value={formData.conv}
              name="conv"
              onChange={(e) =>
                setFormData({ ...formData, conv: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>

        {/* <div className="fex flex-row w-full">
            <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
            </div> */}
      </div>
    </>
  );
};

export default Pay;
