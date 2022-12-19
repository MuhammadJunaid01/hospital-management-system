import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18nenxt from "i18next";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
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
  const dispatch = useDispatch();
  const { BG } = useSelector((state: Tstore) => state.toggleBG);
  const [menu, setMenu] = useState<any | null>(null);
  const { t, i18n } = useTranslation();
  const [selectLng, setSelectLng] = useState("");
  const [isSelect, setIsSelect] = useState(true);

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
        <div className="logo">
          <img src={BG ? Logo : Logilight} alt="" />
        </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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

          <Space style={{ marginLeft: "7px" }} direction="vertical">
            <Switch
              checkedChildren="Dark"
              unCheckedChildren="Light"
              defaultChecked
              onClick={() => dispatch(toggleBg())}
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
