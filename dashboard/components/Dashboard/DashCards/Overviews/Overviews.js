import React from "react";

import classes from "./Overviews.module.css";
import Overview from "./Overview/Overview";
import overview from "./Overview/Overview";

const overviews = (props) => {
  const overviews = [
    {
      title: "SALES",
      value: "$26,224",
      caption: "Total sales for this month",
    },

    {
      title: "USERS",
      value: "600 Users",
      caption: "Total registered users",
    },

    {
      title: "PRODUCTS",
      value: "1200 Products",
      caption: "Total products available",
    },
  ];
  return (
    <div className={classes.Overviews}>
      {overviews.map((overview, index) => (
        <Overview key={index} properties={overview} />
      ))}
    </div>
  );
};

export default overviews;
