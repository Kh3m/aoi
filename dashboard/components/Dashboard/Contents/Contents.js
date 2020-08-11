import React from "react";

import classes from "./Contents.module.css";
import Overviews from "../DashCards/Overviews/Overviews";
import Products from "./Products/Products";
import CarouselForm from "./CarouselForm/CarouselForm";
import DashboardSummary from "./DashboardSummary/DashboardSummary";

const contents = (props) => {
  let content = null;
  switch (props.type) {
    case "product":
      content = <Products />;
      break;

    case "updateProduct":
      content = <ProductForm title="Update Product" update={true} />;
      break;

    case "carousel":
      content = <CarouselForm />;
      break;

    default:
      content = <DashboardSummary />;
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
