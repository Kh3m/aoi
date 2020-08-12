import React from "react";

import classes from "./Product.module.css";
import Button from "../../../../UI/Button/Button";

const product = (props) => {
  return (
    <tr className={classes.Product}>
      <td>
        <img src={props.product.image} />
      </td>
      <td>{props.product.name}</td>
      <td>${props.product.price}</td>
      <td>{props.product.colors.join(", ")}</td>
      <td>{props.product.sizes.join(", ")}</td>
      <td>{props.product.category}</td>
      <td>{props.product.brand}</td>
      <td>{props.product.quantity}</td>
      <td className={classes.Action}>
        <Button clicked={props.showUpdateModal}>Update</Button>
        <button className={classes.Delete}>delete</button>
      </td>
    </tr>
  );
};

export default product;
