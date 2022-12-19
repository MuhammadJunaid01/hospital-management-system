import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18nenxt from "i18next";
type NavbarPropType = {
  lang: Boolean;
};
const NavBar = ({ lang }: NavbarPropType) => {
  const { t, i18n, includes } = useTranslation();
  const res = t("menu");

  useEffect(() => {
    const result = i18nenxt.t("menu", { returnObjects: true });
    console.log(result);
  }, [lang]);
  return <div></div>;
};

export default NavBar;
