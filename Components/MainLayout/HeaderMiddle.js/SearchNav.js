import React from "react";
import mainmodule from "../mainLayout.module.css"

function SearchNav() {
  return (
    <div className={`centerEL ${mainmodule.searchNab_main}`}>
      <div className={` ${mainmodule.searchNab_catagories}`}>
        <select name="" id="">
          <option value="" selected disabled >All Categories</option>
          <option value="">Allsdfsdf </option>
          <option value="">sdfsdfsdf</option>
        </select>
      </div>

      <div className={`centerEL ${mainmodule.searchNab_serchInput}`}>
        <input type="text" 
        placeholder="Search In..."
        />

        <img src="/iconImg/search-64.png" alt="" />
      </div>
    </div>
  );
}

export default SearchNav;
