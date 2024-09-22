import React, { useState } from "react";
import mainLayout from "../mainLayout.module.css";
import NavLink from "next/link";
import { mainNavItems } from "../../../DataSetStatic/common/navData";
import { useRouter } from "next/router";
import Link from "next/link";
import NavBottomCategory from "./NavBottomCategory";

const HeaderBottom = () => {
  const [showButton, setShowButton] = useState(true);
    const {deal ,  track} = mainNavItems
    const router = useRouter();

  return (
    <div className={`centerEL baseContainer ${mainLayout.headerBTM_ct_parent_wrapper}`}>
 <NavBottomCategory></NavBottomCategory>

    <div className={mainLayout.headerBottomNav_links}>
    <label
        style={{ display: "none" }}
        htmlFor=""
        onClick={() => setShowButton(!showButton)}
      >
        menu
      </label>

      <nav>
      {showButton ? (
        <ul className={mainLayout.headerBottomNav_links_list}>
          {mainNavItems.mainnavLinks.map((link) => (
            <li key={link.path}>
              <NavLink href={link.path}>
                <div
                href={link.path}
                  className={
                    router.pathname === link.path
                      ? mainLayout.active_link
                      : ""
                  }
                >
                  {link?.title}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      </nav>




    </div>


    </div>
  );
};

export default HeaderBottom;
