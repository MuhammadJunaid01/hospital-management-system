import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18nenxt from "i18next";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import "../../assets/styles/navbar.css";
import { useSelector } from "react-redux";
import { Tstore } from "../../redux/store";
import ENflag from "../../assets/img/united-states-flag.png";
import BNflag from "../../assets/img/bangladesh-flag.png";
type NavbarPropType = {
  lang: Boolean;
};

const NavBar = () => {
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
    console.log(result);
    setMenu(result);
  }, [isSelect]);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        {menu?.map((data: any, index: number) => {
          return (
            <div key={index}>
              <ul>
                <li>{data.name}</li>
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
          <div className="switch_lng">
            <button onClick={handleChangeLng} className="switch_lng_btn">
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
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
