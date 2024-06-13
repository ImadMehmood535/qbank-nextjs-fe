import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
 
const RootLayout = () => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-[50]">

      <Header />
      </div>
      <MobileHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
