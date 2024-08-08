import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom/dist";
import Faculty from "./components/Faculty";
import AdminLogin from "./components/admin/Admin";
import UserManagement from "./components/admin/userManagement";
import FacultyProfile from "./components/Faculty/FacultyProfile";



const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  const userData = localStorage.getItem('userData');
  const userDetails = JSON.parse(userData)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const location=useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token")
    const isToken = JSON.parse(token)
    if (isToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const logOut = () => {
    AuthService.logout().then((res)=>{
      localStorage?.setItem("token",null)
    if(userDetails&&userDetails?.role==="user")
      {
        navigate('/login')
        toast?.success(res?.data?.message)
        localStorage?.setItem("userData", null)
      }
      if(userDetails&&userDetails?.role==="admin")
        {
          navigate('/admin')
          toast?.success(res?.data?.message)
          localStorage?.setItem("userData", null)
        }
        setIsLoggedIn(false)

  
    
   
    }
    );

  };

  return (
    <>
      <ToastContainer />

      {(location?.pathname?.search('admin')<=0 && !(userDetails?.role==='admin')) &&<Navbar isLoggedIn={isLoggedIn} logOut={logOut} userDetails={userDetails} />}
      {(!(location?.pathname?.search('admin')<=0) && (userDetails?.role==='admin')) &&<AdminNavbar userDetails={userDetails} logOut={logOut} />}

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/register" element={<Register />} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/faculty" element={<Faculty/>} />
          <Route  path="/admin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn}/>} />
          <Route  path="/admin-user" element={<UserManagement/>} />
          <Route path="/facultyProfile" element={<FacultyProfile />} />
          
         
       
        </Routes>

      </div>

      <Footer />

      {/* <AuthVerify logOut={logOut}/> */}
    </>
  );
};

export default App;