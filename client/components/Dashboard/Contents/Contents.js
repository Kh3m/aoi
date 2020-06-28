import React from "react";

import classes from "./Contents.module.css";
import Overviews from "../DashCards/Overviews/Overviews";
import ProductForm from "./ProductForm/ProductForm";

const contents = (props) => {
  let content = null;
  switch (props.type) {
    case "addProduct":
      content = <ProductForm title="Add Product" />;
      break;

    case "updateProduct":
      content = <ProductForm title="Update Product" />;
      break;

    default:
      content = null;
  }
  return (
    <div className={classes.Contents}>
      <div className={classes.SideBarReplace}>
        <footer>Copyright &copy; austinExpress.com</footer>
      </div>
      <div className={classes.MainContents}>
        {/* <Overviews /> */}

        {content}
      </div>
    </div>
  );
};

export default contents;
