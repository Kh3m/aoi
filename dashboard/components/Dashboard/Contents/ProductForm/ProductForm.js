import React, { useState, useEffect } from "react";

import classes from "./productForm.module.css";
import Input from "../../../UI/Input/Input";
import InputImage from "../../../UI/Input/InputImage";
import Button from "../../../UI/Button/Button";
import ImageCards from "../../../UI/ImageCards/ImageCards";
import { BASE_URL } from "../../../../lib/requests";

import useProductActions from "../../../../hooks/store/actions/product";
import { useStore } from "../../../../hooks/store/store";

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

  // product http effects lib
  const { 
    sendSaveRequest,
    sendUpdateRequest
  } = useProductActions();
  const { product } = useStore()[0];

  useEffect(() => {
    console.log("productForm", props.selectProduct);
    const {selectProduct} = props;
    if(selectProduct) {
      const updatedProductForm = { 
        ...productForm,
        name: {...productForm.name, value: selectProduct.product_name},
        price: {...productForm.price, value: selectProduct.price},
        quantity: {...productForm.quantity, value: selectProduct.quantity},
        sizes: {...productForm.sizes, value: selectProduct.sizes.join(";")},
        colors: {...productForm.colors, value: selectProduct.colors.join(";")},
        category: {...productForm.category, values: selectProduct.category},
        brand: {...productForm.brand, value: selectProduct.brand},
        description: {...productForm.description, value: selectProduct.description},
      };
      
      setProductForm(updatedProductForm);
    }
  }, []);
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
      body: formData,
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
    let formData = {};
    for (let inputElementIdentifier in productForm) {
      formData[inputElementIdentifier] = productForm[ inputElementIdentifier ].value;
    }

    const product = {
      productData: formData,
    };

    product.productData.sizes = typeof product.productData.sizes === "string" ?
    product.productData.sizes.split(/[;,]/gim).map((v) => Number.parseFloat(v)) : product.productData.sizes;

    product.productData.colors = typeof product.productData.colors === "string" ?
    product.productData.colors.split(/[;,]/gim) : product.productData.colors;
    
    // destructure product data
    const { productData } = product;

    // check the state of product form (add / update)
    if(props.title === "Update Product") {
      console.log("Update Product", productData);
      sendUpdateRequest(
        props.selectProduct._id,
        {
          product_name: productData.name, 
          description: productData.description, 
          price: Number.parseFloat(productData.price), 
          image_urls: imageUrls, 
          quantity: Number.parseInt(productData.quantity), 
          category: productData.category,
          colors: productData.colors,
          sizes: productData.sizes,
          brand: productData.brand
        }
      )
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
          {/* <ImageCards image_urls={imageUrls.length ? imageUrls : props.selectProduct.image_urls} /> */}
          <ImageCards image_urls={imageUrls} />
          <Button clicked={addProductHandler}>Add Product</Button>
        </form>
      </div>
    </div>
  );
}

export default productForm;
