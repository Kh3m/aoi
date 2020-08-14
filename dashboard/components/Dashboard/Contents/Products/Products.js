import React, { useState, useEffect } from "react";

import classes from "./Products.module.css";
import Button from "../../../UI/Button/Button";
import Product from "./Product/Product";
import Modal from "../../../UI/Modal/Modal";
import ProductForm from "../ProductForm/ProductForm";
import useProductActions from "../../../../hooks/store/actions/product";

import {useStore} from "../../../../hooks/store/store";

const products = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [ selectProduct, setSelectProduct ] = useState({});
  const { product } = useStore()[0];
  const { sendFindRequest } = useProductActions();

  useEffect(() => {
    sendFindRequest({limit: 5, sortBy: "createdAt"});
  }, []);

  const modalCloseHanlder = () => {
    setShowModal(!showModal);
  };
  const showAddProductModal = () => {
    setModalContent("add");
    setShowModal(true);
  };
  const showUpdateProductModal = ( prod ) => {
    setSelectProduct({...prod});
    setModalContent("update");
    setShowModal(true);
  };

  let modal = null;
  switch (modalContent) {
    case "add":
      modal = (
        <Modal show={showModal} modalClosed={modalCloseHanlder}>
          <ProductForm title="Add Product" />
        </Modal>
      );
      break;
    case "update":
      modal = (
        <Modal show={showModal} modalClosed={modalCloseHanlder}>
          <ProductForm title="Update Product" selectProduct={selectProduct}/>
        </Modal>
      );
      break;
    default:
      null;
  }
  return (
    <React.Fragment>
      {modal}
      <div className={classes.Products}>
        <div className={classes.Top}>
          <h1>Manage Products</h1>
          <Button clicked={showAddProductModal}>Add Product</Button>
        </div>

        <table className={classes.Table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Colors</th>
              <th>Sizes</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.data.map((product, index) => (
              <Product
                product={product}
                key={index}
                showUpdateModal={() => showUpdateProductModal(product)}
                productId={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default products;
