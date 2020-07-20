import React from "react";
import Spacer from "../Spacer";
import CartProducDescription from "./CartProductDescription";

const cartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="product-image-wrapper">
        <img src={props.item.image} />
      </div>
      <div>
        <h5>{props.item.name}</h5>
        <h4>$ {props.item.price}</h4>
        <h5>{props.item.size}</h5>
        <input
          type="number"
          value={props.quantity}
          className="quantity"
          defaultValue={1}
        />
      </div>

      {/* <CartProducDescription description={props.item.description} /> */}
      <Spacer />

      <h4 className="product-price">delete</h4>

      <style jsx>{`
        .cart-item {
          width: 100%;
          display: flex;
          margin-bottom: 20px;
        }
        .product-image-wrapper {
          width: 100px;
          margin-right: 2%;
        }
        .product-image-wrapper img {
          width: 100%;
        }
        .product-price {
          font-style: italic;
        }
        .quantity {
          width: 60px;
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default cartItem;
