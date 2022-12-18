import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";
import RegForm from "../components/MultiStepForm/RegForm"



const CompleteRegPage = () => {


  return (
    <>
   
<RegForm/>
    
    </>
  );
};

export default CompleteRegPage;
