import React from "react";

import mainLayout from "../mainLayout.module.css";
import headerMiddle from "./HeaderMiddle.module.css";
import SearchNav from "./SearchNav";

function HeaderMiddle() {
  return (
    <div className={`adjustMargin verticalCenterEL ${headerMiddle.headerMiddle_main}`}>
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
            <h4>live chat or phone</h4>
            <h3>+8801825987467</h3>
          </div>
        </div>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src="/iconImg/wishlist-58.png" alt="" />
        <h4>Wishlist</h4>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src="/iconImg/scales-96.png" alt="" />
        <h4>Compare</h4>
      </div>
      <div className={`centerEL ${headerMiddle.headerMiddle_wishlist}`}>
        <img src="/iconImg/cart-64.png" alt="" />
      
        <h4>Cart</h4>
      </div>
    </div>
  );
}

export default HeaderMiddle;
