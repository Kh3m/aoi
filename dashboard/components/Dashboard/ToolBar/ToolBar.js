import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../Logo";
import Spacer from "../../Spacer";

const toolBar = () => {
  return (
    <header className={classes.toolBar}>
      <div className={classes.logoWrapper}>
        <Logo color="white" />
      </div>
      <Spacer />
      <nav className={classes.Nav}>
        <ul>
          <li>
            <a href="#">Goto Public Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default toolBar;
