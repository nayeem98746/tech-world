import React from "react";
import navTopSt from "./SubTopNav.module.css";
import { navData } from "../../../DataSetStatic/common/navData";
import { useSelector } from "react-redux";
import Link from "next/link";

const SubTopNav = () => {
  const { wellcome_massage } = navData;
  //   const dispatch = useDispatch();

  return (
    <div className={navTopSt.header_topback}>
      <div className={navTopSt.header_main}>
        <div className={`centerFlex adjustMargin ${navTopSt.header_info}`}>
          <div>
            <p className={navTopSt.welcomeMessage}> {wellcome_massage} </p>
          </div>

          <div className={` centerFlex ${navTopSt.header_currence_main} `}>
            <div className={`  ${navTopSt.TopNav_select_main}`}>
              <select name="" id="">
                <option value="">$ USD</option>

                <option value="">€ EUR</option>
              </select>
            </div>
            <div className={navTopSt.TopNav_select_main}>
              <select name="" id="">
                <option value="">Language</option>
                <option value="">ENG</option>
                <option value="">SPA</option>
              </select>
            </div>
            <div className={` ${navTopSt.myaccount_main}`}>
              <Link href="#" className="centerEL">
                <img src="/iconImg/icons8-user-64.png" alt="" />{" "}
                <h4>{navData.account.title}</h4>
              </Link>
            </div>
            <div className={navTopSt.myaccount_main}>
              <Link href="#" className="centerEL">
                <img src="/iconImg/icons8-sign-in-96.png" alt="" />{" "}
                <h4>{navData.navLinks.login.title}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTopNav;
