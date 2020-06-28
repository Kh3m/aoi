import React from "react";

import classes from "./Overview.module.css";

const overview = (props) => {
  return (
    <div className={classes.Overview}>
      <p>{props.properties.title}</p>
      <h3>{props.properties.value}</h3>
      <p>{props.properties.caption}</p>
    </div>
  );
};

export default overview;
