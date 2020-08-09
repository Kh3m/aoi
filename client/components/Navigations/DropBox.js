import React from "react";
import Link from "next/link";

const dropBox = (props) => {
  const lists = [...props.list];
  // Checking to see if the list has morethan 1 colums
  let columnCategory = false;
  if (lists.length === 1) columnCategory = true;

  let classList = ["drop-box"];

  if (props.show) {
    classList.push("show");
  } else {
    classList.push("hidden");
  }
  return (
    <div className={classList.join(" ")}>
      <ul className="nav-wrapper">
        {lists.map((list, index) => (
          <li key={index}>
            <Link href={"/products"}>
              <a>{list}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .drop-box {
          width: 100%;
          padding: 30px;
          background-color: #eee;
          position: absolute;
          top: 115px;
          left: 0px;
          z-index: 5;
          background-color: #fff;
          // box-shadow: 0px 0px 5px #575757;
        }
        .show {
          display: flex;
          height: 300px;
          justify-content: center;
        }

        .hidden {
          display: none;
        }

        .nav-wrapper {
          display: flex;
          min-width: 50%;
          flex-direction: column;
          flex-wrap: wrap;
          height: 100%;
          padding: 2px;
        }
        .nav-wrapper li {
          padding: 5px 20px;
        }
      `}</style>
    </div>
  );
};

export default dropBox;
