import React from "react";

import classes from "./productForm.module.css";

const productForm = (props) => {
  let search = null;
  if (props.update) {
    search = (
      <div>
        <form className={classes.search}>
          <input type="text" placeholder="Enter Product Code" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
  return (
    <div className={classes.FormsWrapper}>
      <div className={classes.Form}>
        <h2>{props.title}</h2>
        {search}
        <form>
          {/* {props.type == "Update Product" ? <} */}
          <div>
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder="Product Code" />
          </div>
          <div>
            <select name="product-category">
              <option value="">---Select Product Category</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="kids">Kids</option>
            </select>

            <select name="product-sub-category">
              <option value="">---Select Product Sub-Category</option>
              <option value="shoes">Shoes</option>
              <option value="activities">Activities</option>
              <option value="clothes">CLothes & More</option>
            </select>
          </div>
          <div>
            <select name="product-type">
              <option value="">---Select Product Type</option>
              <option value="sandals">Sandals</option>
              <option value="sneakers">Sneakers</option>
              <option value="loafers">Loafers</option>
              <option value="slippers">Slippers</option>
              <option value="hand bags">Hand Bags</option>
              <option value="etc">etc...</option>
            </select>

            <select name="product-brand">
              <option value="">---Select Product Brand</option>
              <option value="nike">Nike</option>
              <option value="addidas">Addidas</option>
              <option value="clarks">Clarks</option>
              <option value="etc">etc...</option>
            </select>
          </div>
          <div>
            <input type="number" placeholder="Price" />
            <input type="number" placeholder="Quantity" />
            <input type="text" placeholder="color" />
          </div>

          <textarea placeholder="Product description"></textarea>
          <div>
            <input type="file" />
            <input type="file" />
          </div>
          <input type="submit" value={props.title} />
        </form>
      </div>
    </div>
  );
};

export default productForm;
