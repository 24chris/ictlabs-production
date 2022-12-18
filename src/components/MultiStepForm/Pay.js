import React from "react";

const Pay = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">
          University Details
        </h1>
        
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
            <div className=" w-full ">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
                Indiviual
              </label>
              <input
                type="radio"
                checked={formData.work_type === "indiviual"}
                value="indiviual"
                name="indiviual"
                onChange={(e) =>
                  setFormData({ ...formData, work_type: e.target.value })
                }
                className="flex flex-col mt-4 border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
              />
            </div>
          </div>
        </div>
       
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              Start time for doing Internship
            </label>
            <input
              type="time"
              placeholder="Time of convenience"
              value={formData.conv}
              name="start_time"
              onChange={(e) =>
                setFormData({ ...formData, start_time: e.target.value })
              }
              className="border-b bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-600">
              End time for doing Internship
            </label>
            <input
              type="time"
              placeholder="End time"
              value={formData.end}
              name="end"
              onChange={(e) =>
                setFormData({ ...formData, end: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Pay;
