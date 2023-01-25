import React from "react";

const CourseDetails = ({ formData, setFormData }) => {
  return (
    <>
      <div className="form-container bg-white  rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto mt-9">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          University Details
        </h1>
        
       
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Specify Course
            </label>
            <input
              type="text"
              placeholder="Specify Course at university"
              value={formData.specify_course}
              name="specify_course"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, specify_course: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Choose what department you want to do internship in
            </label>
            <select
              type="text"
              placeholder="Department"
              name="department_choice"
              required={true}
              className="border-b py-2 bg-white focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
            <option value={formData.department_choice} onChange={(e) => setFormData({...formData,department_choice:e.target.value})}>Choose what department you want to do internship in</option>
                <option value="US">Humanities</option>
                <option value="CA">Programming</option>
                <option value="FR">Databases</option>
                <option value="DE">Finance</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">
              Year of Study
            </label>
            <select
              type="text"
              placeholder="Year of Study"
              name="year_of_study"
              required={true}
              value={formData.year_of_study}
              onChange={(e) =>
                setFormData({ ...formData, year_of_study: e.target.value })
              }
              className="border-b py-2 bg-white  focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:black"
            >
            <option selected>Year of Study</option>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
