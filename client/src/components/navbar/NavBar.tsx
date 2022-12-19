import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18nenxt from "i18next";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import "../../assets/styles/navbar.css";
import { useSelector } from "react-redux";
import { Tstore } from "../../redux/store";
type NavbarPropType = {
  lang: Boolean;
};
type MenuItemType = {
  name: String;
};
const NavBar = ({ lang }: NavbarPropType) => {
  const { BG } = useSelector((state: Tstore) => state.toggleBG);
  const [menu, setMenu] = useState<any | null>(null);
  const { t, i18n, includes } = useTranslation();
  const res = t("menu");

  useEffect(() => {
    const result = i18nenxt.t("menu", { returnObjects: true });
    console.log(result);
    setMenu(result);
  }, [lang]);

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
        <Space direction="vertical">
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            defaultChecked
          />
        </Space>
      </div>
    </div>
  );
};

export default NavBar;
