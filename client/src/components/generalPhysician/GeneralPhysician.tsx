import React, { useCallback } from "react";
import { Col, Row, Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import Doctors from "../doctors/Doctors";
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
  { price: 202 },
  { price: 440 },
];
const GeneralPhysician = () => {
  const handleRange = (e: number) => {
    console.log(e);

    const res = price.filter((price) => price.price === e);
    return res;
  };
  const res = useCallback(handleRange, []);
  console.log(res(0));
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
