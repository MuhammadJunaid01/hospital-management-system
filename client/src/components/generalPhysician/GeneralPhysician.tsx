import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import Doctors from "../doctors/Doctors";
import CheckBox from "../../shared/checkbox/CheckBox";
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
  { price: 202 },
  { price: 440 },
  { price: 562 },
  { price: 640 },
  { price: 102 },
  { price: 940 },
  { price: 590 },
  { price: 340 },
  { price: 480 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 202 },
  { price: 440 },
  { price: 500 },
  { price: 1000 },
];
const GeneralPhysician = () => {
  const [range, setRange] = useState(0);

  const [res, setRes] = useState();
  const handleRange = (e: number) => {
    setRange(e);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={7}>
          <div style={{ marginRight: "20px" }}>
            <Slider
              min={0}
              trackStyle={{ backgroundColor: "white" }}
              handleStyle={{}}
              marks={marks}
              max={1000}
              defaultValue={500}
              onChange={(e) => handleRange(e)}
            />
            <CheckBox />
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
