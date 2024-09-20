import React from 'react'
import NavLink from 'next/link';
import mainLayoutNav from "../mainLayout.module.css";

function HeadNavSubCategory({sub_category,mainCategory,separator}) {
  return (
    <div className={mainLayoutNav.navBTM_sub_ctg}>
    {
        separator.slice(0,2).map(separateCtg => <div key={separateCtg}>
            <h4 className={mainLayoutNav.navBTM_gender}>{separateCtg}</h4>
            <div style={{display:"flex",flexDirection:"column"}}>
                {
                    // sub_category.map(ctg => <p className={mainLayoutST.navBTM_sub_ctg_btn} key={ctg}>{ctg}</p>)
                    //  const products = await ProductsModel.find({["category.sub_category"]:"expensive"}).select("category").lean()
                    sub_category.map(ctg => <NavLink href={{pathname:'shop',query:{category:mainCategory,separator:separateCtg,sub_category:ctg}}} passHref={true} shallow={false}  key={ctg}><div className={mainLayoutNav.navBTM_sub_ctg_btn}>{ctg}</div></NavLink>)
                }
            </div>
        </div>)
    }
    
    <div className={mainLayoutNav.navBTM_subCtg_discount}>
        <h4>Get up to 20% commission</h4>
        <h2>Become a Seller</h2>
        <h5>SIGN UP NOW</h5>
    </div>
</div>
  )
}

export default HeadNavSubCategory