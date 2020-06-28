import React from "react";
import classes from "./SideBar.module.css";
import Logo from "../../Logo";
const links = [
  {
    title: "Dashboard",
    icon: "/images/home.png",
    type: "dashboard",
  },

  {
    title: "Add Product",
    icon: "/images/plus.png",
    type: "addProduct",
  },

  {
    title: "Update Product",
    icon: "/images/home.png",
    type: "updateProduct",
  },

  {
    title: "Edit Carousel",
    icon: "/images/edit.png",
    type: "editCarousel",
  },
];
const sideBar = (props) => {
  return (
    <div className={classes.sideBar}>
      <nav>
        <ul className={classes.sideNav}>
          {links.map((nav, index) => (
            <li key={index} onClick={() => props.clicked(nav.type)}>
              <img src={nav.icon} />
              <a href="#">{nav.title}</a>
            </li>
          ))}
          <li>
            <img src="/images/power.png" alt="icon" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default sideBar;
