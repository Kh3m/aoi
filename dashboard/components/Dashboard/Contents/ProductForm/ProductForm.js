import React, { Component, useState, useEffect } from "react";

import classes from "./productForm.module.css";
import Input from "../../../UI/Input/Input";
import InputImage from "../../../UI/Input/InputImage";
import Button from "../../../UI/Button/Button";
import ImageCards from "../../../UI/ImageCards/ImageCards";
import { BASE_URL } from "../../../../lib/requests";

// lib
import useProductHttp from "../../../../lib/http/products";

const productForm = ( props ) => {
  const [productForm, setProductForm] = useState({
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
  });

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    console.log("loading", productLoading);
  });

  // product http effects lib
  const { sendSaveRequest, productLoading } = useProductHttp();

  //Input Change Handler
  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedProductForm = { ...productForm };
    const updatedFormElement = { ...updatedProductForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedProductForm[inputIdentifier] = updatedFormElement;
    setProductForm(updatedProductForm);
  };

  // File Change Handler
  const onFileChangeHandler = ( event ) => {
    console.log(event.target.files);
    const formData = new FormData();
    for(let file of event.target.files) {
      formData.append("products", file);
    }

    fetch(BASE_URL + "/api/uploads/products", {
        method: "PUT",
        body: formData
    })
    .then(res => res.json())
    .then(res => {
        setImageUrls(res.data.imageUrls);
    })
    .catch(err => console.log("error", err))
  }

  //Adding Product Handler
  const addProductHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let inputElementIdentifier in productForm) {
      formData[inputElementIdentifier] = productForm[ inputElementIdentifier ].value;
    }

    const product = {
      productData: formData,
    };

    product.productData.sizes = product.productData.sizes.split(/[;,]/img)
    .map(v => Number.parseFloat(v));
    product.productData.colors = product.productData.colors.split(/[;,]/img);

    // destructure product data
    const {
      productData
    } = product;

    // check the state of product form (add / update)
    if(props.title === "Update Product") {
      console.log("Update Product", productData);
    } else {
      console.log("Add Product", productData);
      // Create and save new product
      sendSaveRequest( 
        productData.name, 
        productData.description, 
        Number.parseFloat(productData.price), 
        imageUrls, 
        Number.parseInt(productData.quantity), 
        productData.category,
        productData.colors,
        productData.sizes,
        productData.brand
      );
    }   
  };

  let search = null;
  if (props.update) {
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
  for (let key in productForm) {
    formElementArray.push({
      id: key,
      config: productForm[key],
    });
  }
  return (
    <div className={classes.FormsWrapper}>
      <div className={classes.Form}>
        <h2>{props.title}</h2>
        {search}
        <form>
          {formElementArray.map((formElement, index) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) =>
                inputChangeHandler(event, formElement.id)
              }
            />
          ))}
          <InputImage change={onFileChangeHandler}/>
          <ImageCards image_urls={imageUrls} />
          <Button clicked={addProductHandler}>Add Product</Button>
        </form>
      </div>
    </div>
  );
}

export default productForm;
