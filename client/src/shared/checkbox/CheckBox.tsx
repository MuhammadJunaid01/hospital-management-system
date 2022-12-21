import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ceckboxData } from "../../assets/data";
type NameType = { name: string };
interface CheckBoxType {
  checked: boolean;
  arr: NameType[];
}
const CheckBox = ({ checked, arr }: CheckBoxType) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleSelect = (name: any) => {
    console.log(name);
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
