import React from "react";
import homeST from "./homeStyle.module.css";
import { FeaturedCategoriesStatic } from "../../DataSetStatic/common/Home_page/Data_home";

// import FeaturedCategoriesStatic from "react-icons/fa";

function FeaturedCategory() {
  const featuredCategory = FeaturedCategoriesStatic;
  return (
    <div className="centerEL ">
        <div>
      <div className={`centerEL ${homeST.header_title}`}>
        <div>
          <h2>Featured Category </h2>
          <h3>Select Your Category</h3>
        </div>
      </div>

      <div className={` ${homeST.featured_category}`}>
        {featuredCategory.map((categori) => (
          <div key={categori} className={homeST.featured_category_item}>
            <div className={homeST.featured_category_img}>
              <img src={categori.img} alt="fashion" />
            </div>
            <div className={homeST.featured_category_title}>
              <h3>{categori?.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FeaturedCategory;
