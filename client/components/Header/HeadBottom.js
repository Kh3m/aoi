import React from "react";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import Navigations from "../Navigations/Navigations";

const headBottom = () => {
  return (
    <div className="header-bottom">
      <Logo />
      <Navigations />
      <SearchBox />
      {/* 
      <Cart /> */}

      <style jsx>{`
        .header-bottom {
          width: 100%;
          max-width: 1400px;
          margin: 0px auto;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default headBottom;
