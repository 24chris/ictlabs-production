import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PromptPage from "./pages/PromptPage";
import CompleteRegPage from "./pages/CompleteRegPage";
import SupervisorPage from "./pages/SupervisorPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import BridgePage from "./pages/BridgePage";
import CoursePage from "./pages/CoursePage"
import TestPage from "./pages/TestPage"
import DemoLanding from "./pages/DemoLandingPage"
import LandWatch from "./components/LandWatch";
import DashboardPage from "./pages/DashboardPage"
import ModulePage from "./pages/ModulePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useEffect } from 'react';
import Modal from "./components/Modal";



function App() {
  useEffect(() =>{
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, null, window.location.href);
    };
  },[]);
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<LandingPage />} path="/" exact />
            <Route element={<LoginPage />} path="/user" exact />
            <Route element={<RegisterPage />} path="/register" exact />
            <Route element={<LandWatch/>} path="/demo-watch" exact/>
            <Route element={<PrivateRoute />}>
              <Route element={<HomePage />} path="/home-page" exact />
              <Route element={<TestPage />} path="/:course_slug/:module_slug/:lesson_slug" exact />
              <Route element={<PromptPage />} path="/prompt" exact />
              <Route element={<CompleteRegPage />} path="/complete" exact />
              <Route element={<SupervisorPage />} path="/supervisor" exact />
              <Route element={<BridgePage />} path="/user-registration" exact />
              <Route element={<CoursePage />} path="/courses" exact />
              <Route element={<DashboardPage />} path="/:course_slug/" exact />
              <Route element={<ModulePage />} path="/:course_slug/:module_slug" exact />
            </Route>
          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// <Router>
//         <AuthProvider>
//           <Header />
//           <Routes>
//             <Route element={<LandingPage/>} path="/" exact/>
//             <Route element={<LoginPage />} path="/login" />
//             <Route element={<RegisterPage/>} path="/register" exact/>
//             <Route element={<PrivateRoute/>}>
//               <Route element={<HomePage/>} path="/dashboard" exact/>
//               <Route element={<PromptPage/>} path="/prompt" exact/>
//               <Route element={<CompleteRegPage/>} path="/complete" exact/>
//               <Route element={<SupervisorPage/>} path="/supervisor" exact/>
//               <Route element={<BridgePage/>} path="/step1" exact/>
//             </Route>
//           </Routes>
//         </AuthProvider>
//         <Footer/>
//       </Router>
