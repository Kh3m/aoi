import React from "react";
import Carousel from "./UI/Carousel/Carousel";

const heroBox = () => {
  return (
    <div className="banner-box">
      <Carousel />

      <style jsx>{`
        .banner-box {
          width: 94%;
          margin: 20px auto;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default heroBox;
