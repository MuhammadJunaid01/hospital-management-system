import React from "react";
import NavBar from "../components/navbar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayoute = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayoute;
