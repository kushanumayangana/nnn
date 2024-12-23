import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      < Footer />
    </div>
  );
};

export default Layout;
