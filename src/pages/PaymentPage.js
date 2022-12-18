import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate,useParams } from "react-router-dom";

const PaymentPage = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    
  }, []);

  let router = useParams()

  

  return (
    <>
    
      <h1>Payments Page</h1>
    </>
  );
};

export default PaymentPage;
