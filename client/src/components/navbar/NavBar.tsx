import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18nenxt from "i18next";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Switch, Space } from "antd";
import "../../assets/styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Tstore } from "../../redux/store";
import ENflag from "../../assets/img/united-states-flag.png";
import BNflag from "../../assets/img/bangladesh-flag.png";
import { toggleBg, selectLang } from "../../redux/reduicers/toggleBG";
import Logo from "../../assets/img/logo.png";
import Logilight from "../../assets/img/logo-light.png";
type NavbarPropType = {
  lang: Boolean;
};

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { BG } = useSelector((state: Tstore) => state.toggleBG);
  const [menu, setMenu] = useState<any | null>(null);
  const { t, i18n } = useTranslation();
  const [selectLng, setSelectLng] = useState("");
  const [isSelect, setIsSelect] = useState(true);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleChangeLng = () => {
    setIsSelect((prev) => !prev);
  };
  useEffect(() => {
    i18n.changeLanguage(isSelect ? "en" : "bn");
    const result = i18nenxt.t("menu", { returnObjects: true });
    setMenu(result);
  }, [isSelect]);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className="logo"
        >
          <img src={BG ? Logo : Logilight} alt="" />
        </div>
        <div className={`${isCollapse ? "navbar_menu open" : "navbar_menu"}`}>
          {menu?.map((data: any, index: number) => {
            return (
              <div key={index}>
                <ul>
                  <li
                    style={
                      BG
                        ? {
                            fontSize: "17px",
                            fontWeight: "700",
                            margin: "0px 0px",
                            fontFamily: "Poppins",
                          }
                        : {
                            fontSize: "17px",
                            fontWeight: "700",
                            margin: "0px 0px",
                            color: "#212529",
                            fontFamily: "Poppins",
                          }
                    }
                  >
                    {data.name}
                  </li>
                </ul>
              </div>
            );
          })}
          <div className="navbar_btn_box">
            <div
              onClick={handleChangeLng}
              style={
                BG
                  ? { border: "1px solid white", cursor: "pointer" }
                  : { border: "1px solid #7DACF9", cursor: "pointer" }
              }
              className="switch_lng"
            >
              <button
                onClick={() => dispatch(selectLang())}
                style={BG ? {} : { color: "black" }}
                className="switch_lng_btn"
              >
                {isSelect ? "EN" : "BN"}
              </button>
              <img
                style={{ height: "15px", width: "15px", borderRadius: "50%" }}
                src={isSelect ? ENflag : BNflag}
                alt=""
              />
            </div>

            <Space className="navbar_switch" direction="vertical">
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                defaultChecked
                onClick={() => dispatch(toggleBg())}
              />
            </Space>
          </div>
        </div>

        <div
          onClick={() => setIsCollapse((prev) => !prev)}
          className="collaspe_navbar_icon"
        >
          <p>{isCollapse ? <CloseOutlined /> : <MenuOutlined />}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
