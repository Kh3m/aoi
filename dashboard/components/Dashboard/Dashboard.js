import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import ToolBar from "./ToolBar/ToolBar";
import SideBar from "./SideBar/SideBar";
import Contents from "./Contents/Contents";

const dashoard = () => {
  const [contentState, setContentState] = useState(null);

  const changeContentHanlder = (type) => {
    setContentState(type);
  };
  return (
    <div className={classes.dashboard}>
      <ToolBar />
      <SideBar clicked={changeContentHanlder} />
      <Contents type={contentState} />
    </div>
  );
};

export default dashoard;
