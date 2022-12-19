import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/header.css";
import i18next from "i18next";
import { Tstore } from "../../redux/store";
import { useSelector } from "react-redux";
import { ArrowRightOutlined } from "@ant-design/icons";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { BG, selectLang } = useSelector((state: Tstore) => state.toggleBG);
  const [facility, setFacility] = useState<any | null>(null);
  useEffect(() => {
    i18n.changeLanguage(selectLang ? "en" : "bn");
    const result = i18next.t("facility", { returnObjects: true });
    setFacility(result);
    console.log(result);
  }, [selectLang]);

  return (
    <div className="header_container">
      <div className={BG ? "" : "header_bg_img"}>
        <div style={{ textAlign: "center", marginTop: "150px" }}>
          <h1
            style={
              BG
                ? { fontSize: "60px", fontFamily: "Poppins Bold" }
                : {
                    fontSize: "60px",
                    fontFamily: "Poppins Bold",
                    color: "#212529",
                  }
            }
          >
            {t("heading")}
          </h1>
          <p
            style={{
              fontSize: "35px",
              fontWeight: "400px",
              fontFamily: "AvertaDemoRegular",
            }}
          >
            {t("heading-info")}
          </p>
          <div className="facility_card_container">
            {facility?.map((data: any, index: number) => {
              return (
                <div
                  style={
                    BG
                      ? { border: "1px solid white" }
                      : { border: "1px solid #7DACF9" }
                  }
                  className="facility_card"
                  key={index}
                >
                  <img
                    style={{ height: "50px" }}
                    src={data.img}
                    alt="nhdsssssssssssssssssss"
                  />
                  <p style={{ fontSize: "18px", margin: "2px 0px" }}>
                    {data.name}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      margin: "0px 0px",
                      marginTop: "9px",
                    }}
                  >
                    {data.info}
                  </p>
                  <p>
                    <ArrowRightOutlined />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
