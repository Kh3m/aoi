import React, { useState } from "react";
import Link from "next/link";
import Backdrop from "../Backdrop";
import Account from "../../container/Account";
import { useStore } from "../../hooks/store/store";

const headTop = () => {
  const [showAccount, setShowAccount] = useState(false);
  const state = useStore()[0];
  const { isAuth, data } = state.auth;

  const loginStatus = isAuth ? (
    <span> {data.fullName.split(" ")[0]} </span>
  ) : (
    <span>Sign in / Register</span>
  );
  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return (
    <div className="header-top">
      <ul className="links">
        <li onClick={showAccountHandler}>
          My Account <img src="/images/user.svg" />
        </li>
        <li>
          <Link href="/checkout">
            <a>
              My Shopping Bag (0) <img src="/images/cart.svg" />
            </a>
          </Link>
        </li>
      </ul>
      <Backdrop show={showAccount} clicked={showAccountHandler} />
      <Account show={showAccount} />

      <style jsx>{`
        .header-top {
          width: 100%;
          height: 40px;
          padding: 0px 3%;
          background-color: #24272b;
          color: white;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 14px;
        }

        .links {
          display: flex;
        }

        .links li {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0px 5px;
        }
        .links li a {
          color: white;
          display: block;
        }
        .links li img {
          width: 14px;
        }
      `}</style>
    </div>
  );
};
export default headTop;
