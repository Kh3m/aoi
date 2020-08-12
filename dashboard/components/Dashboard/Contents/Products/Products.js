import React, { useState } from "react";

import classes from "./Products.module.css";
import Button from "../../../UI/Button/Button";
import Product from "./Product/Product";
import Modal from "../../../UI/Modal/Modal";
import ProductForm from "../ProductForm/ProductForm";
import modal from "../../../UI/Modal/Modal";

// productData.name,
// productData.description,
// Number.parseFloat(productData.price),
// ["productData.image_urls"],
// Number.parseInt(productData.quantity),
// productData.category,
// productData.colors,
// productData.sizes,
// productData.brand

const productList = [
  {
    name: "Air Zoom Pegasus 37",
    price: 120.0,
    image: "/images/airzoom.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
    brand: "Addidas",
  },
  {
    name: "Libron Whitness",
    brand: "Nike",
    price: "57.33",
    image: "/images/running.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
  },
  {
    name: "Flex Experience Run 9",
    brand: "Nike",
    price: "65.00",
    image: "/images/flex.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
  },
  {
    name: "Cloudfeel Knit Slip-On Sneaker",
    brand: "Cole Haan",
    price: "100.00",
    image: "/images/cloudfeel.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
  },
  {
    name: "Revolution 5",
    brand: "Nike",
    price: "65.00",
    image: "/images/revolution.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
  },
  {
    name: "Cloudfeel Knit Slip-On Sneaker",
    brand: "Cole Haan",
    price: "100.00",
    image: "/images/cloudfeel.jpg",
    quantity: 10,
    category: "Men",
    colors: ["white", "blue", "red"],
    sizes: ["39", "40", "42"],
  },
];

const products = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const modalCloseHanlder = () => {
    setShowModal(!showModal);
  };
  const showAddProductModal = () => {
    setModalContent("add");
    setShowModal(true);
  };
  const showUpdateProductModal = () => {
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
          <ProductForm title="Update Product" />
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
            {productList.map((product, index) => (
              <Product
                product={product}
                key={index}
                showUpdateModal={showUpdateProductModal}
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
