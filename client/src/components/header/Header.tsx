import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/header.css";
import i18next from "i18next";
import { Tstore } from "../../redux/store";
import { useSelector } from "react-redux";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const Header = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const { BG, selectLang } = useSelector((state: Tstore) => state.toggleBG);
  const [facility, setFacility] = useState<any | null>(null);
  useEffect(() => {
    i18n.changeLanguage(selectLang ? "en" : "bn");
    const result = i18next.t("facility", { returnObjects: true });
    setFacility(result);
  }, [selectLang]);
  const handleNavigate = (index: number) => {
    console.log(index);
    if (index === 0) {
      return navigate("specialities");
    }
  };
  return (
    <div className="header_container">
      <div className={BG ? "" : "header_bg_img"}>
        <div className="header_content">
          <h1
            className="header_content_text"
            style={
              BG
                ? { fontFamily: "Poppins Bold" }
                : {
                    fontFamily: "Poppins Bold",
                    color: "#212529",
                  }
            }
          >
            {t("heading")}
          </h1>
          <p
            className="header_text_info"
            style={{
              fontWeight: "400px",
              fontFamily: "AvertaDemoRegular",
            }}
          >
            {t("heading-info")}
          </p>

          <div className="facility_card_container">
            <Row gutter={[16, 16]}>
              {facility?.map((data: any, index: number) => {
                return (
                  <Col xs={24} md={6} key={index}>
                    <div
                      onClick={() => handleNavigate(index)}
                      style={
                        BG
                          ? { border: "1px solid white" }
                          : { border: "1px solid #7DACF9" }
                      }
                      className="facility_card"
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
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
