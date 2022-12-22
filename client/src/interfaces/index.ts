import React, { Dispatch, SetStateAction } from "react";

import { NameType, PriceType } from "./../types/index";
export interface PriceInterface {
  arr: PriceType[];
}

export interface CheckBoxType {
  checked: boolean;

  arr?: NameType[];
}
