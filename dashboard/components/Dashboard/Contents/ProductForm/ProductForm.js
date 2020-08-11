import React, { Component } from "react";

import classes from "./productForm.module.css";
import Input from "../../../UI/Input/Input";
import InputImage from "../../../UI/Input/InputImage";
import Button from "../../../UI/Button/Button";
import ImageCards from "../../../UI/ImageCards/ImageCards";
import { BASE_URL } from "../../../../lib/requests";

// lib
import Product from "../../../../lib/http/products";

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

class ProductForm extends Component {
  state = {
    productForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Product Name",
        },
        value: "",
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Product Price",
        },
        value: "",
      },
      quantity: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Quantity",
        },
        value: "",
      },
      sizes: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Sizes",
        },
        value: "",
      },
      colors: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Colors",
        },
        value: "",
      },
      category: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "---Select Category---" },
            { value: "men", displayValue: "Men" },
            { value: "women", displayValue: "Women" },
            { value: "kids", displayValue: "Kids" },
          ],
        },
        value: "",
      },
      brand: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "---Select Brand---" },
            { value: "nike", displayValue: "Nike" },
            { value: "clarks", displayValue: "Clarks" },
            { value: "Gucci", displayValue: "Gucci" },
          ],
        },
        value: "",
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          placeholder: "Product description",
        },
        value: "",
      },
    },

    image_urls: [],
  };
  //Input Change Handler
  inputChangeHandler = (event, inputIdentifier) => {
    const updatedProductForm = { ...this.state.productForm };
    const updatedFormElement = { ...updatedProductForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedProductForm[inputIdentifier] = updatedFormElement;
    this.setState({ productForm: updatedProductForm });
  };

  // File Change Handler
  onFileChangeHandler = (event) => {
    const formData = new FormData();
    formData.append("productImages", event.target.files);
    fetch(BASE_URL + "/api/uploads/products", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ image_urls: res.data.imageUrls });
      })
      .catch((err) => console.log("error", err));
  };

  //Adding Product Handler
  addProductHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let inputElementIdentifier in this.state.productForm) {
      formData[inputElementIdentifier] = this.state.productForm[
        inputElementIdentifier
      ].value;
    }

    const product = {
      productData: formData,
    };

    product.productData.sizes = product.productData.sizes
      .split(/[;,]/gim)
      .map((v) => Number.parseFloat(v));
    product.productData.colors = product.productData.colors.split(/[;,]/gim);

    // destructure product data
    const { productData } = product;

    // check the state of product form (add / update)
    if (this.props.title === "Update Product") {
      console.log("Update Product", productData);
    } else {
      console.log("Add Product", productData);
      // Create and save new product
      const newProduct = new Product(
        productData.name,
        productData.description,
        Number.parseFloat(productData.price),
        ["productData.image_urls"],
        Number.parseInt(productData.quantity),
        productData.category,
        productData.colors,
        productData.sizes,
        productData.brand
      );

      newProduct.sendSaveRequest();
    }
  };
  render() {
    let search = null;
    if (this.props.update) {
      search = (
        <div>
          <form className={classes.search}>
            <input type="text" placeholder="Enter Product Code" />
            <input type="submit" value="Search" />
          </form>
        </div>
      );
    }

    const formElementArray = [];
    for (let key in this.state.productForm) {
      formElementArray.push({
        id: key,
        config: this.state.productForm[key],
      });
    }
    return (
      <div className={classes.FormsWrapper}>
        <div className={classes.Form}>
          <h2>{this.props.title}</h2>
          {search}
          <form>
            {formElementArray.map((formElement, index) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) =>
                  this.inputChangeHandler(event, formElement.id)
                }
              />
            ))}
            <InputImage change={this.onFileChangeHandler} />
            <ImageCards image_urls={this.state.image_urls} />
            <Button clicked={this.addProductHandler}>{this.props.title}</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
