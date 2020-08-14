import React from "react";

import classes from "./Product.module.css";
import Button from "../../../../UI/Button/Button";

import { BASE_URL } from "../../../../../lib/requests";

import useProductActions from "../../../../../hooks/store/actions/product";

const product = ({ product, showUpdateModal }) => {

  const { sendDeleteRequest } = useProductActions();

  const onDeleteProductHandler = (productId) => {
    console.log(productId);
    sendDeleteRequest(productId);
  }

  return (
    <tr className={classes.Product}>
      <td>
        <img src={BASE_URL + product.image_urls[Math.floor( Math.random() * product.image_urls.length)]} />
      </td>
      <td>{product.product_name}</td>
      <td>${product.price}</td>
      <td>{product.colors.join(", ")}</td>
      <td>{product.sizes.join(", ")}</td>
      <td>{product.category}</td>
      <td>{product.brand}</td>
      <td>{product.quantity}</td>
      <td className={classes.Action}>
        <Button clicked={showUpdateModal}>Update</Button>
        <button className={classes.Delete} onClick={()=>onDeleteProductHandler(product._id)}>delete</button>
      </td>
    </tr>
  );
};

export default product;
