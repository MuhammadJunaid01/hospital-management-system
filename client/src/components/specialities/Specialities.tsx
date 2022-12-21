import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import i18next from "i18next";
import { Tstore } from "../../redux/store";
import { Col, Row } from "antd";
interface facultyType {
  img: string;
  info: string;
  name: string;
}
const Specialities = () => {
  const navigate = useNavigate();
  const { BG, selectLang } = useSelector((state: Tstore) => state.toggleBG);
  const { t, i18n } = useTranslation();
  const [facility, setFaculty] = useState<any | null>([]);
  useEffect(() => {
    const res = i18next.t("faculty", { returnObjects: true });
    setFaculty(res);
    console.log(res);
  }, [selectLang]);

  return (
    <div style={{ marginTop: "60px" }}>
      <h1
        style={{
          fontFamily: "Poppins Bold",
          fontWeight: "600",
          marginBottom: "40px",
        }}
      >
        {t("speciality")}
      </h1>
      <Row justify="center" gutter={[16, 16]}>
        {facility?.map((data: any, index: number) => {
          return (
            <Col sm={24} md={12} key={index}>
              <div
                onClick={() =>
                  index === 0
                    ? navigate("/specialities/general-physician")
                    : null
                }
                style={{
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  padding: "7px 20px",
                  borderRadius: "4px",
                }}
                className="faculty_card"
              >
                <Row justify="center" gutter={[16, 16]}>
                  <Col sm={24} md={7}>
                    <img
                      style={{ width: "96px ", height: "96px" }}
                      src={data.img}
                      alt="faculty-image"
                    />
                  </Col>
                  <Col sm={24} md={17}>
                    <h1
                      style={
                        BG
                          ? {
                              fontFamily: "Poppins Bold",
                              fontWeight: "500",
                              fontSize: "24px",
                            }
                          : {
                              fontFamily: "Poppins Bold",
                              fontWeight: "500",
                              fontSize: "24px",
                              color: "#111827",
                            }
                      }
                    >
                      {data.name}
                    </h1>
                    <p
                      style={
                        BG
                          ? {
                              fontFamily: "Poppins Regular",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "20px",
                            }
                          : {}
                      }
                    >
                      {data.info}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Specialities;
