import React from "react";
import ProductArticle from "./productArticle";

const productsCard = (props) => {
  const { title, products } = props.productsList;
  return (
    <div className="view-card">
      <h2 className={props.type === "large" ? "centerTitle" : null}>{title}</h2>
      <div className="products-wrapper">
        {products.map((product, index) => (
          <ProductArticle
            key={index}
            product={product}
            flexBasis={props.flexBasis}
            shadow={props.shadow}
            type={props.type}
          />
        ))}
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 20px;
          font-weight: bolder;
          font-size: 30px;
        }
        .view-card {
          width: 100%;
          padding: 0 3%;
          margin: 50px auto 0px auto;
        }

        .products-wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .centerTitle {
          text-align: center;
          margin-bottom: 0px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default productsCard;
