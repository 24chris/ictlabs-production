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
import TestPage from "./pages/TestPage"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<LandingPage />} path="/login" exact />
            <Route element={<LoginPage />} path="/user" exact />
            <Route element={<RegisterPage />} path="/register" exact />
            <Route element={<PrivateRoute />}>
              <Route element={<HomePage />} path="/dashboard" exact />
              <Route element={<TestPage />} path="/test-lesson/:lesson_id" exact />
              <Route element={<PromptPage />} path="/prompt" exact />
              <Route element={<CompleteRegPage />} path="/complete" exact />
              <Route element={<SupervisorPage />} path="/supervisor" exact />
              <Route element={<BridgePage />} path="/step1" exact />
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
