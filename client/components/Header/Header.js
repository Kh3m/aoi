import React from "react";
import Layout from "../Layout";
import HeadTop from "./HeadTop";
import HeadBottom from "./HeadBottom";
import Navigations from "../Navigations/Navigations";

const header = () => {
  return (
    <Layout>
      <div className="header">
        <HeadTop />
        <HeadBottom />
        {/* <Navigations /> */}
        <style jsx>{`
          .header {
            width: 100%;
            background-color: #fff;
            position: fixed;
            z-index: 90;
            left: 0;
            top: 0;
            border-bottom: 1px solid #eeeeef;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default header;
