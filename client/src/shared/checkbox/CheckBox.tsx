import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ceckboxData } from "../../assets/data";
import { CheckBoxType } from "../../interfaces";
import { useSearchParams } from "react-router-dom";
const CheckBox = ({ checked, arr }: CheckBoxType) => {
  const [current, setParams] = useSearchParams();
  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`checked = ${e.target.checked}`);
  };
  const handleSelect = (name: any) => {
    // console.log(name);
    setParams(name);
    console.log("current", current);
  };

  return (
    <div>
      {ceckboxData.map((data, index) => {
        return (
          <div
            onClick={() => handleSelect(data)}
            style={{ display: "block", marginBottom: "7px" }}
            key={index}
          >
            <Checkbox
              style={{
                color: "white",
                fontSize: "19px",
                fontFamily: "poppins",
              }}
              onChange={onChange}
            >
              {data.name}
            </Checkbox>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
