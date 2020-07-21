import React, { useState } from "react";
import Link from "next/link";
import DropBox from "./DropBox";

const navigation = (props) => {
  const { title, list } = props.target;

  const [dropBoxState, setDropBoxState] = useState(false);

  const toggleDropBox = () => {
    setDropBoxState(!dropBoxState);
  };
  return (
    <li onMouseEnter={toggleDropBox} onMouseLeave={toggleDropBox}>
      <Link href={"/products"}>
        <a>{title}</a>
      </Link>
      <DropBox list={list} show={dropBoxState} />

      <style jsx>{`
        li {
          padding: 10px 30px 20px 30px;
          // cursor: pointer;
          // background-image: url("/images/download.svg");
          background-position: right 10px center;
          background-repeat: no-repeat;
          background-size: 10px;
        }
        li:hover a {
          border-bottom: 2px solid black;
        }
        a {
          text-decoration: none;
          color: #18192b;
          font-weight: bold;
        }
      `}</style>
    </li>
  );
};

export default navigation;
