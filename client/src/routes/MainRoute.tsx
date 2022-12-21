import React from "react";
import Header from "../components/header/Header";
import MainLayoute from "../layoutes/MainLayoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Specialities from "../components/specialities/Specialities";
import GeneralPhysician from "../components/generalPhysician/GeneralPhysician";
const MainRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayoute>
                <Home />
              </MainLayoute>
            }
          />
          <Route
            path="/specialities"
            element={
              <MainLayoute>
                <Specialities />
              </MainLayoute>
            }
          />
          <Route
            path="/specialities/general-physician"
            element={
              <MainLayoute>
                <GeneralPhysician />
              </MainLayoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default MainRoute;
