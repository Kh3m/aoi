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
            <input type="text" name="title" placeholder="Product Title" />
            <input type="number" name="price" placeholder="Product Price" />
          </div>
          <div>
            <select name="category">
              <option value="">---Select Category</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="kids">Kids</option>
            </select>

            <select name="sub-category">
              <option value="">---Select Product Sub-Category</option>
              <option value="shoes">Shoes</option>
              <option value="activities">Activities</option>
              <option value="clothes">CLothes & More</option>
            </select>
          </div>
          <div>
            <select name="brand">
              <option value="">---Select Product Brand</option>
              <option value="nike">Nike</option>
              <option value="addidas">Addidas</option>
              <option value="clarks">Clarks</option>
              <option value="etc">etc...</option>
            </select>

            <input type="number" name="quantity" placeholder="Quantity" />
          </div>
          <div>
            <input type="number" name="sizes" placeholder="Sizes" />
            <input type="text" name="colors" placeholder="Colors" />
          </div>

          <div>
            <input type="text" name="material" placeholder="Material" />
            <input type="text" name="feature" placeholder="Feature" />
          </div>

          <textarea placeholder="Product description"></textarea>
          <div>
            <input type="file" />
          </div>
          <input type="submit" value={props.title} />
        </form>
      </div>
    </div>
  );
};

export default productForm;
