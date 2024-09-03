import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RiceLeafInfo from "./pages/RiceLeafInfo";
import UserHistory from "./pages/UserHistory";
// import PrivateRoutes from "./utils/PrivateRoutes";
import PageNotFound from "./pages/PageNotFound";
import { Agriculture } from "@mui/icons-material";
import AgriculturePage from "./pages/AgriculturePage";
import AgriculttureDetails from "./pages/AgriculttureDetails";
import Calender from "./pages/Calender";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/riceLeafInfo" element={<RiceLeafInfo />} />
          <Route path="/agriculture-news" element={<AgriculturePage />} />
          <Route path="/:id" element={<AgriculttureDetails />} />
          <Route path="/calender" element={<Calender />} />

          <Route path="/userHistory" element={<UserHistory />} />
          {/* </Route> */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
