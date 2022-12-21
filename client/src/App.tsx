import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Tstore } from "./redux/store";
import { toggleBg } from "./redux/reduicers/toggleBG";
import NavBar from "./components/navbar/NavBar";
import MainLayoute from "./layoutes/MainLayoute";
import Header from "./components/header/Header";
import MainRoute from "./routes/MainRoute";
function App() {
  const { BG } = useSelector((state: Tstore) => state.toggleBG);
  const dispatch = useDispatch();

  return (
    <div className={BG ? "darkMode" : "lightMode"}>
      <div className="app">
        <MainRoute />
      </div>
    </div>
  );
}

export default App;
