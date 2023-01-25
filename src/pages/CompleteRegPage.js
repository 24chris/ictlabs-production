import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";
import RegForm from "../components/MultiStepForm/RegForm"
import NonStudentForm from "../components/NonStudent/NonStudentForm";



const CompleteRegPage = () => {

  let { authTokens,user, logoutUser } = useContext(AuthContext);

  console.log("The user is",user.username,"and the role is",user.role)

  return (
    <>
    {user.role === 'STUDENT'?
    (
      <RegForm/>
    ):(
      <NonStudentForm/>
    )}
   
    </>
  );
};

export default CompleteRegPage;
