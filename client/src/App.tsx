import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Tstore } from "./redux/store";
import { toggleBg } from "./redux/reduicers/toggleBG";
import NavBar from "./components/navbar/NavBar";
function App() {
  const [en, setEn] = useState(true);
  const { BG } = useSelector((state: Tstore) => state.toggleBG);
  console.log("BG", BG);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang);
    if (lang == "en") {
      return setEn(true);
    }
    setEn(false);
  };
  return (
    <div className="App">
      <h1>{t("name")}</h1>
      <button onClick={() => changeLang("en")}>English</button>
      <button onClick={() => changeLang("bn")}>Bangla</button>
      <button onClick={() => dispatch(toggleBg(true))}>Light</button>
      <button onClick={() => dispatch(toggleBg(false))}>Dark</button>
      <NavBar lang={en} />
    </div>
  );
}

export default App;
