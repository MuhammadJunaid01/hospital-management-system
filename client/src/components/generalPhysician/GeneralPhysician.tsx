import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import Doctors from "../doctors/Doctors";
import CheckBox from "../../shared/checkbox/CheckBox";
import { ceckboxData } from "../../assets/data";
import { PriceInterface } from "../../interfaces";
const marks: SliderMarks = {
  0: {
    style: {
      color: "white",
    },
    label: <strong>00</strong>,
  },
  300: {
    style: {
      color: "white",
    },
    label: <strong>300</strong>,
  },
  500: {
    style: {
      color: "white",
    },
    label: <strong>500</strong>,
  },
  700: {
    style: {
      color: "white",
    },
    label: <strong>700</strong>,
  },
  850: {
    style: {
      color: "white",
    },
    label: <strong>850</strong>,
  },
  1000: {
    style: {
      color: "white",
    },
    label: <strong>1000</strong>,
  },
};

const price = [
  { price: 202, name: "o" },
  { price: 440, name: "l" },
];
const GeneralPhysician = () => {
  const [range, setRange] = useState(0);
  const [pr, setPr] = useState<PriceInterface["arr"]>([]);
  const [res, setRes] = useState();
  const handleRange = (e: number) => {
    setRange(e);
  };
  useEffect(() => {
    setPr(price);
  }, [pr]);
  console.log(pr);
  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={7}>
          <div style={{ marginRight: "20px" }}>
            <p
              style={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              Consultation Fee
            </p>
            <Slider
              min={0}
              trackStyle={{ backgroundColor: "white" }}
              handleStyle={{}}
              marks={marks}
              max={1000}
              defaultValue={500}
              onChange={(e) => handleRange(e)}
            />
            <CheckBox arr={ceckboxData} checked={false} />
            <p
              style={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "17px",
                margin: "0",
                marginTop: "11px",
              }}
            >
              Sort By
            </p>
          </div>
        </Col>
        <Col sm={24} md={17}>
          <Doctors />
        </Col>
      </Row>
    </div>
  );
};

export default GeneralPhysician;
