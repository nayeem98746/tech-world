import React, { useState } from "react";
import { useSelector } from "react-redux";
import mainLayoutNav from "../mainLayout.module.css";
import NavLink from "next/link";
import { productStaticCategory } from "../../../DataSetStatic/common/productCategories";
import HeadNavSubCategory from "./HeadNavSubCategory";

function NavBottomCategory() {
  const [selectedCtg, setSelectedCtg] = useState({});
  // const [subCtgHover,setSubCtgHover] = useState("")
  // const mainCategory = useSelector(({Home}) => Home.categories);
  // console.log(mainCategory);

  const product_catrgory = productStaticCategory;

  return (
    <div className={mainLayoutNav.headerBTM_ct_wrapper}>
      <div className="centerEL">
        <div
          className={`${mainLayoutNav.headerBTM_ctg} ${mainLayoutNav.category_spacing}`}
        >
          {/* {getSVGicons(icons.menuIcon,20,20)} */}
          BROWSE CATEGORIES
        </div>
      </div>

      <div className={mainLayoutNav.headerBTM_main_ctg}>
        <div>
          {product_catrgory?.length &&
            product_catrgory?.slice(0, 10).map((mainCtg, idx) => {
              // console.log(mainCtg);
              return (
                <div
                  className={`${mainLayoutNav.headerBTM_main_ctg_wrapper}`}
                  key={mainCtg.category}
                  style={{ position: "relative" }}
                >
                  <div>
                    <NavLink
                      href={{ pathname: `/category/${mainCtg.category}` }}
                    >
                      <div className={mainLayoutNav.category_spacing}>
                        {mainCtg.category} {">"}
                      </div>
                    </NavLink>
                  </div>
                  <div className={mainLayoutNav.sub_ctg_wrap}>
                    <div className={`${mainLayoutNav[`sub_ctg_${idx}`]}`}>
                      <HeadNavSubCategory
                        sub_category={mainCtg.sub_category}
                        mainCategory={mainCtg.category}
                        separator={mainCtg.separator}
                      ></HeadNavSubCategory>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default NavBottomCategory;
