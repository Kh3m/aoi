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
    title: "Product",
    icon: "/images/plus.png",
    type: "product",
  },

  {
    title: "Carousel",
    // icon: "/images/edit.png",
    type: "carousel",
  },

  {
    title: "Popular Categories",
    icon: "/images/edit.png",
    type: "popularCategories",
  },
  {
    title: "Footwear Favorites",
    icon: "/images/edit.png",
    type: "favorites",
  },
  {
    title: "Trending Brands",
    icon: "/images/edit.png",
    type: "trendingBrands",
  },
];
const sideBar = (props) => {
  return (
    <div className={classes.sideBar}>
      <nav>
        <ul className={classes.sideNav}>
          {links.map((nav, index) => (
            <li key={index} onClick={() => props.clicked(nav.type)}>
              {/* <img src={nav.icon} /> */}
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
