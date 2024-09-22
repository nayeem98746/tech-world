import React from "react";
import Footer from "./Footer/Footer";
import SubTopNav from "./SubTopNav/SubTopNav";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle.js/HeaderMiddle";
import HeaderButtom from "./HeaderButtom/HeaderButtom";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <SubTopNav></SubTopNav>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>
        {/* <HeaderButtom></HeaderButtom> */}
      </header>
      <main>{children}</main>
       
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
