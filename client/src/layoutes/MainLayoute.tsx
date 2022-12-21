import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../pages/home/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayoute = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoute;
