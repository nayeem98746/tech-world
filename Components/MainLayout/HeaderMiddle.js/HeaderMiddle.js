import React from "react";

import mainLayout from "../mainLayout.module.css";
import headerMiddle from "./HeaderMiddle.module.css";
import SearchNav from "./SearchNav";

import { headerMiddleData } from "../../../DataSetStatic/common/navData";

function HeaderMiddle() {
  // const {headerMiddleData} = headerMiddleData;

  return (
    <div
      className={`adjustMargin verticalCenterEL ${headerMiddle.headerMiddle_main}`}
    >
      <div className={headerMiddle.headerMiddle_imgicon}>
        <h2> TECH-WORLD</h2>
      </div>

      <div>
        <SearchNav></SearchNav>
      </div>
      <div>
        <div className={`centerEL ${headerMiddle.headerMiddle_liveChat}`}>
          <img src="/iconImg/phone-96.png" alt="" />
          <div>
            <h4>{headerMiddleData.contact.title}</h4>
            <h3>{headerMiddleData.contact.phone}</h3>
          </div>
        </div>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src={headerMiddleData.buttons[0].icon} alt="" />
        <h4>{headerMiddleData.buttons[0].title}</h4>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src={headerMiddleData.buttons[1].icon} alt="" />
        <h4>{headerMiddleData.buttons[1].title}</h4>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src={headerMiddleData.buttons[2].icon} alt="" />

        <h4>{headerMiddleData.buttons[2].title}</h4>
      </div>
    </div>
  );
}

export default HeaderMiddle;
