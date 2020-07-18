import React, { useState } from "react";
import Link from "next/link";
import Spacer from "../Spacer";
import Navigation from "./Navigation";
import Backdrop from "../Backdrop";
import Account from "../../container/Account";
import { useStore } from "../../hooks/store/store";

const navigations = () => {
  const [showAccount, setShowAccount] = useState(false);

  const state = useStore()[0];
  const { isAuth, data } = state.auth;

  const loginStatus = isAuth ? (
    <span> {data.fullName.split(" ")[0]} </span>
  ) : (
    <span>Sign in / Register</span>
  );

  const navs = [
    //Men Navigation list
    {
      title: "Men",
      list: [
        "Sandals",
        "Sneakers",
        "Loafers",
        "Boat Shoes",
        "Oxfords",
        "Boots & Chukkas",
        "Slip-Ons",
        "Slippers",
        "Run Shop",
        "Spring Trend",
        "Outdoor",
        "Walking",
        "Athletic",
        "Food Health & Wellness",
        "Casual",
        "Dress/Evening",
      ],
    },
    //Women Navigation list
    {
      title: "Women",
      list: [
        "Sandals",
        "Sneakers",
        "Flats",
        "Mules",
        "Heals & Pumps",
        "Boots & Booties",
        "Clogs",
        "Slippers",
        "Comfort Shop",
        "Run Shop",
        "Spring Trend",
        "Outdoor",
        "Walking",
        "Athletic",
        "Food Health & Wellness",
        "Casual",
      ],
    },
    //Kids Navigation list
    {
      title: "Kids",
      list: [
        "Sandals",
        "Swimwear",
        "Sneaker & Athletic Shoes",
        "Dresses",
        "Flats",
        "Jumpsuits & Rompers",
        "Shirts & Tops",
        "Shorts",
        "Sleepwear",
        "Slippers",
        "Sneaker & Athletic Shoes",
        "Swimwear",
        "Sandals",
        "Shirts & Tops",
        "Boat Shoes",
      ],
    },

    //Men Navigation list
    {
      title: "Brands",
      list: [...Array(26)].map((_, i) => String.fromCharCode(i + 65)),
    },
  ];

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return (
    <div className="nav-wrapper">
      <ul>
        {navs.map((nav, index) => (
          <Navigation key={index} target={nav} />
        ))}
        {/* <Spacer />
        <li onClick={showAccountHandler} id="accountBtn">
          {loginStatus}
        </li> */}
      </ul>
      <Backdrop show={showAccount} clicked={showAccountHandler} />
      <Account show={showAccount} />
      <style jsx>{`
        .nav-wrapper {
          // width: 100%;
          // background-color: #eee;
          height: 55px;
          display: flex;
          align-items: center;
         
        }

        .nav-wrapper ul {
          width: 100%;
          max-width: 1200px;
          margin: 0px auto;
          display: flex;
        }
       
        .nav-wrapper ul li:last-child {
          padding-right: 0px;
        }

        li {
          padding: 30px 30px;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: #035d59;
        },

      `}</style>
      <style jsx global>{`
        .nav-wrapper ul li:first-child {
          padding-left: 0px;
        }

        .hidden {
          display: none;
        }

        .visuallyhidden {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default navigations;
