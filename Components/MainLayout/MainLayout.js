import React from "react";
import Footer from "./Footer/Footer";
import SubTopNav from "./SubTopNav/SubTopNav";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle.js/HeaderMiddle";
import HeaderButtom from "./HeaderButtom/HeaderButtom";

const MainLayout = ({ childen }) => {
  return (
    <div>
      <header>
        <SubTopNav></SubTopNav>
        <HeaderMiddle></HeaderMiddle>
        <HeaderButtom></HeaderButtom>
      </header>
      <main>{childen}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
