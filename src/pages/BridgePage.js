import React, {
  useEffect,
  useState,
  useContext,
  Fragment,
  useRef,
} from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIco } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import InAppBottom from "../components/InAppBottom";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar"
import CourseList from "../components/CourseList";

const BridgePage = () => {
  const [open, setopen] = useState(true);
  const [close, setClose] = useState(false);
  const cancelButtonRef = useRef(null);

  let { authTokens, user, logoutUser } = useContext(AuthContext);

  let [category, setCategory] = useState([]);
  let [lessons, setLesson] = useState([]);
  let [registered, setRegistered] = useState(false);

 

  useEffect(() => {
    checkStatus();
   
  }, []);

       
  
  
  let checkStatus = async () => {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${course_slug}/`, {
      let response = await fetch(`http://127.0.0.1:8000/api/v2/check-reg/`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setRegistered(data);
    } else if (response.statusText === "Unauthorized") {
      alert("Something wrong")
    }
  };

  console.log('Status',registered)


  return (
    <>
    {/* registered?<SideBar/>:<Modal/> */}

    {registered?
    (
      <CourseList/>
    ):(
      <Modal/>
    )}
    
    </>
  );
};

export default BridgePage;



// Prevent Back browser navigation
// import React, { useEffect } from 'react';

// const Example = () => {
//   useEffect(() => {
//     window.history.pushState(null, null, window.location.href);
//     window.onpopstate = () => {
//       window.history.pushState(null, null, window.location.href);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>Back navigation is disabled.</p>
//     </div>
//   );
// };

// export default Example;

// Throughout the whole app
// You can disable back navigation throughout your whole React app 
// by using the window.history.pushState method in the useEffect hook in the root component. 
// This will prevent back navigation throughout the entire app, regardless of which component is currently being displayed.
// import React, { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     window.history.pushState(null, null, window.location.href);
//     window.onpopstate = () => {
//       window.history.pushState(null, null, window.location.href);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Your app components */}
//     </div>
//   );
// };

// export default App;
